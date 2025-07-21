const API_URL = 'http://localhost:5000/api/items';
const ADMIN_PASSWORD = '0769998718bM_';

// Elements
const loginScreen = document.getElementById('admin-login');
const dashboard = document.getElementById('admin-dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const itemsList = document.getElementById('items-list');
const addItemForm = document.getElementById('add-item-form');
const formMessage = document.getElementById('form-message');

// Session
function isLoggedIn() {
    return localStorage.getItem('admin_logged_in') === 'true';
}
function setLoggedIn(val) {
    localStorage.setItem('admin_logged_in', val ? 'true' : 'false');
}

// Show/hide screens
function showDashboard() {
    loginScreen.style.display = 'none';
    dashboard.style.display = 'block';
    fetchAndRenderItems();
}
function showLogin() {
    loginScreen.style.display = 'flex';
    dashboard.style.display = 'none';
}

// Login logic
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        setLoggedIn(true);
        showDashboard();
        loginForm.reset();
        loginError.textContent = '';
    } else {
        loginError.textContent = 'Incorrect password.';
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    setLoggedIn(false);
    showLogin();
});

// Fetch and render items
async function fetchAndRenderItems() {
    itemsList.innerHTML = '<div>Loading...</div>';
    try {
        const res = await fetch(API_URL);
        const items = await res.json();
        if (!Array.isArray(items) || items.length === 0) {
            itemsList.innerHTML = '<div style="color:var(--gray-600);">No items available.</div>';
            return;
        }
        itemsList.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <img src="${item.image || 'https://via.placeholder.com/70x70?text=No+Image'}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <div class="item-category">${item.category || ''}</div>
                    <div class="item-price">KES ${item.price || ''}</div>
                    <div class="item-description">${item.description || ''}</div>
                </div>
                <button class="delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i> Delete</button>
            `;
            itemsList.appendChild(card);
        });
        // Attach delete handlers
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
                if (!confirm('Delete this item?')) return;
                const id = this.getAttribute('data-id');
                await deleteItem(id);
            });
        });
    } catch (err) {
        itemsList.innerHTML = '<div style="color:#e11d48;">Failed to load items.</div>';
    }
}

// Add item
addItemForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('item-name').value.trim();
    const category = document.getElementById('item-category').value.trim();
    const price = document.getElementById('item-price').value.trim();
    const description = document.getElementById('item-description').value.trim();
    const imageFileInput = document.getElementById('item-image-file');
    let imageUrl = '';
    if (!name || !category || !price || !description) {
        formMessage.textContent = 'Please fill all required fields.';
        return;
    }
    formMessage.textContent = 'Adding...';
    // Handle image upload if file selected
    if (imageFileInput && imageFileInput.files && imageFileInput.files[0]) {
        const file = imageFileInput.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
            const uploadRes = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData
            });
            const uploadData = await uploadRes.json();
            if (uploadRes.ok && uploadData.url) {
                imageUrl = 'http://localhost:5000' + uploadData.url;
            } else {
                formMessage.textContent = uploadData.error || 'Image upload failed.';
                return;
            }
        } catch (err) {
            formMessage.textContent = 'Image upload failed.';
            return;
        }
    }
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, category, price, image: imageUrl, description,
                password: ADMIN_PASSWORD
            })
        });
        const data = await res.json();
        if (res.ok) {
            formMessage.textContent = 'Item added!';
            addItemForm.reset();
            fetchAndRenderItems();
        } else {
            formMessage.textContent = data.error || 'Failed to add item.';
        }
    } catch (err) {
        formMessage.textContent = 'Failed to add item.';
    }
});

// Delete item
async function deleteItem(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: ADMIN_PASSWORD })
        });
        if (res.ok) {
            fetchAndRenderItems();
        } else {
            alert('Failed to delete item.');
        }
    } catch (err) {
        alert('Failed to delete item.');
    }
}

// On load
if (isLoggedIn()) {
    showDashboard();
} else {
    showLogin();
} 
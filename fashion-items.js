const FASHION_API_URL = 'https://steamgx-collection-backend-1.onrender.com/api/items';
const fashionList = document.getElementById('fashion-items-list');
const galleryPlaceholder = document.getElementById('fashion-gallery-placeholder');

function renderFashionItems(items) {
    if (!Array.isArray(items) || items.length === 0) {
        fashionList.innerHTML = '';
        galleryPlaceholder.style.display = 'block';
        return;
    }
    galleryPlaceholder.style.display = 'none';
    fashionList.innerHTML = `<div class="fashion-grid">${items.map(item => `
        <div class="fashion-card">
            <div class="fashion-img-wrap">
                <img src="${item.image || 'https://via.placeholder.com/200x200?text=No+Image'}" alt="${item.name}" loading="lazy">
            </div>
            <div class="fashion-info">
                <h4>${item.name}</h4>
                <div class="fashion-category">${item.category || ''}</div>
                <div class="fashion-price">KES ${item.price || ''}</div>
                <div class="fashion-description">${item.description || ''}</div>
            </div>
        </div>
    `).join('')}</div>`;
}

async function fetchFashionItems() {
    try {
        const res = await fetch(FASHION_API_URL);
        const items = await res.json();
        renderFashionItems(items);
    } catch (err) {
        fashionList.innerHTML = '<div style="color:#e11d48;">Failed to load items.</div>';
        galleryPlaceholder.style.display = 'block';
    }
}

fetchFashionItems();

// Responsive grid styles (inject if not present)
(function addFashionGridStyles() {
    const style = document.createElement('style');
    style.textContent = `
    .fashion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        margin-top: 1.5rem;
    }
    .fashion-card {
        background: var(--white);
        border-radius: 14px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: box-shadow 0.2s, transform 0.2s;
        position: relative;
        min-height: 340px;
    }
    .fashion-card:hover {
        box-shadow: 0 8px 32px rgba(37,99,235,0.10);
        transform: translateY(-4px) scale(1.02);
    }
    .fashion-img-wrap {
        width: 100%;
        height: 220px;
        background: var(--light-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .fashion-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom: 1px solid var(--soft-blue);
        transition: transform 0.3s;
    }
    .fashion-card:hover .fashion-img-wrap img {
        transform: scale(1.05);
    }
    .fashion-info {
        padding: 1.2rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .fashion-info h4 {
        color: var(--navy-blue);
        margin: 0 0 0.2rem 0;
        font-size: 1.1rem;
    }
    .fashion-category {
        color: var(--primary-blue);
        font-size: 0.97rem;
        font-weight: 500;
    }
    .fashion-price {
        color: var(--gray-700);
        font-size: 1rem;
        font-weight: 600;
    }
    .fashion-description {
        color: var(--gray-600);
        font-size: 0.97rem;
        margin-top: 0.2rem;
    }
    @media (max-width: 600px) {
        .fashion-img-wrap {
            height: 150px;
        }
        .fashion-card {
            min-height: 260px;
        }
    }
    `;
    document.head.appendChild(style);
})(); 
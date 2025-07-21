# Steamgx Collection & Laundry Website

A modern, clean, and mobile-responsive website for Steamgx Collection & Laundry - a boutique that combines ladies' fashion and professional laundry services.

## 🎨 Design Features

- **Modern & Clean Design**: White and soft blue color theme
- **Mobile-Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Elegant transitions and hover effects
- **Professional Typography**: Poppins and Montserrat fonts
- **Accessibility**: WCAG compliant design elements

## 🚀 Features

### Core Sections
1. **Header**: Sticky navigation with logo and WhatsApp CTA
2. **Hero Section**: Eye-catching tagline with dual CTAs
3. **About Us**: Brand story and key features
4. **Services**: Split into Fashion Boutique and Laundry & Cleaning
5. **Location & Contact**: Complete contact information with map placeholder
6. **Testimonials**: Customer reviews with star ratings
7. **Footer**: Quick links and social media integration

### Interactive Elements
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **WhatsApp Integration**: Direct messaging buttons throughout
- **Hover Effects**: Interactive service items and buttons
- **Scroll Animations**: Elements animate as they come into view
- **Ripple Effects**: Material design-inspired button interactions

### Technical Features
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML
- **Cross-Browser Compatible**: Works on all modern browsers
- **Print Friendly**: Optimized for printing

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Color Palette

- **Primary Blue**: #2563eb
- **Soft Blue**: #dbeafe
- **Navy Blue**: #1e3a8a
- **Light Blue**: #eff6ff
- **White**: #ffffff
- **Gray Scale**: Various shades for text and backgrounds

## 📁 File Structure

```
steamgx-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Setup Instructions

### Quick Start
1. Download or clone the project files
2. Open `index.html` in a web browser
3. The website is ready to use!

### Local Development
1. Place all files in a web server directory
2. Access via `http://localhost/your-project-folder`
3. For live preview, use a local server like:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

### Deployment
1. Upload all files to your web hosting server
2. Ensure the domain points to the directory containing `index.html`
3. Test all functionality, especially WhatsApp links

## 🔧 Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #2563eb;    /* Main brand color */
    --soft-blue: #dbeafe;       /* Light blue accents */
    --navy-blue: #1e3a8a;       /* Dark blue for headings */
    /* ... other colors */
}
```

### Updating Content
1. **Business Information**: Edit contact details in `index.html`
2. **Services**: Modify service items in the services section
3. **Testimonials**: Replace with real customer reviews
4. **Images**: Replace placeholder divs with actual images

### Adding Real Images
Replace placeholder elements with actual images:
```html
<!-- Replace this -->
<div class="image-placeholder">
    <i class="fas fa-store"></i>
    <p>Our Boutique</p>
</div>

<!-- With this -->
<img src="path/to/your/image.jpg" alt="Our Boutique" class="about-image">
```

### Google Maps Integration
Replace the map placeholder with actual Google Maps embed:
```html
<!-- Replace this -->
<div class="map-placeholder">
    <i class="fas fa-map"></i>
    <p>Google Maps</p>
</div>

<!-- With this -->
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### WhatsApp Integration
Update WhatsApp numbers in the HTML:
```html
<!-- Replace with your actual WhatsApp number -->
<a href="https://wa.me/254769998718" target="_blank">
```

## 📞 Contact Information

The website includes these contact details:
- **Location**: Zimmerman, Base Road near Eagle Apartment
- **Phone**: 0769 998 718 | 0708 386 805
- **WhatsApp**: Direct messaging integration
- **Operating Hours**: Monday-Saturday 8AM-8PM, Sunday 9AM-6PM

## 🎨 Design Notes

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Secondary Font**: Montserrat (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

### Icons
- **Font Awesome 6.4.0**: Comprehensive icon library
- **Usage**: `<i class="fas fa-icon-name"></i>`

### Animations
- **CSS Transitions**: Smooth hover effects
- **JavaScript Animations**: Scroll-triggered animations
- **Performance**: Optimized for 60fps

## 🔍 SEO Optimization

The website includes:
- Proper meta tags and descriptions
- Semantic HTML structure
- Alt text for images (when added)
- Fast loading times
- Mobile-friendly design

## 🚀 Performance Features

- **Optimized CSS**: Efficient selectors and minimal redundancy
- **JavaScript Optimization**: Debounced scroll events
- **Resource Preloading**: Critical fonts and styles
- **Lazy Loading Ready**: Framework for image lazy loading

## 📋 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari, Chrome Mobile

## 🤝 Contributing

To customize or improve the website:
1. Make changes to the respective files
2. Test on multiple devices and browsers
3. Ensure all links and functionality work correctly
4. Optimize images and assets for web

## 📄 License

This website template is created for Steamgx Collection & Laundry. Feel free to customize for your own business needs.

## 🆘 Support

For technical support or customization requests:
- Check the browser console for any errors
- Ensure all files are in the same directory
- Verify that external resources (fonts, icons) are loading
- Test on different devices and browsers

---

**Built with ❤️ for Steamgx Collection & Laundry**

*Fashion. Freshness. All in One Place.* # steamgx-collection

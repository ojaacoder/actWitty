# ActWitty Learnings LLP - Educational Website

A fully responsive, modern website for ActWitty Learnings LLP, an education-focused company specializing in innovative learning solutions for children, parents, and educational institutions.

## 🎨 Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Kid-Friendly & Professional**: Vibrant colors with pastel/vibrant balance, suitable for both children and adults
- **Modern UI/UX**: Rounded cards, soft shadows, smooth animations, and intuitive navigation
- **Accessibility**: WCAG compliant with proper focus states, ARIA labels, and keyboard navigation
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript

## 📁 Project Structure

```
actiwitty-learnings/
├── index.html                 # Home page
├── template.html              # HTML template (not used directly)
├── pages/                     # Individual pages
│   ├── washable-books.html    # Washable Books (13 titles)
│   ├── write-wipe-books.html  # Write & Wipe Books (6 titles)
│   ├── educational-toys.html  # Educational Toys with carousel
│   ├── teaching-materials.html # Teaching & Learning Materials
│   ├── e-learning.html        # E-Learning platform
│   ├── design-development.html # Design & Development services
│   └── content-rights.html    # Content licensing
├── assets/
│   ├── css/
│   │   ├── styles.css         # Main styles
│   │   ├── header.css         # Header & navigation
│   │   ├── footer.css         # Footer styles
│   │   └── animations.css     # Animations & micro-interactions
│   ├── js/
│   │   └── main.js           # Main JavaScript functionality
│   └── images/               # Images directory (placeholder)
└── README.md                 # This file
```

## 🚀 Pages Overview

### Home Page (`index.html`)
- **Hero Section**: Catchy headline with call-to-action buttons
- **About Section**: Overview of company services (Publishing, Materials, Digital Learning, Design)
- **Services Overview**: Grid of clickable cards for all product categories

### Product Pages
1. **Washable Books** (13 titles): Interactive books with washable surfaces
2. **Write & Wipe Books** (6 titles): Reusable activity books
3. **Educational Toys**: STEM toys, creative arts, cognitive development
4. **Teaching & Learning Materials**: Comprehensive classroom resources
5. **E-Learning**: Online courses, videos, and interactive learning

### Service Pages
6. **Design & Development**: Book design, graphic design, AR/VR, LMS, documentation
7. **Content Rights Sale**: Licensing for publishers, institutions, and partners

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#4A90E2), Green (#7ED321), Yellow (#F5A623), Pink (#D0021B), Purple (#9013FE)
- **Secondary**: Pastel complements with balanced saturation
- **Neutral**: Professional grays and whites for text and backgrounds

### Typography
- **Primary Font**: Poppins (Google Fonts) - Modern and clean
- **Secondary Font**: Nunito - Friendly and approachable
- **Responsive Sizing**: Clamp() functions for fluid typography

### Components
- **Cards**: Rounded corners, soft shadows, hover animations
- **Buttons**: Gradient backgrounds, hover effects, multiple variants
- **Navigation**: Sticky header with mobile hamburger menu
- **Grid System**: Responsive CSS Grid with automatic column adjustment

## 🔧 Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Flexbox, CSS Grid, animations
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Font Awesome**: Icons for visual enhancement
- **Google Fonts**: Typography for better readability

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant colors
- **Reduced Motion**: Respects user preferences for reduced motion

## 🚀 Getting Started

1. **Clone/Download** the project files
2. **Open** `index.html` in a modern web browser
3. **Navigate** through the site using the header menu
4. **Test** responsiveness by resizing your browser window

### Local Development Server

```bash
# Using Python (recommended)
python -m http.server 8000

# Using Node.js (if available)
npx http-server

# Then visit http://localhost:8000
```

## 🎯 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## 📝 Customization

### Colors
Edit CSS custom properties in `assets/css/styles.css`:

```css
:root {
  --primary-blue: #4A90E2;
  --primary-green: #7ED321;
  /* ... other colors */
}
```

### Content
Update text content directly in HTML files or create a content management system for dynamic content.

### Images
Replace placeholder content in `assets/images/` with actual product images and graphics.

## 🔍 Performance Notes

- **CSS**: Modular architecture for maintainability
- **JavaScript**: Lightweight with no external dependencies
- **Images**: Optimized loading with lazy loading
- **Fonts**: Self-hosted for better performance
- **Animations**: Hardware-accelerated CSS animations

## 📞 Contact

For questions about this website or ActWitty Learnings LLP services:

- **Email**: actwitty.in@gmail.com
- **Phone**: +91 XXXXX XXXXX
- **Address**: 204 Supreme enclave Mayur Vihar Phase 1 Delhi 110091 India

---

**Built with ❤️ for joyful learning experiences**
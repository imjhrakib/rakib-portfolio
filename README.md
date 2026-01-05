# Rakib Portfolio - React.js

A modern, responsive portfolio website for Jaker Hossain Rakib, converted from HTML to React.js. This portfolio showcases skills, projects, and provides a contact form that sends emails to `jhrakib.dev@gmail.com`.

## Features

- **Modern React.js Architecture**: Component-based structure for better maintainability
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Beautiful dark theme with gradient accents
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Contact Form**: Integrated email functionality using mailto protocol
- **Interactive Elements**: Hover effects, floating animations, and smooth scrolling
- **Skills Visualization**: Progress bars and radial progress indicators
- **Project Showcase**: Grid layout with project cards and hover effects

## Tech Stack

- **React.js 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework with custom config
- **Font Awesome**: Icons and social media icons
- **Google Fonts**: Poppins font family
- **Material Symbols**: Google's material design icons

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section component
│   ├── BackgroundElements.jsx # Animated background elements
│   ├── Contact.jsx        # Contact form with email integration
│   ├── Footer.jsx         # Footer with social links
│   ├── Hero.jsx          # Hero/landing section
│   ├── Navbar.jsx        # Navigation component
│   ├── Projects.jsx      # Projects showcase
│   ├── ScrollToTop.jsx   # Scroll to top button
│   └── Skills.jsx        # Skills and expertise section
├── App.jsx               # Main app component
├── index.css            # Global styles and Tailwind imports
└── index.js             # React app entry point
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rakib-portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Contact Form Functionality

The contact form uses the `mailto:` protocol to open the user's default email client with pre-filled information:
- **Recipient**: jhrakib.dev@gmail.com
- **Subject**: Portfolio Contact from [User Name]
- **Body**: Formatted message with user's name, email, and message

## Customization

### Colors
The color scheme is defined in the Tailwind config within `public/index.html`:
- **Primary**: #8B5CF6 (Violet)
- **Secondary**: #D946EF (Fuchsia)
- **Dark**: #0F0E17
- **Dark Card**: #16161a

### Content
Update the following files to customize content:
- `src/components/Hero.jsx` - Personal information and introduction
- `src/components/About.jsx` - About section content
- `src/components/Projects.jsx` - Project data and links
- `src/components/Skills.jsx` - Skills and percentages

### Social Links
Update social media links in:
- `src/components/Hero.jsx` - Hero section social links
- `src/components/Footer.jsx` - Footer social links

## Performance Features

- **Smooth Scrolling**: Native CSS smooth scrolling
- **Optimized Images**: Lazy loading and optimized image sources
- **Minimal Bundle**: Only necessary dependencies included
- **CSS Animations**: Hardware-accelerated CSS animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please contact:
- **Email**: jhrakib.dev@gmail.com
- **GitHub**: [jhrakib](https://github.com/jhrakib)
- **LinkedIn**: [jhrakib](https://linkedin.com/in/jhrakib)
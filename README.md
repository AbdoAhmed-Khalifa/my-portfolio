# Abdelrahman Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features 3D animations, smooth scrolling, and comprehensive SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **3D Animations**: Three.js with React Three Fiber
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance**: Optimized loading and rendering
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Forms**: React Hook Form, EmailJS
- **Animations**: GSAP, Framer Motion

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### Build for Production

```bash
# Standard build
npm run build

# Build with SEO optimization (generates sitemap)
npm run build:seo
```

### SEO Setup

This portfolio includes comprehensive SEO optimization:

1. **Meta Tags**: Complete Open Graph, Twitter Cards, and standard meta tags
2. **Structured Data**: JSON-LD schema markup for better search results
3. **Sitemap**: Auto-generated XML sitemap
4. **Robots.txt**: Search engine crawling instructions
5. **PWA Support**: Web app manifest for mobile experience

### Before Deployment

1. **Update Domain**: Replace `your-domain.com` with your actual domain in:
   - `public/robots.txt`
   - `public/sitemap.xml`
   - `index.html` (canonical URLs and meta tags)
   - `scripts/generate-sitemap.js`

2. **Update Social Links**: Replace placeholder social media URLs in `index.html`:
   - GitHub profile
   - LinkedIn profile
   - Twitter handle

3. **Update Contact Info**: Update email in `public/.well-known/security.txt`

4. **Generate Sitemap**: Run `npm run generate-sitemap` to create an updated sitemap

### SEO Files Created

- `public/robots.txt` - Search engine crawling instructions
- `public/sitemap.xml` - Site structure for search engines
- `public/manifest.json` - PWA configuration
- `public/browserconfig.xml` - Windows tile configuration
- `public/.well-known/security.txt` - Security researcher contact
- `public/404.html` - Custom 404 page

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static assets
│   ├── assets/            # Images and media
│   ├── models/            # 3D models
│   ├── robots.txt         # SEO: Search engine instructions
│   ├── sitemap.xml        # SEO: Site structure
│   ├── manifest.json      # SEO: PWA manifest
│   └── .well-known/       # SEO: Security.txt
├── src/
│   ├── components/        # Reusable components
│   ├── sections/          # Page sections
│   └── constants/         # App constants
├── scripts/
│   └── generate-sitemap.js # SEO: Dynamic sitemap generator
└── index.html             # Main HTML with comprehensive SEO meta tags
```

## 🎯 SEO Features

- **Meta Tags**: Complete Open Graph, Twitter Cards, and standard meta tags
- **Structured Data**: JSON-LD schema markup for rich search results
- **Performance**: Optimized loading with preconnect hints
- **Accessibility**: Semantic HTML and ARIA labels
- **Mobile**: Responsive design and PWA support
- **Security**: Security.txt for vulnerability reporting

## 📈 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Vite and tree shaking
- **Images**: WebP format for better compression

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Abdelrahman - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/my-portfolio](https://github.com/your-username/my-portfolio)

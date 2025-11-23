# American Home Care Services and Staffing Website

A beautiful, responsive website for a home care and healthcare staffing agency built with HTML, CSS, and JavaScript. Ready for deployment on GitHub Pages.

## 🌟 Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**:
  - Home page with hero section and service overview
  - Home Care Services with detailed service descriptions
  - Healthcare Staffing solutions
  - Careers page with job application form
  - Contact page with contact form
  - About Us page with mission, vision, and team info
- **Interactive Forms**: Contact and career application forms with validation
- **Accessible**: Semantic HTML and ARIA-friendly
- **Fast Loading**: Optimized CSS and JavaScript

## 📁 Project Structure

```
American-liberty-homecare/
├── index.html              # Home page
├── services.html           # Home care services page
├── staffing.html           # Healthcare staffing page
├── careers.html            # Careers/job application page
├── contact.html            # Contact page
├── about.html              # About us page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript for interactivity
├── images/                 # Place your images here
└── README.md              # This file
```

## 🚀 Deployment to GitHub Pages

Follow these steps to deploy your website to GitHub Pages:

### Step 1: Initialize Git Repository

Open Terminal in VS Code (Terminal → New Terminal) and run:

```bash
cd /Users/ochubaudeagha/Desktop/American-liberty-homecare
git init
```

### Step 2: Add Remote Repository

Connect to your GitHub repository:

```bash
git remote add origin https://github.com/YOUR-USERNAME/Homecare-website-repository.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Add and Commit Files

```bash
git add .
git commit -m "Initial commit: Complete website for American Home Care Services"
```

### Step 4: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If prompted, enter your GitHub credentials or use a personal access token.

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/Homecare-website-repository`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/Homecare-website-repository/`

## 📝 Customization Guide

### Replace Dummy Information

All dummy information is clearly marked and can be easily replaced:

1. **Contact Information**:
   - Phone: `(555) 123-4567` → Your actual phone number
   - Email: `info@americanhomecare.com` → Your actual email
   - Address: `123 Care Street, Suite 100, Healthcare City, HC 12345` → Your actual address

2. **Company Name**:
   - Search and replace "American Home Care Services and Staffing" with your company name

3. **Leadership Team** (in `about.html`):
   - Replace dummy names and photos with your actual team members

4. **Service Areas** (in `contact.html`):
   - Update with your actual service locations

5. **Social Media Links** (in all page footers):
   - Replace `#` with your actual social media URLs

### Adding Images

1. Place your images in the `images/` folder
2. Update image references in HTML files:
   - Company logo
   - Team photos
   - Service images
   - Hero section backgrounds

### Customizing Colors

In `css/style.css`, update the CSS variables at the top:

```css
:root {
    --primary-color: #2c5f8d;      /* Main brand color */
    --secondary-color: #5a9bd5;    /* Secondary brand color */
    --accent-color: #e8a03e;       /* Accent/CTA color */
}
```

## 🔧 Technical Details

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- No external dependencies

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## ⚠️ Important Notes

1. **Forms**: The contact and career forms currently show alert messages. You'll need to:
   - Connect to a backend service (FormSpree, Netlify Forms, etc.)
   - Or add email functionality using a service like EmailJS

2. **File Uploads**: Resume upload functionality requires backend implementation

3. **Social Media**: Update footer social media links with your actual profiles

4. **Analytics**: Consider adding Google Analytics or similar tracking

## 🔐 Security Recommendations

1. Never commit sensitive information (API keys, passwords)
2. Use HTTPS for production
3. Implement rate limiting on forms if using backend
4. Add CAPTCHA to prevent spam on forms

## 📞 Support

For questions about customization or deployment, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This website template is provided as-is for use by American Home Care Services and Staffing.

---

**Built with ❤️ for better healthcare services**

Last Updated: November 2025

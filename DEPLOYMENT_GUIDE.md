# American Liberty Home Care - GitHub Pages Deployment Guide

## 📋 Overview

This repository contains a beautiful, fully responsive Home Care Services website built with HTML, CSS, and JavaScript. The website features all seven required services with a modern, professional design.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **7 Core Services**:
  - Personal Care Assistance
  - Companionship
  - Medication Reminder
  - Meal Preparation
  - Light Housekeeping
  - 24/7 Live-In Care (Featured)
  - Transportation
- **Contact Form**: Interactive form for consultation requests
- **Smooth Navigation**: Animated scroll and mobile-friendly menu
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 How to Push to GitHub and Deploy to GitHub Pages

### Step 1: Push Files to Your Repository

If you haven't already pushed these files to your GitHub repository, follow these steps:

```bash
# Navigate to your local repository
cd path/to/your/repository

# Add all files to staging
git add .

# Commit the changes
git commit -m "Add Home Care Services website"

# Push to GitHub (replace 'main' with your branch name if different)
git push origin main
```

### Step 2: Enable GitHub Pages

1. **Go to Your Repository on GitHub**
   - Navigate to https://github.com/oumazi2017/Homecare-website-repository

2. **Access Repository Settings**
   - Click on the **Settings** tab (top menu bar)

3. **Navigate to Pages Section**
   - In the left sidebar, scroll down and click on **Pages**

4. **Configure GitHub Pages**
   - Under "Build and deployment":
     - **Source**: Select "Deploy from a branch"
     - **Branch**: Select "main" (or your default branch)
     - **Folder**: Select "/ (root)"
   - Click **Save**

5. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - This usually takes 1-3 minutes
   - You'll see a message: "Your site is live at https://oumazi2017.github.io/Homecare-website-repository/"

6. **Visit Your Live Website**
   - Click on the provided URL or visit:
   - https://oumazi2017.github.io/Homecare-website-repository/

### Step 3: Verify Deployment

Once deployed, your website will be publicly accessible at:
**https://oumazi2017.github.io/Homecare-website-repository/**

## 🎨 Customizing the Website

### Replace Dummy Information

All dummy information is clearly marked and easy to replace:

#### 1. **Company Name and Branding**
- File: `index.html`
- Search for: "American Liberty Home Care"
- Replace with your actual business name

#### 2. **Contact Information**
- File: `index.html`
- Lines to update:
  ```html
  Phone: (555) 123-4567           → Your actual phone number
  Email: info@americanlibertyhomecare.com → Your actual email
  Address: 123 Care Street, Suite 100     → Your actual address
  Liberty City, LC 12345                   → Your city, state, zip
  ```

#### 3. **Hero Section Text**
- File: `index.html`
- Update the hero title and subtitle to match your brand message

#### 4. **About Section**
- File: `index.html`
- Update company history, statistics, and description
- Current stats: "15+ Years", "2,500+ Families", "98% Satisfaction"

#### 5. **Footer Information**
- File: `index.html`
- Update footer text and copyright year

### Changing Colors

To change the color scheme, edit `styles.css`:

```css
:root {
    --primary-color: #2196F3;      /* Main blue color */
    --secondary-color: #1976D2;    /* Darker blue */
    --accent-color: #FFC107;       /* Yellow accent */
    --text-dark: #212121;          /* Dark text */
    --text-light: #757575;         /* Light text */
}
```

### Adding Your Logo

Replace the 🏡 emoji in the header with your actual logo:

```html
<!-- Current -->
<h1>🏡 American Liberty Home Care</h1>

<!-- Replace with -->
<h1><img src="your-logo.png" alt="Company Logo"> Your Company Name</h1>
```

## 📱 Testing Your Website

### Local Testing

To test the website locally before pushing:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js (if you have npx)
npx serve

# Then visit: http://localhost:8080
```

### Browser Testing

Test your website on:
- ✅ Google Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Website Not Showing Up
- Wait 5-10 minutes after enabling GitHub Pages
- Clear your browser cache
- Check that files are in the root directory (not in a subfolder)

### Changes Not Appearing
- After pushing changes, GitHub Pages may take a few minutes to rebuild
- Force refresh your browser (Ctrl+F5 or Cmd+Shift+R)

### 404 Error
- Ensure your repository is public
- Check that `index.html` is in the root directory
- Verify GitHub Pages is enabled in repository settings

## 📄 License

Feel free to customize and use this template for your home care business.

## 🆘 Support

For questions or issues:
1. Check the GitHub Pages documentation: https://docs.github.com/en/pages
2. Review your repository settings
3. Ensure all files are properly committed and pushed

---

**Built with ❤️ for American Liberty Home Care**

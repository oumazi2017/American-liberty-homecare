# 🚀 GitHub Pages Deployment Guide

## Complete Step-by-Step Instructions for Deploying Your Website

---

## Prerequisites

Before you begin, make sure you have:
- ✅ A GitHub account (if not, create one at https://github.com)
- ✅ Git installed on your Mac (usually pre-installed)
- ✅ Your website files ready in the folder

---

## Part 1: Check Git Installation

Open Terminal in VS Code (or Mac Terminal) and verify Git is installed:

```bash
git --version
```

If you see a version number, Git is installed. If not, install it:

```bash
xcode-select --install
```

---

## Part 2: Configure Git (First Time Only)

Set your Git username and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace with your actual name and email (use the same email as your GitHub account).

---

## Part 3: Initialize Your Repository

Navigate to your project folder:

```bash
cd /Users/ochubaudeagha/Desktop/American-liberty-homecare
```

Initialize Git:

```bash
git init
```

---

## Part 4: Connect to GitHub Repository

### Option A: If Repository Already Exists on GitHub

Add the remote repository:

```bash
git remote add origin https://github.com/YOUR-USERNAME/Homecare-website-repository.git
```

**Important**: Replace `YOUR-USERNAME` with your actual GitHub username!

Example: If your username is "johndoe", use:
```bash
git remote add origin https://github.com/johndoe/Homecare-website-repository.git
```

### Option B: If Repository Doesn't Exist Yet

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Click "New repository"
4. Name it: `Homecare-website-repository`
5. Select "Public"
6. Do NOT initialize with README (you already have files)
7. Click "Create repository"
8. Then run the command from Option A above

---

## Part 5: Add and Commit Your Files

Add all files to Git:

```bash
git add .
```

Commit with a message:

```bash
git commit -m "Initial commit: American Home Care Services website"
```

---

## Part 6: Push to GitHub

Set the branch name to "main":

```bash
git branch -M main
```

Push your code to GitHub:

```bash
git push -u origin main
```

**Authentication Options:**

### If using HTTPS (recommended for beginners):
You'll be prompted for credentials. Use a **Personal Access Token** instead of password:

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Website Deployment"
4. Check the "repo" scope
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use this token as your password when pushing

### If using SSH:
Set up SSH keys first (advanced users):
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

---

## Part 7: Enable GitHub Pages

1. Go to your repository on GitHub:
   ```
   https://github.com/YOUR-USERNAME/Homecare-website-repository
   ```

2. Click on **"Settings"** (top navigation bar)

3. Click on **"Pages"** in the left sidebar

4. Under **"Build and deployment"**:
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**

5. Click **"Save"**

6. Wait 2-5 minutes for deployment

7. Refresh the page - you'll see a message:
   ```
   Your site is live at https://YOUR-USERNAME.github.io/Homecare-website-repository/
   ```

8. Click the link to view your live website!

---

## Part 8: Updating Your Website

Whenever you make changes to your website:

1. Save your changes in VS Code

2. Add the changes:
   ```bash
   git add .
   ```

3. Commit with a descriptive message:
   ```bash
   git commit -m "Updated contact information"
   ```

4. Push to GitHub:
   ```bash
   git push
   ```

5. Wait 1-2 minutes - your changes will be live!

---

## 🎨 Customization Checklist

After deployment, update these dummy values:

### Contact Information
- [ ] Phone numbers in all pages (search for "555")
- [ ] Email addresses (search for "@americanhomecare.com")
- [ ] Physical address (search for "123 Care Street")
- [ ] Business hours

### Company Details
- [ ] Company name if different
- [ ] About Us content
- [ ] Leadership team information
- [ ] Service areas

### Visual Elements
- [ ] Add company logo
- [ ] Add team photos
- [ ] Add service images
- [ ] Update colors in CSS if needed

### Links
- [ ] Social media links in footer
- [ ] Update privacy policy link
- [ ] Update terms of service link

---

## 🔧 Troubleshooting

### Problem: "Permission denied (publickey)"
**Solution**: Use HTTPS instead of SSH, or set up SSH keys properly

### Problem: "Repository not found"
**Solution**: Check your repository URL - make sure username and repo name are correct

### Problem: "Changes not showing on website"
**Solution**: 
- Wait 2-5 minutes
- Hard refresh browser (Cmd + Shift + R)
- Check GitHub Actions tab for build errors

### Problem: "403 Forbidden" when pushing
**Solution**: You need a Personal Access Token, not your password

### Problem: Website shows 404
**Solution**: 
- Make sure GitHub Pages is enabled in Settings → Pages
- Verify branch is set to "main" and folder to "/ (root)"
- Check that `index.html` exists in the root folder

---

## 📱 Testing Your Website

After deployment, test on:
- [ ] Desktop browser
- [ ] Mobile phone
- [ ] Tablet
- [ ] Different browsers (Chrome, Safari, Firefox)

Check:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms display properly
- [ ] Mobile menu works
- [ ] Links go to correct pages

---

## 🌐 Custom Domain (Optional)

To use your own domain name (e.g., www.yourcompany.com):

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)

2. In your repository settings → Pages:
   - Enter your custom domain
   - Click Save

3. In your domain registrar's DNS settings, add:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

4. Also add A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

5. Wait 24-48 hours for DNS propagation

---

## 📊 Adding Analytics (Optional)

To track website visitors, add Google Analytics:

1. Create account at https://analytics.google.com
2. Get your tracking code
3. Add before closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 💡 Pro Tips

1. **Commit Often**: Make small commits with clear messages
2. **Test Locally**: Always test changes locally before pushing
3. **Backup**: Keep a backup of your website files
4. **Documentation**: Update README.md with any changes
5. **Mobile First**: Always test on mobile devices

---

## 📞 Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Git Tutorials: https://git-scm.com/doc
- GitHub Community: https://github.community/

---

## ✅ Deployment Checklist

- [ ] Git installed and configured
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Website is live
- [ ] All pages load correctly
- [ ] Dummy data replaced with real information
- [ ] Mobile responsive check
- [ ] Cross-browser testing
- [ ] Forms tested (note: need backend for actual submission)
- [ ] Social media links updated
- [ ] Analytics added (optional)
- [ ] Custom domain configured (optional)

---

**Congratulations! Your website is now live! 🎉**

Your website URL: `https://YOUR-USERNAME.github.io/Homecare-website-repository/`

Share it with the world!

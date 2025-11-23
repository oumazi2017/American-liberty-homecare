#!/bin/bash

# American Home Care Website Deployment Script
# This script helps you deploy your website to GitHub Pages

echo "🏥 American Home Care Services - Website Deployment"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the website directory."
    exit 1
fi

echo "✅ Files found. Ready to deploy!"
echo ""

# Get GitHub username
echo "📝 Step 1: Enter your GitHub username"
echo "   (This is your username from github.com/YOUR-USERNAME)"
read -p "   GitHub Username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username cannot be empty"
    exit 1
fi

echo ""
echo "✅ Username: $GITHUB_USERNAME"
echo ""

# Construct the repository URL
REPO_URL="https://github.com/$GITHUB_USERNAME/Homecare-website-repository.git"

echo "🔗 Repository URL will be: $REPO_URL"
echo ""
read -p "   Is this correct? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo "❌ Deployment cancelled. Please run the script again with the correct username."
    exit 1
fi

echo ""
echo "📡 Step 2: Setting up remote repository..."

# Remove existing remote if it exists
git remote remove origin 2>/dev/null

# Add the new remote
git remote add origin "$REPO_URL"

if [ $? -eq 0 ]; then
    echo "✅ Remote repository configured!"
else
    echo "❌ Error: Could not set remote repository"
    exit 1
fi

echo ""
echo "📤 Step 3: Pushing to GitHub..."
echo ""
echo "   You may be asked to authenticate."
echo "   Use your Personal Access Token as the password."
echo ""
echo "   How to get a Personal Access Token:"
echo "   1. Go to github.com → Settings → Developer settings"
echo "   2. Click 'Personal access tokens' → 'Tokens (classic)'"
echo "   3. Click 'Generate new token (classic)'"
echo "   4. Give it a name and check 'repo' scope"
echo "   5. Copy the token and use it as your password"
echo ""
read -p "   Press Enter when ready to push..."

# Push to GitHub
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next Steps:"
    echo "   1. Go to: https://github.com/$GITHUB_USERNAME/Homecare-website-repository"
    echo "   2. Click 'Settings' → 'Pages'"
    echo "   3. Select Branch: 'main' and Folder: '/ (root)'"
    echo "   4. Click 'Save'"
    echo "   5. Wait 2-3 minutes"
    echo ""
    echo "🌐 Your website will be live at:"
    echo "   https://$GITHUB_USERNAME.github.io/Homecare-website-repository/"
    echo ""
    echo "📝 Don't forget to:"
    echo "   - Replace dummy phone numbers (555)"
    echo "   - Update email addresses"
    echo "   - Add your company logo"
    echo "   - Update team information"
    echo ""
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "   - Repository doesn't exist on GitHub"
    echo "   - Authentication failed (use Personal Access Token)"
    echo "   - Wrong username"
    echo ""
    echo "📖 See FIX-AND-DEPLOY.md for detailed troubleshooting"
    exit 1
fi

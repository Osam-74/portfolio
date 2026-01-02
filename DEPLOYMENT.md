# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Initial Setup
1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to **Pages** section
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use the automated workflow we've created

### 2. What We've Set Up

✅ **vite.config.ts** - Updated with base path for GitHub Pages (`/olamide-amusan-portfolio/`)
✅ **GitHub Actions Workflow** - Automatic build and deploy on push to main/master
✅ **.nojekyll** - Prevents Jekyll processing
✅ **Build Output** - Vite generates optimized files in `dist/` folder

### 3. How It Works

When you push to the `main` or `master` branch:
1. GitHub Actions automatically runs the workflow
2. Dependencies are installed
3. The site is built (`npm run build`)
4. Built files are deployed to GitHub Pages

### 4. Your Site URL

Your site will be available at:
```
https://yourusername.github.io/olamide-amusan-portfolio/
```

*Replace `yourusername` with your actual GitHub username*

### 5. Local Development

To test locally:
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 6. Manual Build

To manually create a production build:
```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### 7. Troubleshooting

**Issue: Site not showing up**
- Wait 2-3 minutes after push for deployment to complete
- Check the "Actions" tab in your repository for build status

**Issue: Links not working**
- The base path is set to `/olamide-amusan-portfolio/` for the repository
- All internal links should be relative paths

**Issue: Styles not loading**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)

### 8. Environment Variables

The site uses environment variables (e.g., GEMINI_API_KEY). To keep them secure:
1. Create a `.env.local` file locally (not committed)
2. For GitHub Actions, add secrets in repository Settings > Secrets and Variables > Actions
3. Reference them in the workflow if needed

---

**Your website is ready to deploy! 🚀**

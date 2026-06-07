# 📋 Available Commands

Quick reference for all npm commands available in this project.

## Development

```bash
# Start development server
npm run dev

# The dev server runs on http://localhost:3000
# Features:
# - Hot Module Reload (HMR)
# - Fast Refresh for React components
# - TypeScript error checking
# - ESLint checking
```

## Building & Testing

```bash
# Create optimized production build
npm run build

# Start production server (after building)
npm start

# Lint code with ESLint
npm run lint

# Lint and fix issues automatically
npm run lint -- --fix
```

## Package Management

```bash
# Install dependencies (already done)
npm install

# Update a specific package
npm update package-name

# Add a new package
npm install package-name

# Remove a package
npm uninstall package-name

# Check for security vulnerabilities
npm audit

# Fix known vulnerabilities
npm audit fix
```

## Development Tools

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Run type checking
npm run build  # includes type checking

# Check bundle size (after build)
npm run build
# Check .next/static/chunks for sizes
```

## Git Commands

```bash
# Check git status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# View commit history
git log --oneline -10

# Create a new branch
git checkout -b feature-name

# Switch between branches
git checkout branch-name

# Merge branch
git merge branch-name
```

## Deployment Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel (staging)
vercel

# Deploy to Vercel (production)
vercel --prod

# Set environment variables
vercel env add VARIABLE_NAME
```

## Development Workflow

### 1. Start Your Day
```bash
npm run dev
# Keep this running in one terminal
```

### 2. Edit Code
- Open files in your editor
- Save changes
- Auto-reload happens in browser

### 3. Before Committing
```bash
npm run lint -- --fix
npm run build
```

### 4. Commit and Push
```bash
git add .
git commit -m "Feature: add X"
git push origin main
```

### 5. Deploy (Vercel)
```bash
# Automatic if connected, or:
vercel --prod
```

## Troubleshooting Commands

```bash
# Clear everything and start fresh
rm -rf .next node_modules package-lock.json
npm install
npm run dev

# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Check Node version
node --version

# Check npm version
npm --version

# Update npm
npm install -g npm@latest
```

## Useful Aliases (Optional)

Add to your `.bashrc`, `.zshrc`, or terminal profile:

```bash
# Development
alias dev="npm run dev"
alias build="npm run build"
alias start="npm start"

# Git
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push origin main"

# Directory
alias portfolio="cd ~/Documents/portfolio"
```

## VS Code Extensions (Recommended)

Install these for better development experience:

```bash
# ESLint
code --install-extension dbaeumer.vscode-eslint

# Prettier
code --install-extension esbenp.prettier-vscode

# TypeScript
code --install-extension ms-vscode.vscode-typescript-next

# Tailwind CSS
code --install-extension bradlc.vscode-tailwindcss

# Three.js
code --install-extension bierner.comment-tagged-templates
```

## Performance Profiling

```bash
# Generate build analysis
npm run build

# Check bundle sizes
# Look in: .next/static/chunks/

# Monitor dev server performance
# Open browser DevTools (F12)
# Go to: Performance tab
# Record and check metrics
```

## Environment Setup

```bash
# Create .env.local for environment variables
echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local

# Create .env.production for production variables
echo "NEXT_PUBLIC_API_URL=https://yoursite.com" > .env.production
```

## Build Information

```bash
# View detailed build output
npm run build -- --debug

# Check build with verbose logging
npm run build 2>&1 | tee build.log
```

## Useful npm Scripts (Current)

```json
{
  "scripts": {
    "dev": "next dev",           // Start dev server
    "build": "next build",       // Build for production
    "start": "next start",       // Start production server
    "lint": "next lint"          // Run ESLint
  }
}
```

## Quick Reference Table

| Command | Purpose | Time |
|---------|---------|------|
| `npm run dev` | Local development | Instant |
| `npm run build` | Production build | 10-30s |
| `npm run lint` | Check code quality | 5s |
| `npm start` | Run production build | Instant |
| `git push` | Upload to GitHub | 5-10s |
| `vercel --prod` | Deploy to Vercel | 30-60s |

---

**Pro Tips**:
- Keep `npm run dev` running while developing
- Run `npm run build` before committing to catch errors
- Use git branches for features: `git checkout -b feature-name`
- Always push to GitHub before deploying

---

**Last Updated**: June 7, 2026

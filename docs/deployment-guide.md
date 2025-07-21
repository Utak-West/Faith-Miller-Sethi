# Deployment Guide - Faith Miller-Sethi Career Mapping Project

## 🚀 Vercel Deployment Instructions

### Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- GitHub repository access
- Vercel account setup

### Local Development Setup

```bash
# Clone the repository
git clone [repository-url]
cd faith-pharma-career-mapping

# Navigate to web application
cd web-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Environment Configuration

Create `.env.local` file in web-app directory:

```env
# Application Configuration
NEXT_PUBLIC_APP_NAME="Faith Miller-Sethi Career Mapping"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_CONFERENCE_DATE="August 6-8, 2025"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID="your-google-analytics-id"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL="faithmiller@gmail.com"
NEXT_PUBLIC_CONTACT_PHONE="(201) 658-2698"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/in/faith-miller-sethi-drph-mph"
```

### Vercel Deployment Steps

#### Method 1: Vercel CLI (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy from web-app directory
cd web-app
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: faith-pharma-career-mapping
# - Directory: ./
# - Override settings? No

# For production deployment
vercel --prod
```

#### Method 2: GitHub Integration

1. **Connect Repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select the repository

2. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Root Directory: `web-app`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**:
   - Add all variables from `.env.local`
   - Ensure `NEXT_PUBLIC_` prefix for client-side variables

4. **Deploy**:
   - Click "Deploy"
   - Wait for build completion
   - Access via provided URL

### Custom Domain Setup (Optional)

```bash
# Add custom domain via CLI
vercel domains add your-domain.com

# Or configure in Vercel dashboard:
# Project Settings > Domains > Add Domain
```

### Performance Optimization

#### Build Configuration

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['your-image-domains.com'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
}

module.exports = nextConfig
```

#### Performance Monitoring

```javascript
// Add to pages/_app.js or app/layout.js
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric)
    // Send to analytics service
  }
}
```

## 📱 Mobile Optimization

### Responsive Design Checklist
- [ ] Mobile-first CSS approach
- [ ] Touch-friendly interactive elements
- [ ] Optimized images for different screen sizes
- [ ] Fast loading on mobile networks
- [ ] Accessible navigation on small screens

### Testing on Mobile Devices

```bash
# Test on local network
npm run dev -- --hostname 0.0.0.0

# Access from mobile device using computer's IP
# http://[your-ip]:3000
```

## 🔒 Security Configuration

### Content Security Policy

Add to `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

### HTTPS Enforcement

Vercel automatically provides HTTPS. For custom domains:

```bash
# Ensure HTTPS redirect
vercel env add FORCE_HTTPS true
```

## 📊 Analytics & Monitoring

### Google Analytics Setup

```javascript
// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

### Performance Monitoring

```javascript
// Monitor Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric)
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

## 🧪 Testing & Quality Assurance

### Pre-Deployment Checklist

- [ ] All pages load correctly
- [ ] Interactive elements function properly
- [ ] Mobile responsiveness verified
- [ ] Performance scores acceptable (Lighthouse)
- [ ] Accessibility compliance (WCAG 2.1)
- [ ] Cross-browser compatibility tested
- [ ] Contact information accurate
- [ ] Content reviewed for accuracy

### Automated Testing

```bash
# Run tests before deployment
npm run test
npm run lint
npm run build

# Performance testing
npm run lighthouse
```

### Browser Compatibility Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: |
          cd web-app
          npm ci
      - name: Run tests
        run: |
          cd web-app
          npm run test
      - name: Build application
        run: |
          cd web-app
          npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./web-app
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Environment Variables Not Working**:
   - Ensure `NEXT_PUBLIC_` prefix for client-side variables
   - Restart development server after changes
   - Check Vercel dashboard for production variables

3. **Performance Issues**:
   - Optimize images using Next.js Image component
   - Implement code splitting
   - Use dynamic imports for heavy components

4. **Mobile Display Issues**:
   - Check viewport meta tag
   - Test responsive breakpoints
   - Verify touch targets are adequate size

### Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated**: July 21, 2025
**Version**: 1.0
**Maintainer**: AI Assistant
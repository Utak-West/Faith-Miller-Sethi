# Design Guidelines - Faith Miller-Sethi Career Mapping Project

##  Visual Identity & Brand Standards

### Color Palette

#### Primary Colors
```css
/* Pharmaceutical Blue - Primary brand color */
--pharma-blue: #1e40af;      /* rgb(30, 64, 175) */
--pharma-blue-light: #3b82f6; /* rgb(59, 130, 246) */
--pharma-blue-dark: #1e3a8a;  /* rgb(30, 58, 138) */

/* Medical Teal - Secondary accent */
--medical-teal: #0891b2;      /* rgb(8, 145, 178) */
--medical-teal-light: #06b6d4; /* rgb(6, 182, 212) */
--medical-teal-dark: #0e7490;  /* rgb(14, 116, 144) */

/* Professional Gray - Neutral base */
--professional-gray: #374151;  /* rgb(55, 65, 81) */
--light-gray: #f3f4f6;        /* rgb(243, 244, 246) */
--medium-gray: #9ca3af;       /* rgb(156, 163, 175) */
```

#### Supporting Colors
```css
/* Success & Status Colors */
--success-green: #10b981;     /* rgb(16, 185, 129) */
--warning-amber: #f59e0b;     /* rgb(245, 158, 11) */
--error-red: #ef4444;         /* rgb(239, 68, 68) */

/* Background & Text */
--background-white: #ffffff;   /* rgb(255, 255, 255) */
--text-primary: #111827;      /* rgb(17, 24, 39) */
--text-secondary: #6b7280;    /* rgb(107, 114, 128) */
```

### Typography

#### Font Families
```css
/* Primary Font - Modern Sans-Serif */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Secondary Font - Professional Serif for headings */
--font-secondary: 'Playfair Display', Georgia, serif;

/* Monospace - For code and data */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

#### Typography Scale
```css
/* Heading Sizes */
--text-6xl: 3.75rem;    /* 60px - Hero headings */
--text-5xl: 3rem;       /* 48px - Page titles */
--text-4xl: 2.25rem;    /* 36px - Section headings */
--text-3xl: 1.875rem;   /* 30px - Subsection headings */
--text-2xl: 1.5rem;     /* 24px - Card titles */
--text-xl: 1.25rem;     /* 20px - Large text */

/* Body Sizes */
--text-lg: 1.125rem;    /* 18px - Large body text */
--text-base: 1rem;      /* 16px - Default body text */
--text-sm: 0.875rem;    /* 14px - Small text */
--text-xs: 0.75rem;     /* 12px - Captions */
```

#### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Spacing System

#### Spacing Scale (Tailwind-based)
```css
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
```

#### Layout Spacing
```css
/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Section Spacing */
--section-padding-y: var(--space-16);
--section-padding-x: var(--space-6);
--content-max-width: var(--container-lg);
```

## 📐 Layout & Grid System

### Grid Structure
```css
/* 12-column grid system */
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--section-padding-x);
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: var(--space-4);
    padding: 0 var(--space-4);
  }
}
```

### Component Spacing
```css
/* Card spacing */
.card {
  padding: var(--space-6);
  margin-bottom: var(--space-6);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Section spacing */
.section {
  padding: var(--section-padding-y) 0;
}

/* Content spacing */
.content > * + * {
  margin-top: var(--space-4);
}
```

##  Component Design Standards

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--pharma-blue);
  color: var(--background-white);
  padding: var(--space-3) var(--space-6);
  border-radius: 0.375rem;
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--pharma-blue-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: var(--pharma-blue);
  border: 2px solid var(--pharma-blue);
  padding: var(--space-3) var(--space-6);
  border-radius: 0.375rem;
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--pharma-blue);
  color: var(--background-white);
}
```

### Cards

#### Standard Card
```css
.card {
  background: var(--background-white);
  border-radius: 0.75rem;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--light-gray);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
```

#### Feature Card
```css
.feature-card {
  background: linear-gradient(135deg, var(--pharma-blue-light), var(--medical-teal));
  color: var(--background-white);
  border-radius: 1rem;
  padding: var(--space-8);
  text-align: center;
}
```

### Navigation

#### Header Navigation
```css
.nav-header {
  background: var(--background-white);
  border-bottom: 1px solid var(--light-gray);
  padding: var(--space-4) 0;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: var(--font-medium);
  padding: var(--space-2) var(--space-4);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--pharma-blue);
  background-color: var(--light-gray);
}
```

##  Data Visualization Standards

### Chart Colors
```css
/* Primary data series */
--chart-primary: var(--pharma-blue);
--chart-secondary: var(--medical-teal);
--chart-tertiary: var(--success-green);

/* Multi-series palette */
--chart-series-1: #1e40af;  /* Pharma Blue */
--chart-series-2: #0891b2;  /* Medical Teal */
--chart-series-3: #10b981;  /* Success Green */
--chart-series-4: #f59e0b;  /* Warning Amber */
--chart-series-5: #8b5cf6;  /* Purple */
--chart-series-6: #ef4444;  /* Error Red */
```

### Chart Styling
```css
.chart-container {
  background: var(--background-white);
  border-radius: 0.75rem;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chart-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.chart-legend {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
  font-size: var(--text-sm);
}
```

## 📱 Responsive Design Guidelines

### Breakpoints
```css
/* Mobile First Approach */
/* xs: 0px - 639px (default) */
/* sm: 640px and up */
@media (min-width: 640px) { /* Small tablets */ }

/* md: 768px and up */
@media (min-width: 768px) { /* Large tablets */ }

/* lg: 1024px and up */
@media (min-width: 1024px) { /* Laptops */ }

/* xl: 1280px and up */
@media (min-width: 1280px) { /* Desktops */ }

/* 2xl: 1536px and up */
@media (min-width: 1536px) { /* Large desktops */ }
```

### Mobile Optimizations
```css
/* Touch targets */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* Mobile typography */
@media (max-width: 767px) {
  .mobile-text-scale {
    font-size: 0.9em;
    line-height: 1.5;
  }

  .mobile-heading {
    font-size: var(--text-2xl);
    line-height: 1.3;
  }
}

/* Mobile spacing */
@media (max-width: 767px) {
  .mobile-padding {
    padding: var(--space-4);
  }

  .mobile-margin {
    margin: var(--space-3) 0;
  }
}
```

## ♿ Accessibility Standards

### Color Contrast
- **AA Standard**: Minimum 4.5:1 contrast ratio for normal text
- **AAA Standard**: Minimum 7:1 contrast ratio for enhanced accessibility
- **Large Text**: Minimum 3:1 contrast ratio for text 18px+ or 14px+ bold

### Focus States
```css
.focus-visible {
  outline: 2px solid var(--pharma-blue);
  outline-offset: 2px;
  border-radius: 0.25rem;
}

/* Remove default focus for mouse users */
.focus:not(.focus-visible) {
  outline: none;
}
```

### Screen Reader Support
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 🎭 Animation & Transitions

### Standard Transitions
```css
/* Default transition */
.transition {
  transition: all 0.2s ease;
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Loading animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Page Transitions
```css
.page-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}
```

##  Implementation Checklist

### Design System Implementation
- [ ] CSS custom properties defined
- [ ] Typography scale implemented
- [ ] Color palette applied consistently
- [ ] Component library created
- [ ] Responsive breakpoints configured
- [ ] Accessibility standards met
- [ ] Animation system implemented
- [ ] Design tokens documented

### Quality Assurance
- [ ] Cross-browser compatibility tested
- [ ] Mobile responsiveness verified
- [ ] Accessibility audit completed
- [ ] Performance optimization applied
- [ ] Design consistency reviewed
- [ ] User experience tested
- [ ] Print styles optimized (for PDF)

---

**Last Updated**: July 21, 2025
**Version**: 1.0
**Design System**: Faith Miller-Sethi Career Mapping Project
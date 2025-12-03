# MyDoctorate.org Web Portal

A modern, professional React-based web portal for MyDoctorate.org, featuring a comprehensive navigation system and elegant hero section.

![MyDoctorate Portal](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple) ![Status](https://img.shields.io/badge/Status-Active-green)

## Features

### Header & Navigation
- **Logo**: Custom SVG graduation cap icon with MyDoctorate branding
- **Navigation Menu**: Full navigation with HOME, RESEARCHERS, SUPERVISORS, INSTITUTIONS, EMPLOYERS, APPLY, MEMBERS AREA, FAQs, and CONTACT US
- **Dropdown Menus**: 
  - **RESEARCHERS**: 7 submenu items (Tiered Membership, Study Portfolio, etc.)
  - **SUPERVISORS**: 10 training course options
  - **MEMBERS AREA**: Community Hub and VLE
- **Shopping Cart**: Icon with item count badge
- **Sticky Header**: Stays visible on scroll
- **Responsive Design**: Adapts to all screen sizes

### Home Page
- **Hero Section**: Professional gradient background with "GLOBAL DOCTORAL EXCELLENCE" tagline
- **Clean Typography**: Using Inter font for modern, readable text
- **Smooth Animations**: Fade-in effects for enhanced UX

## Project Structure

```
mydoctorate-portal/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx          # Main header component
│   │   │   ├── Header.css          # Header styling
│   │   │   ├── DropdownMenu.jsx    # Reusable dropdown
│   │   │   └── DropdownMenu.css    # Dropdown styling
│   │   ├── Logo/
│   │   │   ├── Logo.jsx            # SVG logo component
│   │   │   └── Logo.css            # Logo styling
│   │   └── Cart/
│   │       ├── ShoppingCart.jsx    # Cart icon component
│   │       └── ShoppingCart.css    # Cart styling
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.jsx            # Home page
│   │       └── Home.css            # Home page styling
│   ├── App.jsx                     # Main App component
│   ├── App.css                     # App styling
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
└── vite.config.js                  # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd /Users/premnathknarayanan/programming/antigravity_mydoctorate/mydoctorate-portal
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Component Documentation

### Header Component

The main navigation component with sticky positioning.

**Location**: `src/components/Header/Header.jsx`

**Features**:
- Responsive layout
- Hover effects on menu items
- Dropdown menu integration
- Shopping cart display

### DropdownMenu Component

Reusable dropdown menu with smooth animations.

**Props**:
- `label` (string): Display text for the dropdown trigger
- `items` (array): Array of menu items with `label` and `path` properties

**Example**:
```jsx
<DropdownMenu 
  label="RESEARCHERS" 
  items={[
    { label: 'Tiered Membership', path: '/researchers/tiered-membership' },
    // ...more items
  ]} 
/>
```

### Logo Component

SVG-based graduation cap logo with MyDoctorate text.

**Location**: `src/components/Logo/Logo.jsx`

**Features**:
- Scalable vector graphics
- Navy blue branding (#1e3a8a)
- Hover effects

### ShoppingCart Component

Shopping cart icon with item count badge.

**Props**:
- `itemCount` (number): Number of items in cart (default: 0)

## Color Palette

- **Primary Navy**: `#1e3a8a` - Navigation text, logo
- **Accent Blue**: `#2563eb` - Hover states
- **White**: `#ffffff` - Background
- **Gradient**: Navy to blue gradient for hero section

## Navigation Structure

### Main Menu Items
- HOME → `/`
- RESEARCHERS → Dropdown menu
- SUPERVISORS → Dropdown menu
- INSTITUTIONS → `/institutions`
- EMPLOYERS → `/employers`
- APPLY → `/apply`
- MEMBERS AREA → Dropdown menu
- FAQs → `/faqs`
- CONTACT US → `/contact`

### Researchers Submenu
1. Tiered Membership
2. Study Portfolio
3. Internship Marketplace
4. Fees & Pricing Structure
5. Platform Compliance and Readiness
6. Founding Roadmap
7. What we will measure

### Supervisors Submenu
1. Access to Doctorate
2. PhD (Thesis Pathway)
3. Management Training Courses
4. Teacher Training Course
5. PhD Supervisor Training
6. PhD (Publication Pathway)
7. Research Fellowship Training
8. Chartered Accountant Training
9. Entrepreneurship Training
10. Digital Marketeer Training

### Members Area Submenu
1. Members Community Hub
2. Virtual Learning Environment (VLE)

## Design Principles

1. **Professional**: Clean, academic aesthetic
2. **Accessible**: Proper contrast ratios and semantic HTML
3. **Responsive**: Mobile-first design approach
4. **Performant**: Optimized components and assets
5. **Maintainable**: Modular component structure

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Icons**: Icon library (Feather Icons)
- **CSS3**: Modern styling with animations
- **Google Fonts**: Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add React Router for full page navigation
- [ ] Implement mobile hamburger menu
- [ ] Create remaining pages (Institutions, Employers, etc.)
- [ ] Add search functionality
- [ ] Implement user authentication
- [ ] Shopping cart functionality

## License

© 2025 MyDoctorate.org. All rights reserved.

## Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Global Doctoral Excellence**

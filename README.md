# Punarv Pawade - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a sleek dark theme with light mode toggle and beautiful animations.

## ✨ Features

- **🎨 Dual Theme System**: Pitch black dark theme with selective light mode
- **💙 Light Blue Accents**: Beautiful light blue color scheme for buttons and interactive elements
- **🌓 Theme Toggle**: Seamless switching between dark and light themes with persistent preferences
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Smooth Animations**: Framer Motion powered animations and transitions
- **🎯 Modern UI/UX**: Clean, professional design with glassmorphism effects
- **🚀 Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🎨 Theme Details

### Dark Theme (Default)
- **Background**: Pitch black (#000000) with subtle gradients
- **Accents**: Light blue (#60a5fa) for primary actions
- **Cards**: Dark gray (#0a0a0a) with glassmorphism effects

### Light Theme
- **Background**: Clean white (#ffffff) with light gradients  
- **Accents**: Blue (#3b82f6) for primary actions
- **Cards**: Light gray (#f8fafc) with subtle shadows

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Built With

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Geist Font Family
- **Language**: TypeScript

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section with intro
│   │   ├── About.tsx         # About section
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Contact.tsx       # Contact form and info
│   │   ├── Footer.tsx        # Footer section
│   │   └── ThemeToggle.tsx   # Theme switching component
│   ├── globals.css           # Global styles and theme variables
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
```

## 🎯 Key Components

- **ThemeToggle**: Floating theme switcher with smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Glassmorphism Effects**: Modern glass-like UI elements
- **Animated Interactions**: Hover effects and smooth page transitions

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

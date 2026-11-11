# Talha Usman — QA Engineer Portfolio

A premium, production-ready personal portfolio website for a **Software Quality Assurance Engineer / Manual QA Tester**, built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready output will be in the `dist/` directory.

4. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
My_Portfolio/
├── public/
│   ├── favicon.svg             # Custom TU favicon
│   └── resume.pdf              # (Optional) Drop your CV here
├── src/
│   ├── components/
│   │   ├── sections/           # Individual page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx    # Includes interactive Case Study modal
│   │   │   ├── BugShowcase.tsx # Real QA bug report deep dive
│   │   │   ├── QaProcess.tsx   # 8-step QA methodology timeline
│   │   │   ├── Experience.tsx  # Work history, education, certifications
│   │   │   └── Contact.tsx     # Validated contact form & direct reach-out
│   │   ├── ui/                 # Reusable UI primitives
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── Navbar.tsx          # Sticky navigation with mobile menu & theme toggle
│   │   └── Footer.tsx          # Clean footer with back-to-top button
│   ├── context/
│   │   └── ThemeContext.tsx    # Light/Dark mode state & persistence
│   ├── data/                   # ⚠️ EDIT YOUR INFORMATION HERE
│   │   ├── personal.ts         # Name, email, phone, links, bio
│   │   ├── skills.ts           # Skills, tools, and knowledge areas
│   │   ├── projects.ts         # 4 QA projects, test cases, and bug reports
│   │   └── experience.ts       # Job history, education, certifications
│   ├── hooks/
│   │   └── useActiveSection.ts # Scrollspy for sticky navbar
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # React entry point
│   └── index.css               # Design system & Tailwind directives
├── index.html                  # HTML shell with SEO meta tags
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Design system colors, fonts, animations
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## ✏️ How to Customize Your Portfolio

All your personal details and project data are centralized inside `src/data/`. You **do not** need to touch the UI components to change your information.

### 1. Personal Information (`src/data/personal.ts`)
Update:
- `email`: Your actual contact email
- `phone`: Your contact phone number
- `linkedin`: Your LinkedIn profile URL
- `github`: Your GitHub profile URL
- `resumeUrl`: Link to your CV (or put `resume.pdf` in `/public` and use `'/resume.pdf'`)
- `photoUrl`: Path to your profile picture (or leave empty to keep the initials avatar)
- `yearsOfExperience`: Your exact years of experience (e.g., `'1+'` or `'2+'`)

### 2. Work Experience & Education (`src/data/experience.ts`)
Fill in:
- `experiences`: Replace the `[TODO:` entries with your actual jobs, dates, locations, and bullet points.
- `education`: Update with your degree, university name, and graduation years.
- `certifications`: Add any certifications (e.g., ISTQB, Postman, Agile).

### 3. Skills & Tools (`src/data/skills.ts`)
- Review the `skillCategories` list.
- If you are still learning a tool, add `status: 'learning'` to mark it with a learning chip.

### 4. Projects & Case Studies (`src/data/projects.ts`)
- Review the 4 included project templates:
  - **WiFi Analyzer** (Android)
  - **Screen Mirroring** (Android)
  - **GPS Navigation** (Android)
  - **AI Phone Cleaner** (Android)
- Replace `[TODO:` placeholders in `testEnvironment` with your actual test devices and OS versions.
- As you execute more tests, add your real test cases, screenshots, and bug reports.

### 5. Contact Form Integration (`src/components/sections/Contact.tsx`)
By default, the contact form validates input and provides a direct `mailto:` link so you never miss an inquiry. To connect it to a free form backend, you can integrate:
- [Formspree](https://formspree.io) (easiest: just add your endpoint URL)
- [EmailJS](https://www.emailjs.com/) (send emails directly from client-side React)
- [Web3Forms](https://web3forms.com/) (no backend required, access key based)

---

## 🎨 Design System

- **Background:** `#080B14` (Deep space dark)
- **Secondary Background:** `#101827`
- **Card Background:** `#151F32`
- **Primary Accent:** `#3B82F6` (Electric Blue)
- **Secondary Accent:** `#8B5CF6` (Vibrant Purple)
- **Main Text:** `#F8FAFC`
- **Secondary Text:** `#94A3B8`
- **Headings Font:** `Space Grotesk`
- **Body Font:** `Inter`
- **Theme:** Dark by default, with light mode toggle and `prefers-reduced-motion` support.

---

## 🚢 Deployment

You can deploy this portfolio for free in 2 minutes:

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects Vite. Click **Deploy**.

### Option B: Netlify
1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) and import the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**.

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "/your-repo-name/"` to `vite.config.ts`.
3. Add `"deploy": "gh-pages -d dist"` to `package.json` scripts.
4. Run `npm run build && npm run deploy`.

---

## 📄 License

This project is created for personal portfolio use by Talha Usman.


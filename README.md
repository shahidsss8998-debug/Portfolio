# Muhammed Shahid P — Developer Portfolio

A next-generation, creative developer portfolio showcasing full-stack web applications, interactive 3D web experiences, and verified software engineering milestones.

**Live Website:** [https://shahid-pf.netlify.app](https://shahid-pf.netlify.app)  
**Backend API:** [https://portfolio-backend-917v.onrender.com](https://portfolio-backend-917v.onrender.com)

---

## 🌟 Key Highlights & Design Vision

- **Interactive 3D Hero Experience:** Custom Three.js orbital sculpture featuring faceted physical crystal geometry, gyroscopic glowing rings, orbiting satellite polyhedra, a 750+ particle stardust constellation, dynamic cursor lighting, mouse parallax, and an automated WebGL fallback.
- **Modern Futuristic Aesthetic:** Deep midnight charcoal palette (`#050814`), vibrant electric violet and electric blue primary accents, cyan highlights, subtle glassmorphism, and responsive typography (Plus Jakarta Sans & Space Grotesk).
- **Smooth Interaction & Scrolling:** Integrated with Lenis smooth scroll and Motion animation primitives, respecting accessibility (`prefers-reduced-motion`) and touch device constraints.
- **Curated Selected Projects Showcase:** 7 production and practice projects with category filtering (`All`, `Full Stack`, `Frontend`, `Practice Projects`), 3D tilt effects, live demo links, repository source links, and an interactive project detail modal.
- **Verified Career & Academic Records:** Detailed timeline of 5 months of internship experience at Aspirasys, Chennai, industry job simulations (Forage & Skyscanner), verified Microsoft certification, and academic BCA coursework.
- **Robust Full-Stack Contact System:** Glassmorphic contact form connected to an Express.js backend with Brevo REST API email delivery, strict input and regex validation, honeypot spam protection, real async response handling, and direct social links.

---

## 🛠️ Technology Stack

### Frontend
- **React 19** (`react`, `react-dom`)
- **Vite 7** (`vite`, `@vitejs/plugin-react`)
- **Three.js** (`three`) — Custom WebGL 3D scenes & shader lighting
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`)
- **Lenis** (`lenis`) — Smooth physics-based inertial scrolling
- **Motion** (`motion`) — Interaction choreography & spring transitions

### Backend
- **Node.js & Express.js** (`server/server.js`)
- **Brevo REST API** (`@brevo/brevo` / HTTP API via `server/mailer.js`)
- **CORS & Dotenv** (`cors`, `dotenv`)

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── breaktime.png
│   ├── spoonful.png
│   ├── cart.png
│   ├── to-dolist2.png
│   ├── Rainbow.png
│   ├── iboot.png
│   ├── firstprj.png
│   ├── shahidimg.jpg
│   ├── My_Resume.pdf
│   ├── Certificate of 4 Month Internship.pdf
│   ├── Certificate of 1 Month Internship.pdf
│   ├── Forage_SoftwareEngineering Job Simulation_Certificate.pdf
│   ├── Front-End Software Engineering.pdf
│   ├── MsWord_Certificate.pdf
│   └── manifest.webmanifest
├── server/
│   ├── server.js              # Express REST API (Contact, Reply, Health)
│   ├── mailer.js              # Brevo HTTP API dispatch
│   └── package.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky glassmorphic nav with active tracker & mobile drawer
│   │   ├── Hero.jsx           # Hero headline, CTA buttons, social links & 3D container
│   │   ├── Hero3DScene.jsx    # Three.js interactive orbital core & WebGL fallback
│   │   ├── About.jsx          # Editorial asymmetric bio with photo frame & metrics
│   │   ├── Skills.jsx         # Categorized interactive tech constellation & filter tabs
│   │   ├── Projects.jsx       # 7 verified projects with filter tabs & interactive detail modal
│   │   ├── Resume.jsx         # Experience timeline, job simulations & certificate viewer
│   │   ├── Education.jsx      # Modern academic cards for BCA & Higher Secondary
│   │   ├── Contact.jsx        # Validated contact form with Brevo backend integration
│   │   └── Footer.jsx         # Footer with brand monogram, quick links & dynamic year
│   ├── App.jsx                # Root layout with Lenis initialization
│   ├── index.css              # Tailwind CSS 4 theme, custom scrollbar & glass styles
│   └── main.jsx
├── index.html                 # SEO metadata, Open Graph cards, Google Fonts
├── netlify.toml               # Netlify SPA build & redirect configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/shahidsss8998-debug/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Run backend server (Optional for local contact form testing)
```bash
cd server
npm install
npm start
```
By default, the backend runs on `http://localhost:5000`.

### 5. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🌐 Deployment Configuration

- **Frontend:** Hosted on [Netlify](https://www.netlify.com/) with automated SPA redirects configured in `netlify.toml`.
- **Backend:** Hosted on [Render](https://render.com/) running Express.js and communicating with Brevo SMTP / HTTP API.

---

## 👤 Author

**Muhammed Shahid P**
- Portfolio: [https://shahid-pf.netlify.app](https://shahid-pf.netlify.app)
- GitHub: [@shahidsss8998-debug](https://github.com/shahidsss8998-debug)
- LinkedIn: [in/shahyid](https://www.linkedin.com/in/shahyid/)
- Email: [shahidsss8998@gmail.com](mailto:shahidsss8998@gmail.com)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

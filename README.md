
# Portfolio (Next.js + Tailwind)

🚀 A bold, Apple-inspired portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Designed for a **self-taught Full-Stack Developer**, offering **web + hosting services**, building for **content creators**, and exploring the world of **AI**.

🔗 Live: [isaac.duckcloud.info](https://isaac.duckcloud.info)  
🖥️ Backend: Powered by [Strapi CMS](https://strapi.io) (integration coming soon)

---

## ✨ Features

- ⚡ **Next.js 15 App Router** with Turbopack (fast local dev)
- 🎨 **Apple-style design** — bold typography, minimal, high-contrast
- 💻 **Self-hosted & client projects** showcased as case studies
- 🛠️ **Services section** for web development, hosting, and AI solutions
- 📰 **Blog (Insights)** — technical posts & content for creators
- 🔌 **Strapi CMS integration ready** (projects, services, posts)
- 📱 **Responsive design** — mobile-first, sharp on all devices
- 🛡️ **TypeScript + ESLint** — safe and maintainable code
- ✍️ Built with **shadcn/ui**, **Framer Motion**, and **Lucide Icons**

---

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── (site)/         # Site layout + main pages
│   ├── projects/       # Projects showcase
│   ├── services/       # Services offered
│   ├── blog/           # Blog / Insights
│   └── contact/        # Contact page
├── components/         # UI + custom components (Navbar, Hero, Footer, Cards)
├── lib/                # Strapi API fetchers, utils, types
├── content/            # Temporary local data until Strapi is connected
├── styles/             # Tailwind global styles
public/                 # Static assets (images, favicons)
```

---

Clone and install dependencies:

```bash
git clone https://github.com/IsaacTalb/portfolio-nextjs.git
cd portfolio-nextjs
npm install
```

Run in development:

```bash
npm run dev
```

Visit → http://localhost:3000

🌍 Environment Variables
Create a .env.local file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Strapi API (for later integration)
STRAPI_URL=https://api.isaac.duckcloud.info
STRAPI_API_TOKEN=your_strapi_api_token
```

🚀 Deployment
This project is deployed on Vercel.

1. Push to GitHub
2. Import repository in Vercel dashboard
3. Set environment variables in Vercel
4. Assign custom domain → isaac.duckcloud.info

---

## 🛠️ Tech Stack

- Next.js 15 — React framework
- Tailwind CSS — Utility-first CSS
- TypeScript — Static typing
- Framer Motion — Animations
- shadcn/ui — Reusable UI components
- Lucide Icons — Icon set
- Strapi CMS — Headless CMS (coming soon)

---

## ✨ About

This portfolio reflects my journey as a self-taught developer:

🌐 Full-Stack Development
🖥️ Web Hosting & Infrastructure
🎥 Content Creation & Automation
🤖 AI Enthusiasm + Experiments

---

## 📬 Contact

📧 Email: isaac@duckcloud.info
🐙 GitHub: IsaacTalb

---

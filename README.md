# Pooja Panjwani — Personal Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-poojapanjwani01.github.io%2FPortfolio-00F2FE?style=for-the-badge&logo=githubpages&logoColor=black)](https://poojapanjwani01.github.io/Portfolio/)
[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br />

**Data Engineer × GenAI & AI Agent Developer**

*Building systems that turn data into intelligence.*

[**Explore Live Website →**](https://poojapanjwani01.github.io/Portfolio/)

</div>

---

## ⚡ Overview

A modern, highly interactive portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an editorial dark-first control center aesthetic inspired by modern developer and AI platforms.

### Core Highlights:
- **Interactive System Architecture Visualizers**: Real-time interactive simulators showcasing natural-language SQL generation and automated DataOps validation.
- **Dynamic Ambient Canvas Flow**: Lightweight HTML5 canvas particle simulation illustrating the end-to-end data pipeline (`DATA → PIPELINES → QUALITY → INTELLIGENCE → AGENTS`).
- **Interactive Technology Constellation**: Graph explorer highlighting interconnected ecosystem dependencies on hover.
- **Zero Template Clichés**: Minimalist typography, custom dark palette, no generic stock illustrations.
- **Accessibility & Performance**: Static export with sub-second page loads and automatic `prefers-reduced-motion` compliance.

---

## 🚀 Featured Systems

### 01. **DataPilot — AI SQL Agent**
- **Architecture**: `Natural Language → Schema Understanding → SQL Generation → Read-Only DB → Results`
- **Focus**: Enterprise read-only analytical interface converting natural language questions into verified `SELECT` SQL queries executed safely against replica stores.
- **Stack**: Python, FastAPI, Streamlit, LangChain, Google Gemini, PostgreSQL, Docker.

### 02. **DataOps AI Assistant**
- **Architecture**: `Source (S3) → ETL → Quality Checks → Validation → Telemetry → CloudWatch Alert`
- **Focus**: Intelligent data pipeline monitoring framework evaluating null spike anomalies, numeric range constraints, and schema drift assertions in real time.
- **Stack**: Python, AWS Lambda, AWS Glue, Step Functions, CloudWatch, Amazon S3, PySpark, SQL.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Custom CSS Variables, Dark Grid Pattern |
| **Animations** | Framer Motion, HTML5 Canvas API, SVG Pipelines |
| **Icons & UI** | Lucide React, Inline SVGs, `clsx`, `tailwind-merge` |
| **Deployment** | GitHub Actions (CI/CD) → GitHub Pages Static Export |

---

## 📁 Project Structure

```
portfolio/
├── .github/workflows/
│   └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── robots.txt            # Search engine crawler config
│   └── sitemap.xml           # XML sitemap for SEO
├── src/
│   ├── app/
│   │   ├── globals.css       # Global theme, utilities & scrollbar styles
│   │   ├── layout.tsx        # SEO metadata, Open Graph & typography
│   │   └── page.tsx          # Root portfolio page assembly
│   ├── components/
│   │   ├── hero/             # Hero statement, status pill & canvas flow
│   │   ├── what-i-build/     # 4 Core capability cards with hover stages
│   │   ├── projects/         # Selected Systems container & visualizers
│   │   │   └── architectures/
│   │   │       ├── SqlAgentVisualizer.tsx       # DataPilot simulator
│   │   │       └── DataOpsAssistantVisualizer.tsx # Pipeline validator
│   │   ├── philosophy/       # "From Data to Intelligence" 5-layer flow
│   │   ├── experience/       # System track at GDTC (headlines & stack)
│   │   ├── tech-stack/       # Interactive Technology Constellation
│   │   ├── about/            # Engineering principles & focus areas
│   │   ├── contact/          # Terminal CTA, email copier & links
│   │   ├── navigation/       # Sticky navbar & mobile drawer
│   │   ├── footer/           # System status, UTC clock & copyright
│   │   └── ui/               # Reusable badges, custom cursor & heading
│   ├── data/                 # Modular, typed data sources
│   │   ├── profile.ts        # Profile, contact & engineering bio
│   │   ├── projects.ts       # Showcased systems & architecture specs
│   │   ├── technologies.ts   # Tech inventory & relationship graph
│   │   ├── experience.ts     # Professional track records
│   │   └── whatIBuild.ts     # Core domain capabilities
│   ├── lib/                  # Motion variants & utility helpers
│   └── types/                # TypeScript interface definitions
├── next.config.ts            # Next.js static export & basePath config
└── package.json              # Project dependencies & scripts
```

---

## 💻 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/PoojaPanjwani01/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📬 Connect

- **Email**: [pujapanjwani154@gmail.com](mailto:pujapanjwani154@gmail.com)
- **LinkedIn**: [linkedin.com/in/poojapanjwani](https://www.linkedin.com/in/poojapanjwani/)
- **GitHub**: [github.com/PoojaPanjwani01](https://github.com/PoojaPanjwani01)

---

<div align="center">
  <sub>© 2026 Pooja Panjwani. Built with Next.js, TypeScript & Tailwind CSS.</sub>
</div>

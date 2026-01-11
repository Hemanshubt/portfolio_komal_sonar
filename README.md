# Komal Sonar - Portfolio Website

A modern, interactive 3D portfolio website built with Next.js, React, and Spline animations.

## 🚀 Live Demo

[komalsonar.site](https://portfolio-komal-sonar.vercel.app/)

## 👩‍💻 About

This portfolio showcases the work of **Komal Sonar**, a Full Stack Developer with expertise in React & AI Integration. Passionate about building scalable, interactive web applications using modern frontend frameworks and integrating AI/ML models into web platforms.

## ✨ Features

- 🎨 Modern UI with dark/light theme support
- 🌐 3D animations using Spline
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 📧 Contact form with email integration
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, Spline
- **UI Components:** Radix UI, Shadcn/ui
- **Email:** Nodemailer
- **Deployment:** Vercel

## 📂 Project Structure

```
├── public/
│   └── assets/          # Images, icons, 3D files
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # React components
│   ├── data/            # Configuration and constants
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   └── types/           # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/sonarkomalgithub/3d-portfolio.git
cd 3d-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form uses Gmail with Nodemailer. To set it up:

1. Enable 2-Step Verification on your Google account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Add credentials to `.env.local`

## 🔧 Configuration

Edit `src/data/config.ts` to customize:
- Site title and description
- Social media links
- Contact information

## � Contact

- **Email:** komalsonar19@gmail.com
- **LinkedIn:** [linkedin.com/in/komal-sonar1901](https://www.linkedin.com/in/komal-sonar1901/)
- **GitHub:** [github.com/sonarkomalgithub](https://github.com/sonarkomalgithub)

---

Made with ❤️ by Komal Sonar

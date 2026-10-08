# Prushti Pithadiya | Portfolio

Personal portfolio website built with **Blazor WebAssembly** and **.NET 9**.

🔗 **Live site:** https://prushtipithadiya.github.io

## About

I'm a Computer Engineering graduate and Senior Web Developer at Sky9 IT Craft. I build and maintain web applications with C#, .NET and Blazor. This site shows my experience, skills, projects and contact details.

## Features

- Responsive design for desktop, tablet and phone
- Dark mode by default, with a light/dark toggle that remembers your choice
- Top navigation bar on desktop and a bottom tab bar on mobile
- Active page highlight in the navigation
- Animated hero with a typing effect, count-up stats and a scrolling tech strip
- Latest public repositories loaded from the GitHub API
- Project filter by technology
- Working contact form (via Web3Forms)
- All content stored in JSON files, so no code changes are needed to update it

## Tech stack

| Area | Technology |
|---|---|
| Framework | Blazor WebAssembly (standalone), .NET 9 |
| Language | C#, JavaScript |
| Styling | Custom CSS (CSS variables, responsive layout) |
| Contact form | Web3Forms |
| Hosting | GitHub Pages with GitHub Actions |

## Project structure

```
Portfolio/
├── Components/     Navbar, ThemeToggle, ProjectCard, SkillBadge, TypingText
├── Layout/         MainLayout
├── Models/         Data models
├── Pages/          Home, About, Projects, Experience, Contact
├── Services/       SiteService, ThemeService
└── wwwroot/
    ├── data/       site.json, profile.json, experience.json, projects.json
    ├── css/        app.css
    ├── js/         interop.js
    └── resume.pdf
```

## Updating the content

All content lives in `wwwroot/data/`:

| To change | Edit |
|---|---|
| Name, job title, intro, links, tech strip | `site.json` |
| Bio, education, skills, languages, achievements | `profile.json` |
| Jobs, roles and bullet points | `experience.json` |
| Projects | `projects.json` |
| Resume | replace `wwwroot/resume.pdf` (keep the same file name) |

## Run locally

Requirements: [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)

```bash
git clone https://github.com/prushtipithadiya/prushtipithadiya.github.io.git
cd prushtipithadiya.github.io
dotnet run
```

Then open the address shown in the terminal.

## Deployment

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`. It publishes the app and deploys it to GitHub Pages.

## Contact

- Email: prushtipithadiya007@gmail.com
- LinkedIn: add your profile link
- GitHub: https://github.com/prushtipithadiya

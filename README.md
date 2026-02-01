# Personal Portfolio Website

Welcome to my personal portfolio website! This is where I showcase my projects, experience, and a bit about myself. Built with modern web technologies, this site reflects my journey as a developer and creator.

**🌐 Live Site**: [https://priyadharshini-sridhar.vercel.app/](https://priyadharshini-sridhar.vercel.app/)

## About This Project

This portfolio website serves as a digital space to highlight my work, skills, and professional experience. It features:

- **Projects Showcase**: A curated collection of my best work with detailed case studies
- **Experience Timeline**: My professional journey and accomplishments
- **Nerd Wall**: A fun section showcasing my interests and personality
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing

## Why it looks like this

I've started and abandoned like 10 portfolio sites. Each time I'd get halfway through, realize it was too formal or too content-heavy, and didn't actually represent me as a person — so I'd drop it. This time I wanted something that actually resonated with me and told a story. So enter mario!

Every visual element on this site is CSS pixel art. The coins, the pipes, the clouds, the book icon, the computer icon — all of it. No image files, no SVGs, no icon libraries. Each one is a `div` with a `::before` pseudo-element drawing individual pixels using `box-shadow`. The coin spin is `scaleX` going from 1 to 0 and back with `steps(8)` to keep it crunchy and 8-bit.

The cloud animation is inspired by my favorite game Two Dots. It has this thing where clouds part as you progress through a level and I always wanted to try to make something just as cool and what better place that a portfolio site. It generates 30 layers of clouds — 450 elements on desktop — each drifting in a random direction, clearing at different scroll speeds so it feels like a parallax reveal. On mobile it drops to 10 layers so your phone doesn't melt.

~5,400 lines of CSS, no Tailwind, no Bootstrap, no CSS-in-JS. Just vanilla CSS with custom properties. Light/dark mode is a single data-attribute toggle.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: CSS with custom animations
- **Content Management**: Markdown-based content system
- **Deployment**: Ready for deployment on Vercel, Netlify, or similar platforms

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── experience/        # Experience pages
│   ├── projects/          # Project pages
│   └── nerd-wall/         # Personal interests section
├── components/            # React components
├── content/              # Markdown content files
├── lib/                  # Utility functions and data
├── public/               # Static assets
└── styles/               # CSS stylesheets
```

## Customization

Feel free to fork this repository and make it your own! Here's how:

1. **Update Content**: Modify the content files in `/content/` to add your own projects and experiences
2. **Customize Styling**: Edit the CSS files in `/styles/` to match your personal brand
3. **Add Components**: Create new components in `/components/` to extend functionality
4. **Update Data**: Modify `/lib/data/` files to reflect your information

## Adding Your Own Content

### Projects
Add new project markdown files to `/content/projects/` with the following structure:
```markdown
---
title: Your Project Title
description: Brief description
date: YYYY-MM-DD
---

Your project content here...
```

### Experience
Add experience entries to `/content/experience/` following the same markdown format.

## Contact & Questions

Have questions or want to connect? Feel free to reach out (contact details on profile)!

## Contributing

While this is a personal portfolio, I'm open to suggestions and improvements! If you find a bug or have an idea:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Fork This Project

Want to use this portfolio as a template for your own? Go ahead! 

1. Click the "Fork" button at the top right of this repository
2. Clone your forked repository
3. Customize it with your own content, colors, and style
4. Deploy it and share your work with the world!

If you use this template, I'd love to see what you create! Feel free to tag me or send me a link.

---

**Built with ❤️ and 🍪s**

*Last updated: February 2026*

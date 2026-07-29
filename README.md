# Portfolio

My UX design portfolio, built with [Astro](https://astro.build) and hosted on [Netlify](https://netlify.com).

🔗 [benladesign.com](https://benladesign.com)

## Tech stack

- [Astro](https://astro.build) — static site framework
- [MDX](https://mdxjs.com) — case study content
- Hosted on [Netlify](https://netlify.com)

## Project structure

```
├── public/              # static assets
├── src/
│   ├── components/      # UI components
│   ├── content/
│   │   ├── blog/        # blog posts
│   │   └── case-studies/ # case study content
│   ├── layouts/
│   └── pages/            # site routes
├── astro.config.mjs
└── package.json
```

## Running locally

```bash
npm install
npm run dev       # start dev server at localhost:4321
npm run build     # build for production
npm run preview   # preview production build locally
```
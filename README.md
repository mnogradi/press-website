# North Pass Press Website

The website for [North Pass Press](https://northpass.press), a small publisher of restored, unabridged Christian and English literature. The site presents the press's editions, free downloads, articles, and typesetting services, and handles sales and email sign-ups through third-party services.

It is a static site written by hand in HTML, CSS, and JavaScript. There is no framework and no build step.

## Pages

| Page | Purpose |
| --- | --- |
| `index` | Home page |
| `about` | About the press |
| `publications` | Catalog of editions |
| `bunyan`, `defoe`, `courtship` | Individual book pages with purchase links and PDF previews |
| `commentary` | The John Gill Commentary Series, with a sign-up for release notices |
| `defoe-project` | Overview of the press's Defoe editions |
| `library` | Free downloads and external resources |
| `services` | Typesetting and related services |
| `articles` | Articles listing |
| `defoe-bestseller`, `scathing-review` | Individual articles |
| `contact` | Contact page |
| `privacy`, `terms` | Privacy policy and terms of use |

`sitemap.xml` lists the site's 16 public URLs.

## How it works

- **Layout and styling.** Every page loads [Tailwind CSS](https://tailwindcss.com) from its CDN, with the press's color palette (midnight, charcoal, ivory, and gold) defined in an inline `tailwind.config` block. Shared custom styles are in `assets/css/main.css`.
- **Shared behavior.** `assets/js/main.js` is loaded on every page.
- **Book purchases.** US paperbacks link to Stripe Payment Links, UK and international paperbacks link to an outside bookshop, and ebooks link to Payhip checkout.
- **Email list.** Sender's script is loaded on every page and powers the email sign-up buttons, such as "Notify Me of Release" on the commentary page.
- **Analytics.** PostHog records page views and a few events, such as preview clicks and copying the contact email.
- **Previews.** Book pages embed a sample PDF from `assets/docs/`.

All of the integrations run in the browser. There is no server code, and the repository contains no secrets. The identifiers in the page source (the PostHog project key, the Sender account ID, and the Stripe Payment Link URLs) are public by design.

## Repository layout

```
.
├── index.html
├── about.html
├── publications.html
├── bunyan.html
├── defoe.html
├── courtship.html
├── commentary.html
├── defoe-project.html
├── library.html
├── services.html
├── articles.html
├── defoe-bestseller.html
├── scathing-review.html
├── contact.html
├── privacy.html
├── terms.html
├── sitemap.xml
└── assets/
    ├── css/main.css
    ├── js/main.js
    ├── images/
    └── docs/          (PDF previews)
```

## Running locally

From the repository root, start any static file server, for example:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

Notes:

- Pages use root-relative paths such as `/assets/css/main.css`, so serve the site from the repository root. Opening a file directly from disk will not load the styles or scripts.
- The live site uses extensionless URLs (`/bunyan`), but a plain local server does not. Locally, use `bunyan.html`.

## Adding a book page

1. Copy an existing book page, such as `bunyan.html`, and update the title, description, canonical URL, and Open Graph tags.
2. Replace the cover image, the Stripe and Payhip links, and the preview PDF path.
3. Add the new URL to `sitemap.xml` and link it from `publications.html`.

## Known limitations

- Tailwind is loaded from its CDN at runtime, which is convenient but meant for prototyping. A compiled stylesheet would load faster and remove the external dependency.
- The pages share their navigation and footer by copy rather than by include, so changes to either must be made on every page.

## Contact

contact@northpass.press

## License

Copyright 2026 North Pass Press. All rights reserved.

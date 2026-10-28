# Marcos Faz Fernández — CV website

Personal CV website for the Hypermedia course (Part 1). It presents my profile as a Computer Engineering student specialising in IT and networks, my skills, academic projects, education and work experience.

- **Live site:** https://fazdezzz.github.io/cv-website/ <!-- update if the repository name changes -->
- **Figma design:** [Marcos Faz — CV website](https://www.figma.com/design/vh3FKBxX5OjgDz8zr8ABsn) (desktop 1440, mobile 390, colour variables, type scale and local components)

---

## 1. Project analysis

### 1.1 User profile — persona

**Laura Puig, 34 — Technical recruiter at an IT services company in Girona**

| | |
|---|---|
| **Role** | Recruits interns and junior profiles for the systems and network administration department. |
| **Tech level** | Not an engineer, but knows the vocabulary (Linux, DNS, networking) and works closely with the team leads who make the final call. |
| **Context of use** | Opens CVs from LinkedIn messages and email, mostly on a laptop at the office, sometimes on her phone between meetings. Spends about one minute on the first pass of each candidate. |
| **Goals** | Decide quickly whether the candidate fits an IT/networks internship; find concrete evidence of technical skills; know when and where the candidate is available; contact them without friction. |
| **Frustrations** | Generic CVs that list technologies with no context, long paragraphs that hide the important information, sites that look nice but make her hunt for the email address, pages that break on mobile. |
| **What she expects to find** | Current studies and year, area of specialisation, the main technical skills, one or two projects that prove them, languages, location and mobility, and a direct way to get in touch. |

A secondary user is the **team lead** who receives the link from Laura. He reads more slowly, cares about the projects (what was actually configured or built) and will click through to GitHub.

### 1.2 Information architecture

The website is a single page, so the information architecture is mainly the order and grouping of the sections, decided from the persona's one-minute first pass. The page is read from top to bottom in decreasing order of importance for an IT recruiter.

The **hero** answers the first three questions immediately: who I am (name), what I am (Computer Engineering student, IT and networks) and the essentials that filter candidates (location, languages, driving licence and own car). Next to it, a terminal runs a `traceroute`: each hop is one of the sections of the page with a one-line summary. It works as a visual table of contents and as navigation, so the whole CV can be scanned before scrolling.

After the hero come the sections in this order: **Skills**, **Projects**, **Education**, **Experience** and **Contact**. Skills go first because they are what the recruiter is matching against the job offer; they are grouped into Systems, Networking, Programming, Ways of working and Languages instead of a single long list. Projects come immediately after because they are the evidence for those skills, and they are the portfolio part of the CV, with a link to GitHub. Education is short (one degree) and comes before Experience because my seasonal jobs are not in the IT field, so they support the profile (responsibility, customer service) rather than lead it. Contact is the destination of the page, placed in the footer with the email, a copy button, GitHub and LinkedIn.

Every section uses the same two-column structure on desktop (title and short context on the left, content on the right) so the reader learns the pattern once. A sticky navigation bar keeps every section one click away and highlights where the reader is. On mobile the columns stack in the same order.

### 1.3 Visual design

The visual concept comes from my field: **the page is a network**. The hero is a terminal running `traceroute marcos-faz`, and each hop of the route is a section of the CV, ending with "destination reached" on the contact section. This is the one bold element of the design; the rest of the page stays calm and disciplined so it does not compete with the content.

**Colour.** Instead of a random accent colour, the palette is the colour code of Ethernet cables in the T568B standard: blue, green, orange and brown. Each section has its own wire colour (Skills blue, Projects green, Education orange, Experience brown), which appears in the navigation underline, the short "cable" above each section title, the tag borders and the timeline nodes. The colour therefore carries information: it tells the reader which section they are in. The base is a cool, slightly grey-green off-white (#F3F5F2) with a dark blue-grey ink (#16202B) for high contrast and readability. The footer shows the full RJ45 pinout, the eight wires in T568B order, as a closing detail. A dark theme is included; it follows the system preference and can be switched manually.

**Typography.** Archivo is the only family for the page. It has a width axis, which I use for hierarchy: the name is set extra-wide and heavy, the surname narrow and light, and section titles slightly expanded. JetBrains Mono is used only inside the terminal, where a monospace font is what you would actually see. In the Figma file, the Archivo Black and Archivo Narrow cuts stand in for the extreme widths of the variable font. Body text uses a modular scale (ratio 1.25), 1.6 line height and lines shorter than about 65 characters.

**Layout.** A centred 1120px column, generous vertical spacing, left-aligned text and a two-column grid per section. Education and Experience are drawn as a timeline (a cable with nodes) because they really are a sequence in time.

**Inspiration.** Terminal-based developer portfolios, network topology diagrams and the colour-coded labels of patch panels in server rooms.

---

## 2. Implementation

### Files

```
cv-website/
├── index.html   Page structure and content (semantic HTML5)
├── styles.css   All styles: design tokens, layout, components, responsive, dark theme, print
├── script.js    Optional enhancements (the page works without JavaScript)
└── README.md
```

### Technologies

- **HTML5 and CSS3 written by hand, no framework.** The page is small and has a very specific visual identity, so Bootstrap or similar would add weight and generic styles that would have to be overridden. CSS Grid and Flexbox cover the whole layout.
- **Vanilla JavaScript** for small enhancements: the traceroute animation order, the light/dark theme switch (remembered with `localStorage`), highlighting the current section in the navigation (`IntersectionObserver`) and the "Copy email" button.
- **Google Fonts:** Archivo and JetBrains Mono.

### Features

- **Responsive** from 320px phones to large desktop screens (two-column layouts collapse to one; the navigation adapts).
- **Light and dark theme**, automatic or manual.
- **Accessibility:** semantic landmarks and headings, skip link, visible keyboard focus, `aria-label`s, colour contrast checked for text, and `prefers-reduced-motion` respected (animations are turned off).
- **Print styles:** printing the page produces a clean paper CV without the navigation and terminal.

### Run locally

Open `index.html` in a browser. No build step is needed.

### Deployment

Published with GitHub Pages from the `main` branch (Settings → Pages → Deploy from a branch → `main` / root).

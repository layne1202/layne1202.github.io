## File Structure

```text
.
├── index.html      # Main academic homepage
├── styles.css      # Fixed sidebar CV layout, typography, responsive styles, and animations
├── script.js       # Smooth scrolling, language switching, mobile navigation, active section, and skill-bar behavior
├── assets/
└── README.md       # Project notes and deployment instructions
```

## Local Preview

Open `index.html` directly in a browser, or start a simple local server from this folder:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `layne1202.github.io` or `personal-homepage`.
2. Upload `index.html`, `styles.css`, `script.js`, `RESUME.pdf`, and this `README.md`.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Select the branch, usually `main`, and the root folder `/`.
6. Save. GitHub will publish the site after the Pages build finishes.


If you later provide a custom domain, add a `CNAME` file containing only that domain name, then configure the same domain in GitHub Pages settings and your DNS provider.

## Update Personal Information

- Edit the hero area in `index.html` to update name, title, affiliation, email, and profile links.
- `RESUME.pdf` is currently not linked on the homepage. Add a CV link in the hero section if you later want to publish it.
- Update the profile photo by replacing `assets/wzg.png`.
- Replace the remote Unsplash homepage background image in `styles.css` if you want a fully self-contained site.
- Update publications in the `Publications` section. Keep the format: authors, year, title, venue, volume/pages, DOI/link.
- Update projects in the `Projects` section. Each project card should include the research question, method, data/model, and link when available.
- Update patents, awards, academic activities, and contact details directly in `index.html`.
- Update bilingual interface text in `script.js` under the `translations` object. English is the default language.

## Notes

The page intentionally uses plain HTML, CSS, and a small amount of JavaScript. There is no build step, package manager, or framework dependency, so it is safe for GitHub Pages.

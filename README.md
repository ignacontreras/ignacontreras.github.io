ignacontreras.github.io

# Site design history

## Atelier design (branch `redesign-atelier`)

An editorial layout inspired by a museum-style Dribbble concept: full-bleed painted ground, large serif titles, tiny grotesque UI text, hairline rules, and a menu that opens onto the painting. Day and night modes both kept.

- **Painting as atmosphere only.** `assets/img/atelier/*.jpg` are cropped, colour-graded, grain-added derivatives of two public-domain paintings (a misty river scene and a water-lily pond). They are used behind a veil so they read as painted haze, not as a recognisable picture. The original high-resolution files are **not** in this repo.
- **The local `photos/` folder is never published.** It is listed in `.gitignore` and in `_config.yml` (`exclude`), so Jekyll does not copy it into `_site` either.
- **Layout files:** `_layouts/default.html` (shell), `home.html`, `research.html`, `teaching.html`, `blog.html`, `post.html`; `_includes/header.html` (top bar and menu overlay), `publication-item.html` ("fragment" cards).
- **Styles:** `assets/css/main.scss` (colour tokens for day/night) and `_sass/_atelier.scss`.
- **Home news** now lives in `index.md` front matter (`news:` list) instead of an HTML list in the body.
- **Fonts** (Google Fonts): Lora, Hanken Grotesk, Mrs Saint Delafield (the signature).
- Handy for previews: `?theme=dark` / `?theme=light` forces a mode, and `#menu` opens the menu overlay.
- Source credits for the derived textures: the water-lily and river paintings are in the public domain; the river scene was obtained via an Art Institute of Chicago photo on Unsplash.

Preview: `bundle exec jekyll serve --port 4003`.

## Other versions

- `main`: the classic site (and, once merged, whichever design is current).
- `redesign-monet`: matte oil-on-canvas look with a procedurally painted background.
- `classic-site` / tag `classic-2026-11-20`: the original design, if created (see the push instructions given with the Monet redesign).

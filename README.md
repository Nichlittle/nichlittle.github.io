# Signal Log

Nick's build log. Astro static site, deployed to GitHub Pages on every push to `main`.
"Signal Log" is a placeholder name; change it in `src/layouts/Base.astro` (`SITE_NAME`).

## One-time setup (plain-language version)

You need two things installed: **Node.js** (runs the site on your computer) and **Git** (tracks changes and sends them to GitHub).

1. **Install Node.js** (the LTS version) from nodejs.org.
2. **Open a terminal in this folder** and run `npm install`. This downloads Astro into a `node_modules` folder. You only do it once.
3. **Preview locally:** `npm run dev`, then open the address it prints (usually `http://localhost:4321/signal-log/`). Edits show up live. Drafts are visible here but hidden on the real site.

## Put it on GitHub

4. On github.com, create a **new empty repository** named `signal-log` (no README, no .gitignore — this folder already has them).
5. `astro.config.mjs` is already set for github.com/Nichlittle. If you name the repo something other than `signal-log`, change `base` to match.
6. In the terminal:
   ```
   git init                      # start tracking this folder
   git add .                     # stage every file for the first snapshot
   git commit -m "First commit"  # take the snapshot
   git branch -M main            # name the main line "main"
   git remote add origin https://github.com/Nichlittle/signal-log.git   # tell Git where GitHub is
   git push -u origin main       # send it up
   ```
7. On GitHub: repo **Settings → Pages → Source: GitHub Actions**. That's it. The workflow in `.github/workflows/deploy.yml` builds and publishes. Watch it run under the **Actions** tab; the site appears at `https://Nichlittle.github.io/signal-log/`.

## The everyday loop

1. Add a file to `src/content/posts/`, e.g. `my-new-post.md`, with this at the top:
   ```
   ---
   title: My new post
   description: One sentence for the list page.
   date: 2026-10-20
   draft: false
   tags: [agents]
   ---
   ```
2. Preview with `npm run dev`.
3. Ship it:
   ```
   git add .
   git commit -m "Post: my new post"
   git push
   ```
   About a minute later it's live.

## Later: custom domain

Buy the domain, add it under Settings → Pages → Custom domain, then in `astro.config.mjs` set `site` to the domain and delete the `base` line.

import { defineConfig } from 'astro/config';

// When you deploy to GitHub Pages WITHOUT a custom domain, your site lives at
//   https://nichlittle.github.io/REPO-NAME/
// so set `site` to the first part and `base` to '/REPO-NAME'.
// Once you add a custom domain, change `site` to it and delete the `base` line.
export default defineConfig({
  site: 'https://nichlittle.github.io',
  base: '/signal-log',
});

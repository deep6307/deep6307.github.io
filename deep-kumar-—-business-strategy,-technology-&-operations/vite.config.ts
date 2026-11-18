import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
      {
        name: 'generate-static-route-entrypoints',
        apply: 'build',
        closeBundle(): void {
          const distDir = path.resolve(__dirname, 'dist');
          const indexPath = path.join(distDir, 'index.html');
          if (!fs.existsSync(indexPath)) {
            throw new Error('Cannot generate static routes: dist/index.html is missing.');
          }

          const routePages = [
            {
              route: '/about/',
              title: 'About Deep Kumar | Business Strategy, Technology & Operations',
              description: 'Learn about Deep Kumar, a business professional based in Kolkata, India, with experience in entrepreneurship, business analysis, product management and procurement operations. Incoming PGDM ExP candidate at IMT Ghaziabad.',
              schemaType: 'ProfilePage',
              name: 'About Deep Kumar',
            },
            {
              route: '/projects/',
              title: 'Projects | Deep Kumar',
              description: 'Explore projects and independent initiatives by Deep Kumar across business analysis, product thinking, technology and operations.',
              schemaType: 'WebPage',
              name: 'Projects by Deep Kumar',
            },
            {
              route: '/d-talks/',
              title: 'D-Talks | Deep Kumar',
              description: 'D-Talks by Deep Kumar — independent business research, case studies and articles on strategy, technology and operations. Publishing launch coming soon.',
              schemaType: 'WebPage',
              name: 'D-Talks by Deep Kumar',
            },
            {
              route: '/resume/',
              title: 'Resume | Deep Kumar',
              description: 'Professional experience, capabilities, education and resume PDF for Deep Kumar.',
              schemaType: 'WebPage',
              name: 'Resume — Deep Kumar',
            },
          ];

          const escapeHtml = (value: string) =>
            value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

          const rootHtml = fs.readFileSync(indexPath, 'utf8');

          for (const page of routePages) {
            const canonicalUrl = 'https://deep6307.github.io' + page.route;
            let html = rootHtml;
            html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>' + escapeHtml(page.title) + '</title>');
            html = html.replace(/<meta\s+name="description"[\s\S]*?\/>/, '<meta name="description" content="' + escapeHtml(page.description) + '" />');
            html = html.replace(/<link\s+rel="canonical"[^>]*\/>/, '<link rel="canonical" href="' + canonicalUrl + '" />');
            html = html.replace(/<meta\s+property="og:url"[^>]*\/>/, '<meta property="og:url" content="' + canonicalUrl + '" />');
            html = html.replace(/<meta\s+property="og:title"[^>]*\/>/, '<meta property="og:title" content="' + escapeHtml(page.title) + '" />');
            html = html.replace(/<meta\s+property="og:description"[\s\S]*?\/>/, '<meta property="og:description" content="' + escapeHtml(page.description) + '" />');
            html = html.replace(/<meta\s+name="twitter:title"[^>]*\/>/, '<meta name="twitter:title" content="' + escapeHtml(page.title) + '" />');
            html = html.replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, '<meta name="twitter:description" content="' + escapeHtml(page.description) + '" />');

            html = html.replace(
              /<meta\s+name="robots"[^>]*\/>/,
              '<meta name="robots" content="' + (page.route === '/d-talks/' ? 'noindex,follow' : 'index,follow') + '" />'
            );

            const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
            if (schemaMatch) {
              const schema = JSON.parse(schemaMatch[1]);
              schema['@graph'] = (schema['@graph'] || []).filter((item: Record<string, unknown>) =>
                item['@type'] !== 'ProfilePage' && item['@type'] !== 'WebPage'
              );
              schema['@graph'].push({
                '@type': page.schemaType,
                '@id': canonicalUrl + '#page',
                url: canonicalUrl,
                name: page.name,
                description: page.description,
                inLanguage: 'en-IN',
                isPartOf: { '@id': 'https://deep6307.github.io/#website' },
                ...(page.schemaType === 'ProfilePage'
                  ? { mainEntity: { '@id': 'https://deep6307.github.io/#person' } }
                  : {}),
              });
              html = html.replace(schemaMatch[0], '<script type="application/ld+json">\n' + JSON.stringify(schema, null, 2) + '\n</script>');
            }

            const outputDir = path.join(distDir, page.route.replace(/^\/|\/$/g, ''));
            fs.mkdirSync(outputDir, {recursive: true});
            fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

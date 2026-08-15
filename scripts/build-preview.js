'use strict';

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

const tempDir = path.join(__dirname, '..', 'temp');
const outFile = path.join(tempDir, 'preview.js');
const htmlFile = path.join(tempDir, 'preview.html');
const projectRoot = path.join(__dirname, '..');

async function buildPreview() {
  fs.mkdirSync(tempDir, { recursive: true });

  await esbuild.build({
    entryPoints: [path.join(projectRoot, 'src', 'preview', 'bootstrap.tsx')],
    bundle: true,
    outfile: outFile,
    format: 'iife',
    platform: 'browser',
    target: ['es2018'],
    alias: {
      '~@fluentui/react/dist/sass/References.scss': path.join(
        projectRoot,
        'src',
        'preview',
        'fluentui-references.scss'
      )
    },
    plugins: [
      sassPlugin({
        filter: /\.module\.scss$/,
        type: 'local-css'
      }),
      sassPlugin({
        filter: /\.scss$/,
        type: 'style'
      })
    ],
    define: {
      'process.env.NODE_ENV': '"development"'
    },
    logLevel: 'info'
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>World Cup 2026 Infrastructure Tracker</title>
  <link rel="stylesheet" href="/temp/preview.css" />
</head>
<body>
  <div id="root"></div>
  <script src="/temp/preview.js"></script>
</body>
</html>`;

  fs.writeFileSync(htmlFile, html, 'utf8');
  console.log('Generated ' + htmlFile);
}

buildPreview().catch(function (err) {
  console.error(err);
  process.exit(1);
});

'use strict';

const fs = require('fs');
const path = require('path');
const { WorkbenchPage } = require('@microsoft/sp-webpart-workbench/lib/api/WorkbenchPage');

const tempDir = path.join(__dirname, '..', 'temp');
const outputPath = path.join(tempDir, 'workbench.html');

fs.mkdirSync(tempDir, { recursive: true });

const workbenchPage = new WorkbenchPage();
const html = workbenchPage._generateWorkbenchPageContent();

fs.writeFileSync(outputPath, html, 'utf8');
console.log('Generated ' + outputPath);

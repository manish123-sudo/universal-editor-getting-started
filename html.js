export default function html({ title = "My EDS Site", content }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    ${readFragment('head.html')}
  </head>
  <body>
    <header>${readFragment('header.html')}</header>
    <main>
      ${content}
    </main>
    <footer>${readFragment('footer.html')}</footer>
  </body>
</html>`;
}

// Utility to fetch HTML fragments locally
import fs from 'fs';
import path from 'path';
function readFragment(file) {
  const filePath = path.resolve(process.cwd(), file);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

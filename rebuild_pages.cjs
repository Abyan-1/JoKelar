const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'src/pages/Beranda.js', src: 'temp_zip/beranda_jokelar_main.html' },
  { file: 'src/pages/Katalog.js', src: 'temp_zip/katalog_tugas_jokelar_main.html' },
  { file: 'src/pages/Kontak.js', src: 'temp_zip/kontak_order_jokelar_main.html' },
  { file: 'src/pages/Pendiri.js', src: 'temp_zip/pendiri_jokelar_main.html' }
];

const links = {
  'https://wa.me/6281234567890': 'https://wa.me/message/RUK4IFU7KE4YK1',
  'https://wa.me/': 'https://wa.me/message/RUK4IFU7KE4YK1',
  'https://instagram.com': 'https://www.instagram.com/jokelartugas?stkn=MXI0NjgzZzVxcGV5eg==',
  'https://twitter.com': 'https://x.com/JoKelarHub',
  'cs@jokelar.id': 'jokelartugas@gmail.com',
  '+62 812-3456-7890': '+62 812-3456-7890'
};

mappings.forEach(m => {
  if (!fs.existsSync(m.src)) return;
  let html = fs.readFileSync(m.src, 'utf8');
  
  let scriptContent = '';
  html = html.replace(/<script>([\s\S]*?)<\/script>/gi, (match, script) => {
    scriptContent += script + '\n';
    return '';
  });
  
  html = html.replace(/https:\/\/wa\.me\/6281234567890[^\"']*/g, 'https://wa.me/message/RUK4IFU7KE4YK1');
  html = html.replace(/https:\/\/wa\.me\/?/g, 'https://wa.me/message/RUK4IFU7KE4YK1');
  html = html.replace(/https:\/\/instagram\.com/g, 'https://www.instagram.com/jokelartugas?stkn=MXI0NjgzZzVxcGV5eg==');
  html = html.replace(/https:\/\/twitter\.com/g, 'https://x.com/JoKelarHub');
  html = html.replace(/cs@jokelar\.id/g, 'jokelartugas@gmail.com');
  html = html.replace(/onclick=\"[^\"]*\"/gi, '');
  
  const jsContent = `
export function render() {
  return \`
${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}
  \`;
}

export function init() {
${scriptContent}
}
`;

  fs.writeFileSync(m.file, jsContent);
});
console.log('Pages updated successfully');

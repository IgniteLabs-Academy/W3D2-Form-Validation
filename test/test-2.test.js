const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('There is a span with class error for validation messages', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  expect(document.querySelector('span.error')).not.toBeNull();
});

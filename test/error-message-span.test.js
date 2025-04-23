const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Error message span', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Error message span
  expect(document.querySelector('span.error')).not.toBeNull();
});

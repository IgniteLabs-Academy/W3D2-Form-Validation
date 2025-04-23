const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Form exists', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Form exists
  expect(document.querySelector('form')).not.toBeNull();
});

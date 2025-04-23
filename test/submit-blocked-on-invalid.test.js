const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Submit blocked on invalid', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Submit blocked on invalid
  expect(document.querySelector('form').noValidate).toBe(false);
});

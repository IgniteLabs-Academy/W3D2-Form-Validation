const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Input required', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Input required
  const input = document.querySelector('input'); expect(input?.required).toBe(true);
});

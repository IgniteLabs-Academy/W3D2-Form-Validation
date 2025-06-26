const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('At least one input is required', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const requiredInputs = document.querySelectorAll('input[required]');
  expect(requiredInputs.length).toBeGreaterThan(0);
});

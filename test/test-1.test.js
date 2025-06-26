const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Email input is present and uses HTML5 validation', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const email = document.querySelector('input[type="email"]');
  expect(email).not.toBeNull();
  expect(email.required).toBe(true);
});

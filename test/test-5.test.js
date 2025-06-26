const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Password input has minlength of 6', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const password = document.querySelector('input[type="password"]');
  expect(password).not.toBeNull();
  expect(password.getAttribute('minlength')).toBe('6');
});

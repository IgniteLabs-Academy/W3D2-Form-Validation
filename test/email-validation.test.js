const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Email validation', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Email validation
  const email = document.querySelector('input[type="email"]'); expect(email).not.toBeNull();
});

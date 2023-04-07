const pug = require('pug');

const menuItems = [
    { path: '/', title: 'Home', isActive: true },
    { path: '/about-me', title: 'About', isActive: false },
    { path: '/references', title: 'References', isActive: false },
    { path: '/contact-me', title: 'Contact', isActive: false },
];

const layout = pug.compileFile('./layout.pug');
const home = pug.compileFile('./home.pug');

const data = {
  menuItems: menuItems,
  pageTitle: 'test',
  pageContent: '<p>test</p>'
};

const html = layout({
  ...data,
  pageContent: home(data)
});

console.log(html);
const pug = require('pug');

const templatePath = 'template.pug';

const user = {
  isAdmin: true
};

const compile = pug.compileFile(templatePath);
const render = compile({ user });

console.log(render);
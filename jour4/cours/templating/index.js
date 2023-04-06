const pug = require('pug')

// compile

// const template = `
// if age >= 18
//     h1 Access granted
// else
//     h1 Permission denied!`;

// const compileTemplate = pug.compile(template)

// const result = compileTemplate({ age : 9 })

// console.log(result);

// const compileTemplate = pug.compileFile('template.pug')

// const result = compileTemplate({ age : 19 })

// Render

// pug.render(template, {age: 19}, (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Render avec fichier externe

// pug.renderFile('template.pug', {age: 19}, (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// try {
//     const compileTemplate = pug.compile(template)
//          // ...
// } catch(err) {
//     res.writeHead(500, { 'Content-Type' : 'text/plain'})
//     res.end(err.message)
// }
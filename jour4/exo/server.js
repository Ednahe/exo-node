const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const hostname = 'localhost';
const port = 8000;

const students = [
  { name: "Sonia" },
  { name: "Antoine" }
];

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url);
  const path = reqUrl.pathname;

  if (req.method === 'POST' && path === '/') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      const newStudent = { name: formData.name };
      students.push(newStudent);
      res.writeHead(302, { 'Location': '/' });
      res.end();
    });
  } else if (path === '/bootstrap') {
    fs.readFile('./assets/css/bootstrap.min.css', (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let html = '<h1>Liste des utilisateurs</h1>';
    html += '<ul>';
    for (const student of students) {
      html += `<li>${student.name}</li>`;
    }
    html += '</ul>';
    html += '<form action="/" method="POST">'
    html += '<div class="form-group">'
    html += '<input class="form-control" name="name" type="text" />'
    html += '<button type="submit" class="btn btn-primary">Ajouter</button>';
    html += '</div>'
    html += '</form>'
    res.end(html);
  }
});

server.listen(port, hostname, () => {
  console.log(`Serveur lancé sur http://${hostname}:${port}`);
});
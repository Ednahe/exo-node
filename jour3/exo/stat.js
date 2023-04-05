const fs = require('fs');
const http = require('http');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'Data', 'Data', 'all.json'));
const students = JSON.parse(data).students;

const getUserInfo = (name) => {
    const user = students.find(student => student.name.toLowerCase() === name.toLowerCase());
    if (!user) return null;
    return {
      name: user.name,
      notes: user.notes,
      address: user.address,
      mention: user.mention
    };
  }

const api = {
    all: () => {
      return {
        students: students
      };
    },
    search: (name) => {
      const user = getUserInfo(name);
      if (!user) return { error: 'User not found' };
      return user;
    }
  };

http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`);
  const endpoint = url.pathname.split('/')[1];

  let data;
  switch (endpoint) {
    case '':
      data = 'Welcome to the API';
      break;
    case 'search':
      const name = url.pathname.split('/')[2];
      data = api.search(name);
      break;
    case 'all':
      data = api.all();
      break;
    default:
      res.writeHead(404);
      res.end('404 Not Found');
      return;
  }


  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}).listen(8000);

console.log('serveur lancé');
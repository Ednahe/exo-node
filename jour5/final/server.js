const express = require('express');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { students, addStudent, deleteStudent, formatBirthday } = require('./utils');

const app = express();

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

dotenv.config();
const port = process.env.APP_PORT;

// Page principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/home.html');
});

// Ajouter un utilisateur
app.post('/add', (req, res) => {
    const { name, birth } = req.body;
    addStudent(name, birth);
    res.redirect('/users');
});

// affichage des utilisateurs
app.get('/users', (req, res) => {
  const userHTML = students.map((student) => {
    return `
      <section class='user-section'>
        <p>${student.name} - ${formatBirthday(student.birth)}</p>
        <form action="/users/${student.name}" method="POST">
            <button type="submit">Supprimer le premier étudiant (celui en haut de page)</button>
        </form>
        <form action="/users/${student.name}?_method=DELETE" method="POST">
            <input type="hidden" name="_method" value="DELETE">
            <button type="submit">Supprimer cet étudiant</button>
        </form>
      </section>
    `;
}).join('');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Nos étudiants</title>
        <link rel="stylesheet" href="./assets/css/style.css">
      </head>
      <body>
        <div class="contain-users">
          <h1>Les étudiants</h1>
          ${userHTML}
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

// Supprimer un utilisateur
app.post('/users/:name', (req, res) => {
    const name = req.params.name;
    deleteStudent(name);
    res.redirect('/users');
});

app.delete('/users/:name', (req, res) => {
    const name = req.params.name;
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
      students.splice(index, 1);
      res.send(`L'étudiant ${name} a été supprimé avec succès`);
    } else {
      res.status(404).send(`${name} not found`);
    }
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Le serveur est lancé au port ${port}`);
});
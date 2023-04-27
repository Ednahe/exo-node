const path = require("path");
const express = require("express");
const http = require("http");

/**
 * Configuration de l'application
 */
 
const PORT = 9000;

const app = express(); // Crée l'application Express
const server = http.Server(app); // Récupère l'objet Server de l’app Express
const io = require("socket.io")(server); // Crée une instance de socket.io sur ce serveur

app.set("view engine", "pug"); // Indique à Express que le moteur de templating à utiliser est "Pug"
app.set("views", "views"); // Indique à Express que les fichiers de vue .pug se trouvent dans /views/
app.set("view cache", process.env.NODE_ENV === "production"); // Permet d'éviter la mise en cache des views PUG en mode développement
app.locals.pretty = process.env.NODE_ENV !== "production"; // Permet côté client de mieux lire la source HTML générée (cette configuration ne sera appliquée que en mode développement)

app.use(express.static(path.join(__dirname, "app")));

app.get("/app.js", function(req, res) {
  res.type("application/javascript");
  res.sendFile(path.join(__dirname, "app/app.js"));
});

// io.on("message:new", (data) => {
//   console.log(`Nouveau message de ${data.nickname}: ${data.message}`);
// });

// io.on("message:added", (messages) => {
//   messages.innerHTML = "";

//   messages.forEach((message) => {
//     const messageElement = document.createElement("li");
//     messageElement.textContent = `${message.user}: ${message.message}`;
//     messages.appendChild(messageElement);
//   });
// });

/**
 * Middleware de l'application
 */

//app.use(express.static(path.join(__dirname, "public"))); // Sert les ressources statiques dans /public/

/**
 * Routes de l'application
 */

require("./Router.js")(app);
require("./webSocket.js")(app, io);

/**
 * Initialisation de l'application
 */

server.listen(PORT, () => {
  console.log(`Server lancé sur http://localhost:${PORT}`);
});

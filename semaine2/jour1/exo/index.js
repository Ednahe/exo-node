const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 9000;

const server = http.createServer(app);
const io = socketIo(server);

// let messages = [];
// if (fs.existsSync("./messages.json")) {
//   messages = JSON.parse(fs.readFileSync("./messages.json"));
// }

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/chat", (req, res) => {
//   const message = req.body.message;
//   io.emit("message", message);
//   res.status(200).send(message);
// });

// io.on("connection", (socket) => {
//   console.log("Client connecté");

//     // messages.forEach((message) => {
//     //   socket.emit("message", message);
//     // });

//   socket.on("message", (message) => {
//     io.emit("message", message);
//     messages.push(message);
//     fs.writeFileSync("./messages.json", JSON.stringify(messages));
//   });

//   socket.on("disconnect", () => {
//     console.log("Client déconnecté");
//   });
// });
let messages = [];

io.on("connection", (socket) => {
  console.log("Client connecté");

  socket.emit("message-history", messages);

  socket.on("message", (message) => {
    io.emit("message", message);
    messages.push(message);
    fs.writeFileSync("./messages.json", JSON.stringify(messages));
  });

  socket.on("disconnect", () => {
    console.log("Client déconnecté");
  });
});

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.post("/", (req, res) => {
  const message = req.body.message;
  io.emit("message", message);
  messages.push(message);
  fs.writeFileSync("./messages.json", JSON.stringify(messages));
  res.redirect("/");
});
// io.connect('http://localhost:9000');

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

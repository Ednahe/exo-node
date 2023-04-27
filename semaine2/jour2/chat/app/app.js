console.log('coucou');
// Instanciation d'un nouvel objet Client
// const client = require('./Users')
// import Users form './Users';
const user = new Users();

user.init();

const messages = document.getElementById("messages");
const input = document.getElementById("message");
const form = document.getElementById("chat")

const socket = io(); 

const messagesContainer = []

socket.on("message:new", (data) => {
  console.log('test');
  console.log(`Nouveau message de ${data.user}: ${data.message}`);

  const newMessage = { user: data.user, message: data.message };
  messagesContainer.push(newMessage);

  const messageList = document.createElement("li");
  messageList.textContent = `${newMessage.user}: ${newMessage.message}`;

  messages.appendChild(messageList);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = input.value.trim();
  if (message !== "") {
    socket.emit("message:new", { username: "user", message: message });
    input.value = "";
  }
});

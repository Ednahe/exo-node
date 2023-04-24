// const io = require("socket.io-client");
import io from 'socket.io-client';
 const socket = io();


const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (message) {
    socket.emit("message", message);
    chatInput.value = "";
  }
});

const addMessage = (message) => {
  const messages = document.querySelector(".chat");
  messages.innerHTML += `<li>${message}</li>`;
};

const appendMessage = (message) => {
  addMessage(message);
};

socket.on("message", (message) => {
  appendMessage(message);
});

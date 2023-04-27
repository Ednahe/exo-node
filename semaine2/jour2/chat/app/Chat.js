class Chat {
  constructor(io) {
    this.io = io;
    this.users = [];
    this.messages = [];
  }

  onConnection(socket) {
    socket.on("message:new", (message) => {
      const user = this._getUser(socket.id);
      const mess= {
        user: user.nickname,
        message: message.message
      };

      this._addMessage(socket, message);
      this.io.emit("message:added", this.messages.slice(-10));
    });
  }

  _addMessage(socket, message) {
    const user = this._getUser(socket);
    this.messages.push({ user: user.nickname, message });
  }

  _getUser(socket) {
    return this.users.find((user) => user.id === socket.id);
  }
}

module.exports = Chat;

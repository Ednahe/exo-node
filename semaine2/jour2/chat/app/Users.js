const ent = require('ent')

class User {
    constructor(socket, nickname) {
        this.id = socket.id
        this.nickname = ent.encode(nickname)
        this.socket = socket
    }

    destroy(){
        this.id = null
        this.nickname = null
        this.socket.disconnect()
    }
}

module.exports = User
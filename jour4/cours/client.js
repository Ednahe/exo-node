const http = require('http')
const hostname = 'localhost'
const port = 8000

// envoi d'une requête vers le serveur
http.get(`http://${hostname}:${port}`, res => {
    let data = ''

    res.on('data', chunk => {
        data += chunk
    })

    res.on('end', () => console.log(data));
})
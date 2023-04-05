const http = require('http')
const utils = require('./src/utils')
const hostname = "localhost"
const port = "8000"

const server = http.createServer((req, res) => {
    const url = req.url.replace('/', '')

    if (url === 'favicon.ico') {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        })
        res.end('Hello world !')
        return
    }

    if (url === 'test') {
        res.end(`<!DOCTYPE html>
            <html>
                <head>
                    <meta chartset="utf-8">
                    <title>Page test</title>
                </head>
                <body>
                    <p>bienvenue sur la page de test</p>
                </body>
            </html>`
        )
    }

    if (url === 'users') {
        const users = utils.usersArray(utils.users)
        res.writeHead(200, {
            "Content-Type": "text/html",
        })
        const userList = users.map(user => `<li>${user}</li>`).join('')
        const html = `<html>
                        <body>
                            <ul>${userList}</ul>
                        </body>
                      </html>`
        res.write(html)
        res.end()
        return
    }

    res.writeHead(404, {
        "Content-Type": "text/html",
    })
    res.write('<html><body><h1>Page not found</h1></body></html>')
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})
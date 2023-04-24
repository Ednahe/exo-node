const express = require('express')

const app =  express();

// app.use((req, res) => {
//     res.json({ message : 'Une bien belle requête !'})
// }) 

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Orgin', '*')
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, ')
})

app.use((req, res, next) => {
    console.log('test');
    next()
})

app.use((req, res, next) => {
    res.json({ message : 'Une bien belle requête !'})
    next()
})

app.use((req, res, next) => {
    res.status(201)
})

app.use('.data/movies', (req, res, next) => {
    const movie = [
        {
            id: '1',
            title: 'Alien',
            real: 'Ridley Scott'
        }
    ]
})

app.post('data/form', (req, res, next) => {
    console.log(req.body);
    res.status(201)
})

module.exports = app
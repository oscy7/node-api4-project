const express = require('express')

const server = express()

require('dotenv').config()

const port = process.env.PORT || 7500

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})


server.get('/hello', (req, res) => {
    res.send('Hi this is working')
})

server.get('/', (req,res) => {
    res.send(`<h1> Web 49 is cool </h1>`)
})
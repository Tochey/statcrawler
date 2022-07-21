const express = require('express')
const app = express()

const SERVER_PORT = 8080

app.get('/', (req, res) => {
    res.send('Hi')
    res.end()
})

app.listen(SERVER_PORT, () =>{
    console.log(`server si listening on port ${SERVER_PORT}`)
})
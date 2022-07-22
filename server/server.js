const express = require('express')
const NetworkDaemon = require('./NetworkDaemon')
const spformat = require('./formatters/spFormatter')
const officeformat = require('./formatters/officeFormatter')
const app = express()

const SERVER_PORT = 8080
let nw = new NetworkDaemon(200)
app.get('/', (req, res) => {
        res.end()
    })

app.listen(SERVER_PORT, () =>{
    console.log(`server is listening on port ${SERVER_PORT}`)
})








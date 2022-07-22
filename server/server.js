const express = require("express");
const NetworkDaemon = require("./NetworkDaemon");
const cheerio = require("cheerio");
const { default: axios } = require("axios");
const app = express();
const scrapeSlack = require("./scrapers/Slack");

const SERVER_PORT = 8080;
let nw = new NetworkDaemon(200);
app.get("/", (req, res) => {
    res.end();
});

app.listen(SERVER_PORT, () => {
    console.log(`server is listening on port ${SERVER_PORT}`);
});

scrapeSlack().then((e) => {
    console.log(e);
});

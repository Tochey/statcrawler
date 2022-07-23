const express = require("express");
const format = require("./formatters/OfficeFormatter")
const NetworkDaemon = require("./NetworkDaemon");
const fetchData = require("./services/statuspage/fetchSp");
const app = express();
const spFormat = require('./formatters/SpFormatter')
const fetchOffice = require('./services/Office') 
const scrapeSlack = require('./scrapers/Slack')

const SERVER_PORT = 8080;
let nw = new NetworkDaemon(10);
app.get("/", (req, res) => {
    res.end();
});

app.listen(SERVER_PORT, () => {
    console.log(`server is listening on port ${SERVER_PORT}`);
});

// nw.pollData()
// fetchData('https://status.notion.so/', ((e, f) => {
//       console.log(e)
//         f.map((e) => {
//             console.log(spFormat(e))
//         })
// }))

// fetchOffice((e) => {
//     console.log(format(e))
// })

// scrapeSlack().then((e) => {
//     console.log(e)
// })




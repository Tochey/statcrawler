const express = require("express");
const app = express();
const serviceRouter = require('./routes/services')
const cors = require('cors')
const PORT = 8080

app.use(cors({
  origin: '*'
}))
app.use('/services', serviceRouter)


app.get("/", async (req, res) => {
    res.end()
});

app.listen(PORT, () => {
console.log(`server is listening on port ${PORT}`);
});


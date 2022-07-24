const express = require("express");
const app = express();
const serviceRouter = require('./routes/services')

app.use('/services', serviceRouter)


app.get("/", async (req, res) => {
    res.end()
});


app.listen(8080, () => {
  console.log(`server is listening on port ${8080}`);
});




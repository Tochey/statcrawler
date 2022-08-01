const express = require("express");
const app = express();
const serviceRouter = require('./routes/services')
const cors = require('cors')
const dbConnection = require('./config/db.config')
const userRoute = require('./routes/users')
const authRoute = require('./routes/users.login')
//const mongoose = require('mongoose')
require('dotenv').config()

const PORT = 8081


app.use(cors({
  origin: '*'
}))


//db connection
dbConnection()
// mongoose.connect('mongodb://localhost:27017/statcrawler', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, 
// (err) => {
//   err ? console.log(err) : console.log("connected to the database")
// });

app.use(express.json())
app.use('/api/v1/user', userRoute)
app.use('/api/v1/user', authRoute)

app.use('/services', serviceRouter)



app.get("/", async (req, res) => {
    res.end()
});

app.listen(PORT, () => {
console.log(`server is listening on port ${PORT}`);
});
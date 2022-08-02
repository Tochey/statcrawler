const express = require("express");
const app = express();
const serviceRouter = require('./routes/services')
const cors = require('cors')
const dbConnection = require('./config/db.config')
const userRoute = require('./routes/users.signup')
const authRoute = require('./routes/users.login')
require('dotenv').config()

//port address
const PORT = 8081

app.use(cors({
  origin: '*'
}))

//db connection
dbConnection()


app.use(express.json())
app.use('/api/v1/users', userRoute)
app.use('/api/v1/users', authRoute)

app.use('/services', serviceRouter)



app.get("/", async (req, res) => {
  res.end()
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
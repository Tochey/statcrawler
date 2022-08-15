const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
const serviceRouter = require('./routes/services')
const cors = require('cors')
const dbConnection = require('./config/db.config')
const registerRoute = require('./routes/users.signup')
const loginRoute = require('./routes/users.login')
const auth = require('./middleware/auth');
const client = require("./config/redis.config");
const { generateAccessToken } = require("./utilities/tokenGeneration");
require('dotenv').config();

//port address
const PORT = 8081

app.use(cors({
  origin: '*'
}))

//db connection
dbConnection()

app.use(express.json())

app.use('/api/v1/user', registerRoute)
app.use('/api/v1/user', loginRoute)
app.use('/api/v1/services', serviceRouter)

app.delete('/logout', async (req, res) => {
await client.del(req.body.email)  
res.sendStatus(204)
})


app.post('/token', async (req, res) => {
  const { email, token } = req.body

  if (!token) return res.status(401).json("You need a refresh token")
  if (!email) return res.status(401).json("Please Provide an identity")

  const redisRefreshToken = await client.get(email)

  if (redisRefreshToken !== token) return res.status(403).json('Invalid refresh Token')
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const newAccessToken = generateAccessToken(user.id, user.email)
    return res.header('Authorization', newAccessToken).send({accessToken : newAccessToken})
  })
}
)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
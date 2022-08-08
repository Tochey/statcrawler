//mongo config
const mongoose = require('mongoose')

module.exports = () => {
    const databaseParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try{
        mongoose.connect(process.env.db, databaseParams)
        console.log("connected to the mongodb database")
    } catch(error){
        console.log(`${error} could not connect`)
    }
}
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
 
mongoose.connect(process.env.DB_CONN).then(() => {

    console.log("database is now connected")

}).catch(() => {

    console.log("database is not connected")

})





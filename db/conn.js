const mongoose = require('mongoose')
 
 mongoose.connect("mongodb+srv://atul:atul@revisenoderak.zo7jp.mongodb.net/craftdata?retryWrites=true&w=majority").then(() => {

    console.log("database is now connected")

}).catch(() => {

    console.log("database is not connected")

})





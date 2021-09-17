const express = require("express")
const request = require("request");
require('../db/conn')
const port = process.env.port || 3000


const craftApi = require('../router/apiroutes')
const app = express()

const Craft = require('../db/model/model')

app.use(express.json())

app.use('/api',craftApi)

// app.use((req,res,next) => {

//    res.status(404).json({
//       error:"bad request"
//    })

// })

app.get('/',async(req,res)=> {
 
   
      
      const result = await Craft.find()
      console.log(result)

      res.send(result)
  

})


app.listen(port,() => {

   console.log('your rest api server started')

})

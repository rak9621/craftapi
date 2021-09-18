const express = require("express")
const request = require("request")
const cors = require('cors')
require('../db/conn')
const port = process.env.PORT || 3000


const craftApi = require('../router/apiroutes')
const app = express()

const Craft = require('../db/model/model')

app.use(express.json())
app.use(cors())

app.use('/api',craftApi)

// app.use((req,res,next) => {

//    res.status(404).json({
//       error:"bad request"
//    })

// })

app.get('/',async(req,res)=> {
 
   
      
      const result = await Craft.find()


      res.send(result)
  

})


app.listen(port,() => {

   console.log('your rest api server started')

})


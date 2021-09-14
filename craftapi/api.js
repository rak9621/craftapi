const express = require("express")
const request = require("request");
require('./db/conn')
const port = process.env.port || 3005
const Craft = require('./db/model/model')


  

const app = express()
app.use(express.json())


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/craft',async (req,res) => {

  try {
    
    const result = await Craft.find()

        res.status(401).send(result)

  } catch (e) {
    
        res.status(201).send(e)
  }
})


app.post('/craft',async (req,res)=> {

try {

  const data = req.body
  const craftdata = new Craft(data) 
  const result  = await craftdata.save()

  res.status(401).send(result)

    
} catch (e) {

  res.status(201).send(e)

}
})



app.delete('/craft',async (req,res)=> {

  try {
  
    const result  = await Craft.deleteMany()
  
    res.status(401).send(result)
  
      
  } catch (e) {

    res.status(201).send(e)

  }
  })


  app.delete('/craft/:id',async (req,res)=> {

    try {
    
      const _id = req.params.id
       
      const result  = await Craft.findByIdAndDelete({_id})
    
      res.status(401).send(result)
    
        
    } catch (e) {

      res.status(201).send(e)
      
    }


    })

   app.patch('/craft/:id',async (req,res)=> {

      try {
      
        const _id = req.params.id
         
        const result  = await Craft.findByIdAndUpdate({_id},req.body,{ new :true})
      
        res.status(401).send(result)
      
          
      } catch (e) {

        res.status(201).send(e)

      }

      })



app.listen(port,() => {

   console.log('your rest api server started')

})


const express = require('express')
const router = express.Router()
const Craft = require('../db/model/model')


router.get('/craft',async (req,res) => {

    try {
      
      const result = await Craft.find()
  
          res.status(401).send(result)
  
    } catch (e) {
      
          res.status(201).send(e)
    }
  })
  
  
  router.post('/craft',async (req,res)=> {
  
  try {
  
    const data = req.body
    const craftdata = new Craft(data) 
    const result  = await craftdata.save()
  
    res.status(401).send(result)
  
      
  } catch (e) {
  
    res.status(201).send(e)
  
  }
  })
  
  
  
  router.delete('/craft',async (req,res)=> {
  
    try {
    
      const result  = await Craft.deleteMany()
    
      res.status(401).send(result)
    
        
    } catch (e) {
  
      res.status(201).send(e)
  
    }
    })
  
  
    router.delete('/craft/:id',async (req,res)=> {
  
      try {
      
        const _id = req.params.id
         
        const result  = await Craft.findByIdAndDelete({_id})
      
        res.status(401).send(result)
      
          
      } catch (e) {
  
        res.status(201).send(e)
        
      }
  
  
      })
  
    router.patch('/craft/:id',async (req,res)=> {
  
        try {
        
          const _id = req.params.id
           
          const result  = await Craft.findByIdAndUpdate({_id},req.body,{ new :true})
        
          res.status(401).send(result)
        
            
        } catch (e) {
  
          res.status(201).send(e)
  
        }
  
        })
  

    
    module.exports = router
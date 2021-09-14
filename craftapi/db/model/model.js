   const mongoose = require('mongoose')


   const creaftScheama = mongoose.Schema({
      
    name :{ type:String },
    size:{ type:Number},
    price:{ type:Number},
    discription:{ type:String},
    img:{type:String},
    color:{type:String},
    material:{type:String}
    
   })

   const Craft = new mongoose.model("Craft",creaftScheama )

   module.exports = Craft
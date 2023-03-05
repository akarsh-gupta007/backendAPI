const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ranking:{
        type:Number,
        required:true,
     
    }
})
const projectmodel=mongoose.model('Alien',projectSchema)

module.exports=projectmodel
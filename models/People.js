const mongoose= require('mongoose')
const peopleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true

    },
    avatar:String,
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{
    timestamps:true
})

const People=mongoose.model('People', peopleSchema)
module.exports = People
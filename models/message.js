const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        minlength:[3, "name must not be less than 3 characters"],
        required: [true, 'please provide an name'],
        maxlength: [50, "name must not be greater than 20 characters"]
    }, 
    email:{
        type: String,
        unique:true,
        trim:true,
        required: [true, 'please provide an name'],
        maxlength: [50, "name must not be greater than 20 characters"]
    }, 
    message:{
        type: String,
        trim:true,
        required: [true, 'please provide an name'],
        maxlength: [50, "name must not be greater than 20 characters"]
    }, 
    })


module.exports = mongoose.model('Message', messageSchema)










/*

*/
const mongoose = require('mongoose');

    

const postSchema = new mongoose.Schema({

    gender:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true
    },
    nic:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },



});
module.exports = mongoose.model('Booking',postSchema);
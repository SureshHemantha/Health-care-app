const mongoose = require('mongoose');

    

const postSchema = new mongoose.Schema({

    surgeryName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
});
module.exports = mongoose.model('SurgeryDetails',postSchema);
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    type:{type:String,required:true},
    
})

const dataModel = mongoose.models.data || mongoose.model('data',dataSchema);

module.exports = dataModel;
const dataModel = require('../models/dataModel');


const addData = async(req,res)=>{
    try {
       const {title, content, type} = req.body
       const data = new dataModel({
           title,
           content,
           type
       }) 
       await data.save();
       return res.status(200).json({message:'data added successfully',data});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'something went wrong'})
    }
}


const getData = async(req,res)=>{
    try {
        const data = await dataModel.find({});
        return res.status(200).json({data:data});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'something went wrong'})
    }
}

module.exports = {addData,getData}
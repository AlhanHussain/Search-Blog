const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}/dummyData`)
    console.log('Connected to MongoDB')
}

module.exports = connectDB;
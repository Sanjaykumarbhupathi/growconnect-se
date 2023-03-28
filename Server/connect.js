const mongoose = require('mongoose');

const uri = 'mongodb+srv://growconnect:growconnect@growconnect.dk0zs84.mongodb.net/GrowConnect?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB Connected: ${conn}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
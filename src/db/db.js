const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb+srv://MERN_backend:S3Go0DKcXsbJyVMN@cluster0.5fx4lpp.mongodb.net/project-1")
    
}

console.log("Connected to db")

module.exports = connectDB
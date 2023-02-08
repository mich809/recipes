const mongoose = require('mongoose')
require('dotenv').config()

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('Connected to MongoDB')
    }catch(err){
        console.log(err)

    }
}


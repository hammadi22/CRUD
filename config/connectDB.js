const mongoose = require('mongoose')
require('dotenv').config({path:'./config/.env'})


const connectDB = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false })
        console.log('Data Base Successufly Connected')
    } catch (error) {
        console.log('Data Base is not Connected')
    }
}

module.exports=connectDB

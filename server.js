const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const ContactRouter = require('./routes/contact')
app.use(express.json())
connectDB()
app.use("/api/contacts",ContactRouter)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
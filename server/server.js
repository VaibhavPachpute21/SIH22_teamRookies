
require('dotenv').config({path: "./config.env"})
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db')

connectDB();

mongoose.promise = global.Promise
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(express.urlencoded({
extended:true
}));


app.use(cookieParser())
app.use(cors())




const port = process.env.PORT || 3001;

const server = app.listen(port,()=>{
    console.log(`Server running on port ${port}`)   
})

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Logged error ${err}`)
    server.close(()=>process.exit(1));
})





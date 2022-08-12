
require('dotenv').config({path: "./config.env"})
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
connectDB();
mongoose.promise = global.Promise


const app = express()
const cors = require('cors')
const cron = require('node-schedule')


const {IncDayCount} = require('./cron-jobs/DayCountInc')
const {ResetAndForward} = require("./cron-jobs/DayCountInc")


app.use(express.json())
app.use(express.urlencoded({
extended:true
}));


app.use(cookieParser())
app.use(cors())



app.use("/api/user",require("./routes/user_routes"))
app.use("/api/grievance",require("./routes/grievance_routes"))

app.use("/api/officer",require("./routes/officer_routes"))

app.use("/api/forwards",require("./routes/forward_route"))



// Cron jobs

 cron.scheduleJob("*/2 * * * * *",()=>{
   /*  IncDayCount(),
    ResetAndForward()   */  
})
 




const port = process.env.PORT || 3001;

const server = app.listen(port,()=>{
    console.log(`Server running on port ${port}`)   
})

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Logged error ${err}`)
    server.close(()=>process.exit(1));
})





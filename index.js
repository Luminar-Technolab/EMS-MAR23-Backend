require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB-Connection/connection')
const router = require('./Routes/router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/uploads',express.static("./uploads"))

const PORT = 4000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`EMS Server started at port ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("<h1>EMS Server Started!!!</h1>")
})
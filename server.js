const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const authRoute = require('./routes/authRoute')
const cors = require('cors')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const path = require('path')

//configure env
dotenv.config()

//database config
connectDB()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product', productRoute)

//serving the frontend
app.use(express.static(path.join(__dirname, './client/build')))

//rest api
app.get('*', function (req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//PORT
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT, ()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})
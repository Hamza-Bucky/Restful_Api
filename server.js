const express = require('express')
const productRoute = require('./routes/productRoute')
const employeeRoute = require('./routes/employeeRoute')
const connectMongoDB = require('./connection')
const app = express()
const URL = "mongodb+srv://hamzaakhtarlgs:Bucky123@cluster0.qftc32q.mongodb.net/?retryWrites=true&w=majority"
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/products',productRoute)
app.use('/employees',employeeRoute)
connectMongoDB(app,PORT,URL)




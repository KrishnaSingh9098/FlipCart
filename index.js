const express = require('express')
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Amazon').then(()=>{
    console.log('db...');
}).catch((err)=>{
    console.log(err)
})
const app = express()
app.use(express.urlencoded({ extended: true }));

let userRoutes = require ('./routes/user')
let loginRoutes = require('./routes/login')
let productRoutes = require('./routes/productRoutes')


app.get('/',(req,res)=>{
    res.send("hyy")
})

app.use('/api',userRoutes)
app.use('/api',loginRoutes)
app.use('/api',productRoutes)

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING IN PORT NO :3000 ")
})
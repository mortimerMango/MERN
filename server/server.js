require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsRoutes = require('./routes/workouts')

const app = express()

//middleware
app.use(express.json()) //pass json to request 

app.use((req, res, next) =>{    //log type of request in console for testing
   console.log(req.path, ' ==> ', req.method)
   next() 
})

//routes
app.use('/api/workouts', workoutsRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    //listen for request
    app.listen(process.env.PORT, () =>{
        console.log('Connected to DB \nListening on port: ', process.env.PORT)
    })
})
.catch((error) =>{
    console.log(error)
})




const express = require ('express')
const cors = require('cors')
const logger = require('morgan')   // for seeing APIs calls in terminal
const PORT = 8524
const app = new express()

require('./middlewares/MongoDB')  //  to call MongoDB.js file


app.use(cors()) // to connect frontend and backend without any disturbance
app.use(express.json()) // to receive data from frontend
app.use(express.urlencoded({extended:true}))   // to recive files like images
app.use(logger('dev'))

//APIs
const api = require('./routes/api') // to call api.js file
app.use('/api',api)   //redirect any call having /api into api file.




//Server code
app.listen(PORT,()=>{
    console.log(`......Server is running at ${PORT}......`)
})
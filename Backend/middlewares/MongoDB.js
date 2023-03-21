const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
console.log('My MongoDB is connected successfully!!!')
})
.catch(error=>{
    console.log('connection error'+ error)
});
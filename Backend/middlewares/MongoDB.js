const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://azadvenu812:MongoAtlasDb812@cluster0.2cabyqj.mongodb.net/Studententry?retryWrites=true&w=majority')
.then(()=>{
console.log('My MongoDB is connected successfully!!!')
})
.catch(error=>{
    console.log('connection error'+ error)
});
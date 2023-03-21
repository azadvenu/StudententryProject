const mongoose=require('mongoose') 
const Schema = mongoose.Schema

const StudentSchema =  new Schema ({
    name : {
        type:String,
        required: true
    }, age : {
        type : Number,
        required : true
    }
})

let StudentDATA = mongoose.model('studentdetail', StudentSchema)  // here studentdetail is created inside DB 

module.exports=StudentDATA
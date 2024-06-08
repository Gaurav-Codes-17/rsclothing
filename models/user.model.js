const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
fullname : String,
email : String,
gender : {
    type : String,
    Enumerator : ["male" ,  "female" , "others"]
},
password : {
    type: String,
    required : true
},
isAdmin : false,
address : String,
phoneNumber : Number,
order : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "order"
}]


} , {timestamps : true})

module.exports = mongoose.model("user" , userSchema)
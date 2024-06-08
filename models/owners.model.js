const mongoose = require("mongoose");

const ownersSchema = mongoose.Schema(
  {
    fullname: String,
    isAdmin : true,
    phoneNumber : Number,
    order : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "order"
    }]
},
  { timestamps: true }
);

module.exports = mongoose.model("owner", ownersSchema);

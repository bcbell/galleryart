const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
    name: String, 
    price: String,

},{
    timestamps: true,
}
)

module.exports=mongoose.model("Art", artSchema)
// Model of the NOTE

const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique:true
    },
    userid:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
    },
    dateAdded:{
        type: Date,
        default: Date.now()
    }
});
// Model requires 22 things - name of the model & Schema of the model
// This model can be imported anywhere.
module.exports= mongoose.model("Note", noteSchema);
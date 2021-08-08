const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({  
    name :{
        type:String,
        required  : true
    },
    doneOrPending : {
        type : Boolean,
        default : false
    }
})

const TodoModel = mongoose.model("todolist",TodoSchema);
module.exports = TodoModel;
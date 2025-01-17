const mongoose = require("mongoose");

const taskScheme = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        status : {
            type : String,
            enum : ["Pending", "In Progress", "Completed"],
            default : "Pending"
        },
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model("Task", taskScheme);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity: {type:String, required:true},
    dueDate: {type:String, required:true}
})

const activities =mongoose.model("activities",activitySchema);
const databasemodel = {
    activities
} 
module.exports =databasemodel
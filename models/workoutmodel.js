const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    }
    // image:{
    //     type:String,
    // },
    // category:{
    //     type:String,
    // },
    // description:{
    //     type:String,
    // },
    // UnitName:{
    //     type:String,
    // },
    // UnitPrice:{
    //     type:String,
    // }



})

module.exports = mongoose.model('Workout' , workoutSchema);
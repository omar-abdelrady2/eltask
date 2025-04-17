import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name : String,
    age : Number ,
    level : String,
    address : String
});

export const studentModel =mongoose.model("Student" , studentSchema);
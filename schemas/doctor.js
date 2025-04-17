import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name : String,
    age : Number , 
    phone : String
});
export const doctorModel =mongoose.model("Doctor" , doctorSchema);
import express from 'express';
import mongoose from 'mongoose';
import {studentModel} from './schemas/student.js'
import { doctorModel } from './schemas/doctor.js';
import studentRoutes from './routes/students.js';
import doctorRoutes from './routes/doctors.js';
const app = express();
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// connecting to mongodb
try {
        mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('connected to the db');
} catch (error) {
    console.error(error);
};

// hard coded student add
let hardCodedStudent =  new studentModel({
    name: 'omar',
    age : 19,
    level : 'second',
    address : 'Egypt'
});
hardCodedStudent.save();

// student routes
app.use('/student', studentRoutes);
// doctor routes
app.use('/doctor', doctorRoutes);


// fetching all students and doctors
app.get('/all', async (req, res) => {
    try {
        const students = await studentModel.find();
        const doctors = await doctorModel.find();
        res.status(200).json({students, doctors});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


// server starting
app.listen(8000 , () => {
    console.log('the server had started successfully !');
})


// all the links for the tests
//http://localhost:8000/student (Methods : POST, GET)
//http://localhost:8000/student/:name (Methods : DELETE)
//http://localhost:8000/doctor (Methods : POST, PUT)
//http://localhost:8000/all (Methods : GET)
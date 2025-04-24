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

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log(' Connected to Local DB');
    app.listen(8000, () => {
    console.log(' Server running on port 8000');
    });
})
.catch((err) => {
    console.error(' Connection Error:', err);
});

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
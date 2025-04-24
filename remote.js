import express from 'express';
import mongoose from 'mongoose';
import {studentModel} from './schemas/student.js'
import { doctorModel } from './schemas/doctor.js';
import studentRoutes from './routes/students.js';
import doctorRoutes from './routes/doctors.js';

const remoteApp = express();
remoteApp.use(express.json());


// Y0Rn033zQ13kTIiQ
//mongodb+srv://testuser:Y0Rn033zQ13kTIiQ@abdu1.2cskxva.mongodb.net/?retryWrites=true&w=majority&appName=Abdu1
// remote sever connection
// mongodb+srv://testuser:Y0Rn033zQ13kTIiQ@abdu1.2cskxva.mongodb.net/test?retryWrites=true&w=majority&appName=Abdu1
mongoose.connect('...connection string...')
.then(() => {
    console.log(' Connected to Atlas DB');
    remoteApp.listen(3000, () => {
    console.log(' Server running on port 3000');
    });
})
.catch((err) => {
    console.error(' Connection Error:', err);
});

// student routes
remoteApp.use('/student', studentRoutes);
// doctor routes
remoteApp.use('/doctor', doctorRoutes);


import express from 'express';
const router = express.Router();
import { studentModel } from '../schemas/student.js';
import {createFromBody , fetchAll , deleteByName} from '../controller/studentController.js';

// create new student from the body of the request
router.post('/', createFromBody);


// get all students
router.get('/', fetchAll);


// delete student by name
router.delete('/:name', deleteByName)


// exporting the router to be used in the server.js file
export default router;




// localost8000/student?name=omar&age=19

//{name : 'omar' , age : 19}
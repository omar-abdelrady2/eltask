import express from 'express';
const router = express.Router();
// import { deleteModel } from '../schemas/doctor.js';
import { createFromQuery, updateName } from '../controller/doctorController.js';

// create new doctor from the query parameters of the request
router.post('/', createFromQuery);


// update docotor's name by passing old name and new name as query parameters
router.put('/', updateName)


export default router;

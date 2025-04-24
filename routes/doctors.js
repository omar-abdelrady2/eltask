import express from 'express';
const router = express.Router();

import { createFromQuery, updateName } from '../controller/doctorController.js';

// create new doctor from the query parameters of the request
router.post('/', createFromQuery);


// update doctor name by passing old name and new name as query parameters
router.put('/', updateName)


export default router;

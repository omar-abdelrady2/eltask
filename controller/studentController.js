import { studentModel } from '../schemas/student.js';



export const createFromBody = (req , res , next) => {
    const student = new studentModel({
        name: req.body.name,
        age: parseInt(req.body.age),
        level: req.body.level,
        address: req.body.address
    });
    student.save()
        .then(() => {
            res.status(201).json({ message: 'Student created successfully!' });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

export const fetchAll = (req, res, next) => {
    studentModel.find()
        .then((students) => {
            res.status(200).json(students);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

export const deleteByName = async (req, res, next) => {
    const studentName = req.params.name;

    try {
        const result = await studentModel.deleteOne({ name: studentName });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        next(err); 
    }
}
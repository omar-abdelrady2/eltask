import { doctorModel } from "../schemas/doctor.js";

export const createFromQuery = (req, res, next) => {
    const doctor = new doctorModel({
        name: req.query.name,
        age: parseInt(req.query.age),
        phone: req.query.phone
    });
    doctor.save()
        .then(() => {
            res.status(201).json({ message: 'Doctor created successfully!' });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

export const updateName = (req, res, next) => {
    const oldName = req.query.oldName;
    const newName = req.query.newName;
    doctorModel.updateOne({ name: oldName }, { name: newName })
        .then(() => {
            res.status(200).json({ message: 'Doctor updated successfully!' });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};
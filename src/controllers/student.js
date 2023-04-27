const { body, validationResult } = require('express-validator');

const getAllStudent = async (req, res) => {
    res.status(200).json({
        message: 'Get students successfully',
        data: [
            {
                name: 'ABC',
                age: 18,
                email: 'ABC@gmail.com'
            },
            {
                name: 'DEF',
                age: 19,
                email: 'DEF@gmail.com'
            },
            {
                name: 'GHI',
                age: 20,
                email: 'GHI@gmail.com'
            }
        ]
    })
}

const getStudentById = async (req, res) => {
    res.send('Get student by id')
}   

const insertStudent = async (req, res) => {
    res.send('Insert student')
}

const updateStudent = async (req, res) => {
    res.send('Update student')
}

module.exports = {
    getAllStudent,
    getStudentById,
    insertStudent,
    updateStudent,
}
const express = require('express')
const { studentController } = require('../controllers/index')
const router = express.Router()

router.get('/', studentController.getAllStudent)

router.get('/:id', studentController.getStudentById)

router.patch('/', studentController.updateStudent)

router.post('/insert', studentController.insertStudent)

module.exports = router
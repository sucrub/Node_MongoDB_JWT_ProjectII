const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router()
const { userController } = require('../controllers/index') 
router.get('/', userController.getAllDetail)

router.post('/login', 
    body('email').isEmail(),
    body('password').isLength({min: 5}),
    userController.login)

router.post('/register', userController.register)

module.exports = router
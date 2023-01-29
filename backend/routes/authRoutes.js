const express = require('express')
const authRoutes = express.Router()
const { Register } = require('../controller/authController')

authRoutes.post('/register', Register)



module.exports =
    authRoutes
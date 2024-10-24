const { getLogin } = require('../controllers/loginController')

const loginRouter =require('express').Router()

loginRouter.get('/', getLogin)


module.exports =loginRouter
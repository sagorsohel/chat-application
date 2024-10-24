const { getUsers } = require('../controllers/userController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const userRouter =require('express').Router()

userRouter.get('/', decorateHtmlResponse("User"), getUsers)


module.exports =userRouter
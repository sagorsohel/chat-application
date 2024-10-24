const { getLogin } = require('../controllers/loginController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const loginRouter =require('express').Router()

loginRouter.get('/',decorateHtmlResponse("Login"), getLogin)


module.exports =loginRouter
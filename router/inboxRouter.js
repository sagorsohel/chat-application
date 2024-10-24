const { getInbox } = require('../controllers/inboxController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const inboxRouter =require('express').Router()

inboxRouter.get('/',decorateHtmlResponse('Inbox'), getInbox)


module.exports =inboxRouter
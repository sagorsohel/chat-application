const { getInbox } = require('../controllers/inboxController')

const inboxRouter =require('express').Router()

inboxRouter.get('/', getInbox)


module.exports =inboxRouter
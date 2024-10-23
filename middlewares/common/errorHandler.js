
const createError=require('http-errors')

function notFoundHandler(req, res, next) {
  next(createError(404,'Request not found!'))
}

function errorHandler(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message,
            stack: err.stack
        }
    })
}
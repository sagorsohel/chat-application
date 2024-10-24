const createError = require("http-errors");

function notFoundHandler(req, res, next) {
  next(createError(404, "Request not found!"));
}

function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV !== "production" ? err : { message: err.message };

  res.status(err.status || 500);
  if (res.locals.html) {
    res.render("error", {
      title: "Error page",
    });
  } else {
    res.json(res.locals.error);
  }
  // res.status(err.status || 500)
  // res.json({
  //     error: {
  //         message: err.message,
  //         stack: err.stack
  //     }
  // })
}

module.exports = {
  notFoundHandler,
  errorHandler,
};

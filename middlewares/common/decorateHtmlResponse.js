function decorateHtmlResponse(title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${title} - chat application`;
    next()
  };
}
module.exports = decorateHtmlResponse;

const { getUsers,postUser } = require("../controllers/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/userValidator");

const userRouter = require("express").Router();

userRouter.get("/", decorateHtmlResponse("User"), getUsers);
userRouter.post("/", avatarUpload, addUserValidators,addUserValidationHandler, postUser);

module.exports = userRouter;

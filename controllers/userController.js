const bcrypt = require("bcrypt");
const User = require("../models/People"); // Match this casing with the actual file name
const getUsers = (req, res, next) => {
  res.render("users", {
    title: "Users - chat Application",
  });
};



// register user 
const postUser = async (req, res, next) => {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      profilePic: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User created successfully",
      
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
    });
  }
};

module.exports = {
  getUsers,
  postUser,
};

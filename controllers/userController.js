const AppError = require('../utilities/appError');
const User = require('./../model/userModel');
const catchAsync = require('./../utilities/catchAsync');

//controller to get all users
exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
});

//controller to get a user
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet define',
  });
};

//controller to create a new user
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet define',
  });
};

//controller to update a  user
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet define',
  });
};

//controller to delete a user
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet define',
  });
};

//updating authentiated user data
exports.updateMe = async (req, res, next) => {
  //create error if user tries to update password
  if (req.body.password || req.body.confirmPassword) {
    return next(new AppError('you are not allowed', 403));
  }

  //update user document
};

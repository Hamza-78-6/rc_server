// functions that can be made:
// user_login_post, user_signup_post, user_points_get, user_recycledWaste_get, user_updatePassword_put, user_updateContact_put, user_updateName_put, user_updateAvatar_put, user_create_disposal_request_post
const mongoose = require("mongoose");
// user model
const User = require("../../models/user/user");
const Disposal_Request = require("../../models/diposal/disposalRequest");
// support functions
// function to check if user exists or not
const isUserExists = async (email) => {
  const usersList = await User.find({ email: email });
  if (usersList.length <= 0) {
    console.log("user with email: ", email, " does not exists");
    return false;
  } else {
    console.log("user already exists");
    return true;
  }
};
// function to add new user to database
let addUserToDb = async (userObj) => {
  try {
    const newUser = await User.create(userObj);
    return newUser;
  } catch (err) {
    console.log("unable to create new user: ", err);
  }
};
// function to add new disposal request to database
const addDisposalRequestToDb = async (disposalRequestObj) => {};
//   actual functions
// login function
const user_login_post = async (req, res) => {
  let tempUser = req.body;
  let isUserExist = await isUserExists(tempUser.email);
  if (!isUserExist) {
    console.log(
      "while login user request: ",
      tempUser.email,
      " user does not exists at all"
    );
    res.send({ message: "user does not exists", status: false });
  } else {
    const userobj = await User.find({
      email: tempUser.email,
      password: tempUser.password,
    });
    if (userobj.length <= 0) {
      res.send({ message: "incorrect password", status: false });
    } else {
      res.send({ message: "login success", status: true });
    }
  }
};
// signup function
const user_signup_post = async (req, res) => {
  let tempUser = req.body;
  let isUserExist = await isUserExists(tempUser.email);
  if (!isUserExist) {
    addUserToDb(tempUser);
    res.send({ message: true, user: tempUser });
  } else {
    res.send({ message: "user does exist already", status: false });
  }
};
// get user points
const user_points_get = async (req, res) => {
  const { email } = req.params;
  let userObj = await User.find({ email: email });
  userObj = userObj[0];
  console.log(userObj);
  res.send({ points: userObj.pointsAvailable });
};
// get user recycled waste
const user_recycledWaste_get = async (req, res) => {
  const { email } = req.params;
  let userObj = await User.find({ email: email });
  userObj = userObj[0];
  res.send({ wasteRecycledInKg: userObj.wasteRecycledInKg });
};
// update user password
const user_updatePassword_put = async (req, res) => {
  const temp = req.body;
  const userObj = await User.updateOne(
    { email: temp.email },
    { password: temp.password }
  )
    .then((r) => {
      if (!r.acknowledged) throw r;
      else
        res.send({ message: "password updated successfully", isUpdated: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error while updating password", isUpdated: false });
    });
  //   res.send({ user: userObj });
};
// update user contact
const user_updateContact_put = async (req, res) => {
  const temp = req.body;
  const userObj = await User.updateOne(
    { email: temp.email },
    { phoneNo: temp.phoneNo }
  )
    .then((r) => {
      if (!r.acknowledged) throw r;
      else
        res.send({ message: "contact updated successfully", isUpdated: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error while updating contact", isUpdated: false });
    });
};
// update user name
const user_updateName_put = async (req, res) => {
  const temp = req.body;
  const userObj = await User.updateOne(
    { email: temp.email },
    { name: temp.name }
  )
    .then((r) => {
      if (!r.acknowledged) throw r;
      else res.send({ message: "name updated successfully", isUpdated: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error while updating name", isUpdated: false });
    });
};
//function to update avatar
const user_updateAvatar_put = async (req, res) => {
  const temp = req.body;
  const userObj = await User.updateOne(
    { email: temp.email },
    { avatarLink: temp.avatarLink }
  )
    .then((r) => {
      if (!r.acknowledged) throw r;
      else
        res.send({ message: "avatar updated successfully", isUpdated: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error while updating avatar", isUpdated: false });
    });
};
// function to get user obj
const get_user_obj = async (req, res) => {
  const { email } = req.params;
  let userObj = await User.find({ email: email });
  userObj = userObj[0];
  res.send({ user: userObj });
};
// function to create disposal request
const user_create_disposal_request_post = async (req, res) => {
  const tempData = req.body;
  const tempObj = await Disposal_Request.create(tempData);
  res.send({ disposal_request: tempObj });
};
// function to find user by id
const find_user_by_id = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.params.id);
  const userObj = await User.findById(userId);
  res.send({ user: userObj });
};

module.exports = {
  user_login_post,
  user_signup_post,
  user_points_get,
  user_recycledWaste_get,
  user_updatePassword_put,
  user_updateContact_put,
  user_updateName_put,
  user_updateAvatar_put,
  user_create_disposal_request_post,
  find_user_by_id,
};

// functions that can be made
// pickup_team_login_post, pickup_team_member_is_active_put, pickup_team_is_active_get, pickup_team_add_member_post, pickup_team_remove_member_delete
// model import
// const pickupTeam = require("../../models/pickupTeam/pickupTeam");
const Pickup_Team = require("../../models/pickupTeam/pickupTeam");
const mongoose = require("mongoose");

// helper functions

// functions to check if user exists or not
const isUserExists = async (email) => {
  const team_member = await Pickup_Team.find({ "team_members.email": email });
  if (team_member.length <= 0) {
    console.log("user with email: ", email, " does not exists");
    return false;
  } else {
    console.log("user already exists");
    return true;
  }
};
// main functions
// function to add team member to a team
const pickup_team_add_member_post = async (req, res) => {
  let { member, vendor } = req.body;
  let isUserExist = await isUserExists(member.email);
  if (!isUserExist) {
    // check if vendor exists or not....
    //   required team in which team member has to be added
    const requiredTeam = await Pickup_Team.find({ hired_by: vendor.id });
    console.log(requiredTeam);
    if (requiredTeam.length <= 0) {
      // it means no member has added by that specific memeber
      console.log("no vendor found that has registered its team");
      console.log("====================================");
      const teamObj = {
        team_members: member,
        hired_by: vendor.id,
      };
      const newTeam = await Pickup_Team.create(teamObj);
      res.send({
        message: "team created and member added successfully",
        team: newTeam,
      });
    } else {
      // it means some member has added by that specific vendor
      console.log("the member being pushed is: ", member);
      const updatedTeam = await Pickup_Team.findOneAndUpdate(
        { hired_by: vendor.id },
        { $push: { team_members: member } },
        { new: true }
      );
      res.send({
        message: "member added successfully",
        team: updatedTeam,
      });
    }
  } else {
    res.send({ message: "user already exists", isAdded: false });
  }
};

// function to  login a team member
const pickup_team_login_post = async (req, res) => {
  let member = req.body;
  let isUserExist = await isUserExists(member.email);
  if (!isUserExist) {
    res.send({ message: "user does not exists", status: false });
  } else {
    const teamobj = await Pickup_Team.find({
      "team_members.email": member.email,
      "team_members.password": member.password,
    });
    if (teamobj.length <= 0) {
      res.send({ message: "incorrect password", isLogin: false });
    } else {
      res.send({ message: "login success", isLogin: true, team: teamobj[0] });
    }
  }
};
// function to set team memeber as active or not
const pickup_team_member_is_active_put = async (req, res) => {
  const { member, disposal } = req.body;
  const memberObj = await Pickup_Team.updateOne(
    { "team_members.email": member.email },
    { "is_active.disposal_reference": disposal.id }
  )
    .then((r) => {
      res.send({ message: "updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: `Error while updating: ${err}` });
    });
};

// function to get all team members
const pickup_team_is_active_get = async (req, res) => {
  const { id } = req.params;
  const teamObj = await Pickup_Team.find({ hired_by: id });
  res.send({ team: teamObj });
};
module.exports = {
  pickup_team_login_post,
  pickup_team_member_is_active_put,
  pickup_team_is_active_get,
  pickup_team_add_member_post,
};

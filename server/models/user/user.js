const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  location: {
    province: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  avatar_link: {
    type: String,
    default: "default-avatar.png",
  },
  points_available: {
    type: Number,
    default: 0,
  },
  points_redeemed: {
    type: Number,
    default: 0,
  },
  current_threshold: {
    type: Number,
    default: 0,
  },
  leaderboard_points: {
    type: Number,
    default: 0,
  },
  garbage_disposal_facility: {
    type: Boolean,
    // required: true,
  },
  trust_level: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  waste_recycled_in_kg: {
    type: Number,
    default: 0,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
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
  owner_name: {
    type: String,
    // required: true,
  },
  fax: {
    type: String,
  },
  phoneNo: {
    type: String,
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
  material_to_pick: [String],
  pickup_teams: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pickup_Team",
  },
  price_per_kg: {
    type: [Number],
    required: true,
  },
  requested_disposal: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Disposal_Request",
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;

const mongoose = require("mongoose");

const disposalSchema = new mongoose.Schema({
  request_generated_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  request_to_vendor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Vendor",
  },
  request_date: {
    type: Date,
    default: Date.now,
  },
  pickup_date: {
    type: Date,
    // required: true,
  },
  material_type: {
    type: String,
    required: true,
  },
  pickup_location: {
    type: {
      address: String,
      coordinates: [Number],
    },
    required: true,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
  isCollected: {
    type: Boolean,
    default: false,
  },
  isCancelled: {
    type: Boolean,
    default: false,
  },
  isFake_request: {
    type: Boolean,
    default: false,
  },
});

const Disposal_Request = mongoose.model("Disposal_Request", disposalSchema);

module.exports = Disposal_Request;
// has to change later
// async function createDisposalRequest() {}

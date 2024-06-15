const mongoose = require("mongoose");

const recyclePointSchema = new mongoose.Schema({
  location: {
    type: [String],
    required: true,
  },
  map_image_url: {
    type: String,
    required: true,
  },
  recycle_point_image: {
    type: String,
    required: true,
  },
  recycle_point_name: {
    type: String,
    required: true,
  },
  opened_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  },
});

const Recycle_Point = mongoose.model("Recycle_Point", recyclePointSchema);

module.exports = Recycle_Point;

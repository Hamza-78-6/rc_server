const mongoose = require("mongoose");

const disposalCollectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  material_recycled: {
    type: {
      name: String,
      weight: Number,
      collected_by_vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
      },
      points_assigned: Number,
      diposal_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Disposal",
      },
    },
  },
});
const disposalCollection = mongoose.model(
  "Disposal_Collection",
  disposalCollectionSchema
);
module.exports = disposalCollection;

const mongoose = require("mongoose");

const pickupTeamSchema = new mongoose.Schema({
  team_members: {
    type: [
      {
        name: {
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
          address: {
            type: String,
            required: true,
          },
        },
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        isActive: {
          type: {
            status: Boolean,
            disposal_to_collect: [
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Disposal_Request",
              },
            ],
          },
        },
      },
    ],
    required: true,
  },
  hired_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
});

module.exports = mongoose.model("Pickup_team", pickupTeamSchema);

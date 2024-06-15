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
    required: true,
  },
  material_type: {
    type: String,
    required: true,
  },
  team_assigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pickup_Team",
  },
  pickup_location: {
    type: {
      address: String,
      coordinates: [Number],
    },
    required: true,
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
  quantity_pickedup: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Disposal_Request = mongoose.model("Disposal_Request", disposalSchema);

module.exports = Disposal_Request;
//  ====================================================================================================================
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
//===========================================================================================================
const mongoose = require("mongoose");

const learnSchema = new mongoose.Schema({
  material_name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material_Category",
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  article_content: {
    type: String,
    required: true,
  },
});

const Learn = mongoose.model("Learn", learnSchema);

module.exports = Learn;

//  ====================================================================================================================
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: String,
  description: String,
});

const Material_Category = mongoose.model("Material_Category", categorySchema);

module.exports = Material_Category;
// ====================================================================================================================
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
        isActive: {
          type: Boolean,
          required: true,
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
// ====================================================================================================================
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
  distance_from_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Recycle_Point = mongoose.model("Recycle_Point", recyclePointSchema);

module.exports = Recycle_Point;
// ====================================================================================================================
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
// ====================================================================================================================
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
  ownerName: {
    type: String,
    required: true,
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
    type: Number,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
// ====================================================================================================================

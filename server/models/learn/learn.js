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

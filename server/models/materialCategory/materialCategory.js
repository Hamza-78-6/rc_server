const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: String,
  description: String,
});

const Material_Category = mongoose.model("Material_Category", categorySchema);

module.exports = Material_Category;

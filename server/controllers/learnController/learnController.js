// functions that can be made
// learn_materialImages_get, learn_category_get, learn_article_get
// model import
const mongoose = require("mongoose");
const Learn = require("../../models/learn/learn");
const Material_Category = require("../../models/materialCategory/materialCategory");
// main functions
// Function to get all categories
const learn_category_get = async (req, res) => {
  try {
    const categories = await Material_Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Function to get all material names with their images
const learn_materialImages_get = async (req, res) => {
  try {
    const materials = await Learn.find({}, "material_name image_url");
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Function to get article content by material ID
const learn_article_get = async (req, res) => {
  const { material_name } = req.params;
  try {
    const material = await Learn.findById(material_name, "article_content");
    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  learn_article_get,
  learn_category_get,
  learn_materialImages_get,
};

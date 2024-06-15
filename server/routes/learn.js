const express = require("express");
const router = express.Router();
const learn = require("../controllers/learnController/learnController");

router.get("/material-names-images", learn.learn_materialImages_get);
router.get("/categories", learn.learn_category_get);
router.get("/articles/material_name", learn.learn_article_get);

module.exports = router;

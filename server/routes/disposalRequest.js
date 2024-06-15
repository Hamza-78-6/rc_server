const express = require("express");
const router = express.Router();
const disposalCollector = require("../controllers/diposalController/disposalController");
router.put("/request/isCollected", disposalCollector.disposal_collected_put);
router.put("/request/isCancelled", disposalCollector.disposal_cancelled_put);
router.put("/request/isFake", disposalCollector.disposal_fake_put);
module.exports = router;

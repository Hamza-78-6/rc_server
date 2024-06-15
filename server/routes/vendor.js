const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorController/vendorController");

router.post("/login", vendorController.vendor_login_post);
router.post("/signup", vendorController.vendor_signup_post);
router.post(
  "/view/disposalRequests",
  vendorController.view_disposal_requests_post
);
router.put("/add/disposalRequests", vendorController.add_disposal_request_put);
router.put(
  "/update/diposalRequest/accepted",
  vendorController.accpet_request_put
);
module.exports = router;

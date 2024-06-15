const express = require("express");
const router = express.Router();

const pickupTeamController = require("../controllers/pickupTeamController/pickupTeamController");

router.post("/login", pickupTeamController.pickup_team_login_post);
router.post("/addMember", pickupTeamController.pickup_team_add_member_post);
router.put(
  "/update/status/isActive",
  pickupTeamController.pickup_team_member_is_active_put
);
router.get("/get/team", pickupTeamController.pickup_team_is_active_get);

module.exports = router;

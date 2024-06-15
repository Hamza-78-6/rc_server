const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController/userController");

router.post("/signup", UserController.user_signup_post);
router.post("/login", UserController.user_login_post);
router.get("/points/:email", UserController.user_points_get);
router.post(
  "/createDisposalRequest",
  UserController.user_create_disposal_request_post
);
router.get("/getUserById/:id", UserController.find_user_by_id);
router.get("/recycledWaste/:email", UserController.user_recycledWaste_get);
router.put("/updatePassword", UserController.user_updatePassword_put);
router.put("/updateContact", UserController.user_updateContact_put);
router.put("/updateName", UserController.user_updateName_put);
router.put("/updateAvatar", UserController.user_updateAvatar_put);
module.exports = router;

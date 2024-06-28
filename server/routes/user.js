const express = require("express");
const router = express.Router();
const { handleSignUp,handlelogin } = require("../controller/user");

router.route("/").post(handleSignUp);
router.route("/login").post(handlelogin);
module.exports = router;

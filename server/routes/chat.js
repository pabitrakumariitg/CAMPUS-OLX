const express = require("express");
const router = express.Router();
 const {  handlegetAllUsers,handleAddMessage,handleGetMessages} = require("../controller/chat");

router.route("/allusers/:id").get(handlegetAllUsers);
router.route("/addmsg").post(handleAddMessage);
router.route("/getmsg").post(handleGetMessages);

module.exports = router;

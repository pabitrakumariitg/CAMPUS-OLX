const express = require("express");
const router = express.Router();
 const {  handlegetAllUsers} = require("../controller/chat");

router.route("/allusers/:id").get(handlegetAllUsers);

module.exports = router;

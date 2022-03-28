const router = require("express").Router();
const { addMessage, getMessages } = require("../controller/messageController");

router.post("/addMsg/", addMessage);
router.post("/getMsg/", getMessages);

module.exports = router;
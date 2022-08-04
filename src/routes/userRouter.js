const router = require("express").Router();
const { List, Add } = require("../controllers/userController");

router.get("/", List);
router.post("/", Add);

module.exports = router;

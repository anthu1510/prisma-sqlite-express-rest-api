const router = require("express").Router();
const { getUsers, addUser } = require("../controllers/userController");
const { registerUserValidation } = require("../validator/userValidation");

router.get("/", getUsers);
router.post("/", registerUserValidation, addUser);

module.exports = router;

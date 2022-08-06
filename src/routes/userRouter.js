const router = require("express").Router();
const { getUsers, addUser, login } = require("../controllers/userController");
const {
  registerUserValidation,
  loginValidation,
} = require("../validator/userValidation");

router.get("/", getUsers);
router.post("/", registerUserValidation, addUser);
router.post("/login", loginValidation, login);

module.exports = router;

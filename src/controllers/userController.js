class UserController {
  List(req, res) {
    res.send("this is users list");
  }

  Add(req, res) {
    res.send("this is users create");
  }
}

module.exports = new UserController();

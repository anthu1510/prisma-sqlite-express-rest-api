const { PrismaClient } = require("@prisma/client");
const { prismaError } = require("../error/ApiError");
const hashPwd = require("password-hash");
const jwt = require("../middlewares/jwt");
const prisma = new PrismaClient();

module.exports.getUsers = (req, res) => {
  res.send("this is users list");
};

module.exports.addUser = (req, res) => {
  //const { name, email, password } = req.body;
  const userData = {
    ...req.body,
    password: hashPwd.generate(req.body.password),
  };
  prisma.users
    .create({ data: userData })
    .then((rs) => {
      if (rs) return res.sendStatus(201);
    })
    .catch((err) => {
      return res.json(prismaError(err));
    });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  prisma.users
    .findFirst({ where: { email } })
    .then((rs) => {
      if (!rs) throw "data is empty";
      const verifyAuth = hashPwd.verify(password, rs.password);
      if (!verifyAuth) throw "password is not matched";
      const result = {
        success: true,
        authTokens: jwt.generateTokens({ userInfo: { userId: rs.userId } }),
      };
      res.send(result);
    })
    .catch((err) => console.log(err));
};

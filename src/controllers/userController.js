const { PrismaClient } = require("@prisma/client");
const { prismaError, Error } = require("../error/ApiError");
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
  try {
    const { email, password } = req.body;

    prisma.users
      .findFirst({ where: { email } })
      .then((rs) => {
        if (!rs) return res.json(Error({ code: "E001" }));
        const verifyAuth = hashPwd.verify(password, rs.password);
        if (!verifyAuth)
          return res.sendStatus(400).json(Error({ code: "E002" }));
        const result = {
          success: true,
          auth: jwt.generateTokens({ userInfo: { userId: rs.userId } }),
        };
        res.json(result);
      })
      .catch((err) =>
        res.sendStatus(400).json({ errors: { msg: err.message } })
      );
  } catch (error) {
    res.sendStatus(400).json({ errors: { msg: error.message } });
  }
};

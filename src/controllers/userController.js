const { PrismaClient } = require("@prisma/client");
const { prismaError } = require("../error/ApiError");
const prisma = new PrismaClient();

module.exports.getUsers = (req, res) => {
  res.send("this is users list");
};

module.exports.addUser = (req, res) => {
  // const user = await prisma.users
  //   .create({
  //     data: req.body,
  //   })
  //   .catch((e) => {
  //     if (e.code === "P2002")
  //       return res.send({ errors: { msg: "Emaid id is already in use." } });
  //   });
  // res.send(user);

  prisma.users
    .create({ data: req.body })
    .then((rs) => res.send(rs))
    .catch((err) => {
      return res.json(prismaError(err));
    });
};

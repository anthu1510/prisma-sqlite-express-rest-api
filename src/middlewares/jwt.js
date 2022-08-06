const jwt = require("jsonwebtoken");

module.exports.generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRECT, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
  });
};

module.exports.generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRECT, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
  });
};

module.exports.generateTokens = (payload) => {
  return {
    token: this.generateAccessToken(payload),
    refreshToken: this.generateRefreshToken(payload),
  };
};

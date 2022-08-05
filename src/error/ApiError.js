const errors = require("../error/errors");

class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static internal(msg) {
    return new ApiError(500, msg);
  }

  static prismaError(err) {
    const errorMessages = errors.filter((er) => er.code === err.code);
    return { errors: errorMessages };
  }
}

module.exports = ApiError;

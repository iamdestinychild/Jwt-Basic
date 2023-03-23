const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors/errors");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "somthing went wrong pls try again later" });
};

module.exports = errorHandler;

require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGODB_AUTH_URI || "mongodb://127.0.0.1:27017/micro-auth",
  jwtSecret: process.env.JWT_SECRET || "secret",
};

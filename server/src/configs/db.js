const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://admin:admin@cluster0.wlmlm3r.mongodb.net/?retryWrites=true&w=majority");
};

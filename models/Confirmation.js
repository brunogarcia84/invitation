const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const confirmSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Confirmation", confirmSchema);

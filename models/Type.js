const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  itemsIds: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = Type = mongoose.model("type", TypeSchema);
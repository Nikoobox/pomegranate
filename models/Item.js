const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  kitchen: {
    type: Schema.Types.ObjectId,
    ref: "kitchens",
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  expirationDate: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = Item = mongoose.model("item", ItemSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KitchenSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    savedItems: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Kitchen = mongoose.model('kitchen', KitchenSchema);
// module.exports = Kitchen = mongoose.model('items', KitchenSchema);

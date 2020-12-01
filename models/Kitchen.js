const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KitchenSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        // how to prefill the kitchen name with the user_id name?
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Kitchen = mongoose.model('kitchen', KitchenSchema);
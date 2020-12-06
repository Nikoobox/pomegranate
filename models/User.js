const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    kitchenName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true 
    },
    savedItemIds: {
        type: Array
    }
}, {
    timestamps: true
})

const User = mongoose.model('users', UserSchema);
module.exports = User;

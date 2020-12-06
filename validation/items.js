const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateItemInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Please enter name for the item";
    }

    if (parseInt(data.quantity) < 0) {
        errors.quantity = "Please enter positive quantity into the field";
    }

    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = "Please enter quantity field, such as 2 apples";
    }

    if (Validator.isEmpty(data.type)) {
        errors.type = "Please choose type field";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};

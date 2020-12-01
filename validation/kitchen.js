const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateKitchenInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';

    if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
        errors.name = 'Kitchen name must be between 2 and 20 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
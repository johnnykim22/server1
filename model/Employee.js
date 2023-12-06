const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    }
    })

    module.exports = mongoose.model('Employee', employeeSchema);
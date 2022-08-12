const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var employeeSchema =  new Schema({
    fullName: { type: String},
    email: { type: String},
    mobile: {type: Number},
    city : {type: String}
})

module.exports = mongoose.model('Employee', employeeSchema, 'employees');
const mongoose = require('mongoose');

//create a schema for bands

const bandSchema = new mongoose.Schema({
    name: String,
    members: Number,
    instruments: {
        type: String,
        default: undefined
    },
    email: String,
    famous: Boolean
});

bandSchema.methods.sayHello = function () {
    return `Hello! We are ${this.name} and we're here to rock!`
};

//Name the model
const Band = mongoose.model('Band', bandSchema);

//Export the model
module.exports = Band;
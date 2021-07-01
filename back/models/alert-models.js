const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alertSchema = new Schema({
    alert: {
        type:String,
        require: true,
    },
},{
    timestamps: true,
})

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Message', messageSchema);

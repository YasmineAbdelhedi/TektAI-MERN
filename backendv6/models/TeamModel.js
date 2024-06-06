const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    members: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        default: []
    },
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge', 
        required: true
    },
  
    teamSize: {
        type: Number,
        trim: true
    },
    skillRequirement: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Team', TeamSchema);
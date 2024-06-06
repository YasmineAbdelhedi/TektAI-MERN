const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ChallengeSchema = new mongoose.Schema({
    challengeName: {
        type: String,
    },
    bareme: {
        type: Number,
        required:true
    },
    companyName: {
        type: String,
    },
    startDate: {
        type: String,
    },
    deadline: {
        type: String,
    },
    description: {
        type: String,
    },
    picture: { 
        data: {
            type: String,
        },
        contentType: String,
    },
    status: {
        type: String,
    },
    tags: [{
        type: String,
        trim: true
    }],
    dataset:{
        data: {
            type: String,
        },
        contentType: String,
    },
    visibility: {
        type: String, 
        trim: true
    },
    access: {
        type: String,
        trim: true
    },
    teamSize: {
        type: Number,
        trim: true
    },
    minSize: {
        type: Number,
        trim: true
    },
    maxSize: {
        type: Number,
        trim: true
    },
    prizeType: {
        type: String,
        trim: true,
        enum: ['monitoring', 'non-monitoring']
    },
    prizeAmount: {
        type: Number,
        trim: true,
        required: function() {
            return this.prizeType === 'monitoring';
        }
    },
    giftType: {
        type: String,
        trim: true,
        required: function() {
            return this.prizeType === 'non-monitoring' && !this.freelanceSubject && !this.internshipSubject;
        }
    },
    internshipSubject: {
        type: String,
        trim: true,
        required: function() {
            return this.prizeType === 'non-monitoring' && !this.giftType && !this.freelanceSubject;
        }
    },
    internshipRequirement: {
        type: String,
        trim: true,
        required: function() {
            return this.internshipSubject;
        }
    },
    internshipStartDate: {
        type: String,
        trim: true,
        required: function() {
            return this.internshipSubject;
        }
    },
    internshipEndDate: {
        type: String,
        trim: true,
        required: function() {
            return this.internshipSubject;
        }
    },
    internshipRenumeration: {
        type: String,
        trim: true,
        required: function() {
            return this.internshipSubject;
        }
    },
    freelanceSubject: {
        type: String,
        trim: true,
        required: function() {
            return this.prizeType === 'non-monitoring' && !this.giftType && !this.internshipSubject;
        }
    },
    freelanceRequirement: {
        type: String,
        trim: true,
        required: function() {
            return this.freelanceSubject;
        }
    },
    freelanceStartDate: {
        type: String,
        trim: true,
        required: function() {
            return this.freelanceSubject;
        }
    },
    freelanceEndDate: {
        type: String,
        trim: true,
        required: function() {
            return this.freelanceSubject;
        }
    },
    freelanceRenumeration: {
        type: String,
        trim: true,
        required: function() {
            return this.freelanceSubject;
        }
    },
    likes: {
      type: Number,
      default: 0 // Default value is 0
    }
});

ChallengeSchema.methods.calculateStatus = function() {
    const currentDateTime = new Date();
    const startDateTime = new Date(this.startDate);
    const endDateTime = new Date(this.deadline);
  
    if (currentDateTime < startDateTime) {
      return 'coming soon';
    } else if (currentDateTime >= startDateTime && currentDateTime <= endDateTime) {
      return "ongoing";
    } else {
      return "expired";
    }
};

module.exports = mongoose.model('Challenge', ChallengeSchema);

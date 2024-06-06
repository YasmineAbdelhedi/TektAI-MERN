const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require('../models/CompanyModel')
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
    ,
    recoveryEmail: {
        type: String,
        unique: true,
        trim: true
    }
    ,phone_number:
    {
        type: String,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    profession: {
        type: String,
        default:'Devoloper',
        trim: true
    },
    picture:{ data: {
        type: String,
        
      },
      contentType: String,},
    password: {
        type: String,
        trim: true
    }
    ,    
    verified: { type: Boolean, default: false
     },
    emailNotif: { type: Boolean, default: false
     },
    pushNotif: { type: Boolean, default: false
     },
    accountPrivacy: { type: String,
    default: "public"
     },
    verificationCode: {
        type: String
    },
    aboutMe: {
        type: String,
        trim: true
    },
    facebookLink: {
        type: String,
        trim: true
    },
    instagramLink: {
        type: String,
        trim: true
    },
    linkedInLink: {
        type: String,
        trim: true
    },
    githubLink: {
        type: String,
        trim: true
    },
    cv: {
        type: String,
        trim: true
    },
    userType: {
        type: String,
        default:'user',
        trim: true
    }
    ,
    isCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        trim: true
    },
    invitationToken: {
        type: String
    }
    ,
    datasets: {
        type: Number,
        default:0,
    }
    ,
    challenges: {
        type: Number,
        default:0,

    }
    ,
    courses: {
        type: Number,
        default:0,

    }
    ,
    winningAwards: {
        type: Number,
        default:0,

    },

      status: {
          type: String,
          enum: ['active', 'blocked', 'archived'],
          default: 'active',
        },
    
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
    },
    favoriteChallenges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
      }
    ]
});
UserSchema.methods.isValidPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
   
};


  



module.exports = mongoose.model('User', UserSchema);

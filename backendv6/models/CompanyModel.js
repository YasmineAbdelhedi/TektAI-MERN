const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },phone_number:
    {
        type: String,
        trim: true
    },

    country:{
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    domaine:{
        type: String,
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
    verificationCode: {
        type: String,
        trim: true
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
    userType: {
        type: String,
        default:'company',
        trim: true
    }
    ,
   
    challenges: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }]
   
});
CompanySchema.methods.addChallenge = async function(challengeId) {
    try {
        this.challenges.push(challengeId);
        await this.save();
    } catch (error) {
        throw new Error(error);
    }
};
CompanySchema.methods.isValidPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
   
};


  



module.exports = mongoose.model('Company', CompanySchema);

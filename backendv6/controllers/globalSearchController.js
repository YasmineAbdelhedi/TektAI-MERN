
const User = require('../models/UserModel');
const Company = require('../models/CompanyModel');
const Challenge = require('../models/ChallengeModel');
const Course = require('../models/CourseModel');

exports.globalSearch = async (req, res) => {
    try {
        const { searchTerm } = req.query;

        const users = await User.find({ $or: [{ firstname: searchTerm }, { lastname: searchTerm }] });
        const companies = await Company.find({ companyName: searchTerm });
        const challenges = await Challenge.find({ challengeName: searchTerm });
        const courses = await Course.find({ title: searchTerm });

        res.status(200).json({ users, companies, challenges, courses });
    } catch (error) {
        res.status(500).json({ message: 'Failed to perform global search', error: error.message });
    }
};

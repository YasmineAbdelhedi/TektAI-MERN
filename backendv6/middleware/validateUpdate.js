const yup = require("yup");


const validateUpdate = async (req, res, next) => {
    try {
       
        await Schema.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = validateUpdate;
const yup = require("yup");

const questionValidation = async (req, res, next) => {
    try {
        const Schema = yup.object().shape({
            question: yup.string()
                .required('question is required')
                .min(3, 'question must be at least 3 characters long')
        });
        await Schema.validate(req.body); // Correction ici
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = questionValidation;

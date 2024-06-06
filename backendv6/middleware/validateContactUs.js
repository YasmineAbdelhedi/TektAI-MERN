const yup = require("yup");


const validateContactUs = async (req, res, next) => {
    try {
        const Schema = yup.object().shape({
            name: yup.string()
                .required(' name is required')
                .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
                .min(3, ' name must be at least 3 characters long')
                .matches(/^[^\d!@#$%^&*(),.?":{}|<>\/]+$/, 'name cannot contain special characters'),
                email: yup.string().email()
                .required('Email is required')
                .matches(/^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'),
            phone_number: yup.string()
                .required('Phone number is required')
                .matches(/^\d{11}$/, 'Please enter a valid phone number'),
                subject: yup.string()
                .required(' subject is required')
                .matches(/^[A-Za-z]+$/, 'subject  must contain only letters')
                .min(3, ' subject must be at least 3 characters long')
                .matches(/^[^\d!@#$%^&*(),.?":{}|<>\/]+$/, 'subject cannot contain special characters'),
                email: yup.string().email()

        });
        await Schema.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = validateContactUs;
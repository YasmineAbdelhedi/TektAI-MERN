const yup = require("yup");


const validate = async (req, res, next) => {
    try {
        const Schema = yup.object().shape({
            firstname: yup.string()
                .required('First name is required')
                .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
                .min(3, 'First name must be at least 3 characters long')
                .matches(/^[^\d!@#$%^&*(),.?":{}|<>\/]+$/, 'First name cannot contain special characters'),
            lastname: yup.string()
                .required('Last name is required')
                .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
                .min(3, 'Last name must be at least 3 characters long')
                .matches(/^[^\d!@#$%^&*(),.?":{}|<>\/]+$/, 'Last name cannot contain special characters'),
            email: yup.string().email()
                .required('Email is required')
                .matches(/^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'),
            phone_number: yup.string()
                .required('Phone number is required')
                .matches(/^\+\d{1,3}\d{8,14}$/, 'Please enter a valid phone number'),
            
            password: yup.string()
                .required('Password is required')
                .min(8, 'Password should be at least 8 characters long')
                .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
                .matches(/[a-z]/, 'Password should contain at least one lowercase letter')
                .matches(/\d/, 'Password should contain at least one number'),
            retypePassword: yup.string()
                .required('Retype password is required')
                .oneOf([yup.ref('password'), null], 'Passwords do not match')
        });
        await Schema.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = validate;
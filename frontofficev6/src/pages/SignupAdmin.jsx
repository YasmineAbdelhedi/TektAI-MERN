import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupAdmin = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/admin/register', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}` // Retrieve token from local storage
                }
            });
            console.log(response.data);
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Admin signup error:', error);
            // Handle error, maybe show an error message
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '1rem' }}>Admin Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="firstname" style={{ display: 'block', color: '#2563eb', marginBottom: '0.5rem' }}>First Name:</label>
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #a0aec0', borderRadius: '0.25rem', outline: 'none' }} required />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="lastname" style={{ display: 'block', color: '#2563eb', marginBottom: '0.5rem' }}>Last Name:</label>
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #a0aec0', borderRadius: '0.25rem', outline: 'none' }} required />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email" style={{ display: 'block', color: '#2563eb', marginBottom: '0.5rem' }}>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #a0aec0', borderRadius: '0.25rem', outline: 'none' }} required />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password" style={{ display: 'block', color: '#2563eb', marginBottom: '0.5rem' }}>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #a0aec0', borderRadius: '0.25rem', outline: 'none' }} required />
                    </div>
                    <button type="submit" style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.25rem', cursor: 'pointer' }}>Sign Up</button>
                    <Link to="/loginadmin" style={{ display: 'block', textAlign: 'center', color: '#2563eb', marginTop: '0.5rem', textDecoration: 'none' }}>Login</Link>
                </form>
            </div>
        </div>
    );
};

export default SignupAdmin;

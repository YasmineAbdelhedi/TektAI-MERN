import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/admin/login', formData);
            const { token } = response.data;

            // Store token in local storage
            localStorage.setItem('adminToken', token);

            // Redirect to the dashboard or desired page
            window.location.href = 'http://localhost:5173/';
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '1rem' }}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email" style={{ display: 'block', color: '#2563eb', marginBottom: '0.5rem' }}>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #a0aec0', borderRadius: '0.25rem', outline: 'none', ':focus': { borderColor: '#2563eb' } }} required />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password" style={{ display: 'block', color: '#2563eb', marginBottom: '0.5rem' }}>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #a0aec0', borderRadius: '0.25rem', outline: 'none', ':focus': { borderColor: '#2563eb' } }} required />
                    </div>
                    <button type="submit" style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.25rem', cursor: 'pointer', ':hover': { backgroundColor: '#3b82f6' } }}>Login</button>
                    <Link to="/signupadmin" style={{ display: 'block', textAlign: 'center', color: '#2563eb', marginTop: '0.5rem', textDecoration: 'none' }}>Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginAdmin;

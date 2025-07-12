import React, { useState } from 'react';
import '../App.css'
import axios from '../api'

const AuthForm = ({ onAuthSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const toggleMode = () => setIsRegister(!isRegister);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? '/api/register' : '/api/login';

    try {
      const res = await axios.post(url, formData);
      const token = res.data.token;

      if (token) {
        localStorage.setItem('token', token);
        onAuthSuccess(); // Redirect to dashboard or prompt page
      } else {
        alert(res.data.message || 'No token received');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error during authentication');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <p onClick={toggleMode} style={{ cursor: 'pointer', marginTop: '10px' }}>
        {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
      </p>
    </div>
  );
};

export default AuthForm;

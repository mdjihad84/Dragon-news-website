import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    // Basic validation for empty fields and password match
    if (!firstName || !lastName || !email || !password || password !== confirmPassword) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log(formData);
      setAlert({
        show: true,
        type: 'success',
        message: 'Registration successful!',
      });
    } else {
      setAlert({
        show: true,
        type: 'error',
        message: 'Please fill all fields correctly.',
      });
    }

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center px-4 pb-12 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl md:w-[700px] p-4 sm:p-6 md:p-12">
        
        {/* Alert Message */}
        {alert.show && (
          <div className={`mb-4 p-4 rounded-lg ${alert.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
            {alert.message}
          </div>
        )}
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#403F3F] p-2 rounded-lg">
          Register your account
        </h2>
        
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4 p-2 rounded-lg">
            <label className="block text-[#403F3F] text-lg md:text-xl font-bold mb-2" htmlFor="firstName">
              Your Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full h-10 md:h-12 px-4 border rounded-lg focus:outline-none focus:border-blue-500 bg-[#F3F3F3]"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Last Name (Photo URL) */}
          <div className="mb-4 p-2 rounded-lg">
            <label className="block text-[#403F3F] text-lg md:text-xl font-bold mb-2" htmlFor="lastName">
              Photo URL
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full h-10 md:h-12 px-4 border rounded-lg focus:outline-none focus:border-blue-500 bg-[#F3F3F3]"
              placeholder="Enter your photo URL"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4 p-2 rounded-lg">
            <label className="block text-[#403F3F] text-lg md:text-xl font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 md:h-12 px-4 border rounded-lg focus:outline-none focus:border-blue-500 bg-[#F3F3F3]"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 p-2 rounded-lg">
            <label className="block text-[#403F3F] text-lg md:text-xl font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-10 md:h-12 px-4 border rounded-lg focus:outline-none focus:border-blue-500 bg-[#F3F3F3]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 p-2 rounded-lg">
            <label className="block text-[#403F3F] text-lg md:text-xl font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-10 md:h-12 px-4 border rounded-lg focus:outline-none focus:border-blue-500 bg-[#F3F3F3]"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Show Password Checkbox */}
          <div className="flex items-center mb-4 p-2 rounded-lg">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="h-4 w-4 bg-white rounded"
            />
            <label htmlFor="showPassword" className="ml-2 text-lg md:text-xl text-[#403F3F]">
              Show Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-10 md:h-12 bg-[#403F3F] text-white rounded-lg font-semibold hover:bg-[#1a1818] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

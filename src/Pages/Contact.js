import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the form data
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md my-5">
      <h2 className="text-xl font-semibold mb-2">Contact Customer Support</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Submit</button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;

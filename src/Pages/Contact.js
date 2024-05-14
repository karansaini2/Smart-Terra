import React from 'react';
import Navbar from '../Components/Navbar';

const ContactForm = () => {

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md my-5">
      <h2 className="text-xl font-semibold mb-2">Contact Customer Support</h2>
      <form  action='https://getform.io/f/rbeqnvkb' method='POST' encType='multipart/form-data'>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email"  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber"  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message"  rows="4" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Submit</button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;

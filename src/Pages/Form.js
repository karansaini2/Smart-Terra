import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Form() {
  // State to store form data
  const [formData, setFormData] = useState({
    cropName: '',
    temperature: '',
    ph: '',
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to submit the form data or perform analysis
    console.log(formData);
    // Reset form fields
    setFormData({
      cropName: '',
      temperature: '',
      ph: '',
      nitrogen: '',
      phosphorus: '',
      potassium: ''
    });
  };
  

  return (
    <>
      <Navbar />
      <div className="flex justify-center my-5">
        <div className="max-w-lg mx-auto bg-gray-200 rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Crop Information</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="cropName" className="block text-sm font-medium text-gray-700">Crop Name</label>
                <input type="text" id="cropName" name="cropName" value={formData.cropName} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              <div>
                <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
                <input type="number" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="ph" className="block text-sm font-medium text-gray-700">pH</label>
                <input type="number" id="ph" name="ph" value={formData.ph} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              <div>
                <label htmlFor="nitrogen" className="block text-sm font-medium text-gray-700">Nitrogen (ppm)</label>
                <input type="number" id="nitrogen" name="nitrogen" value={formData.nitrogen} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="phosphorus" className="block text-sm font-medium text-gray-700">Phosphorus (ppm)</label>
                <input type="number" id="phosphorus" name="phosphorus" value={formData.phosphorus} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              <div>
                <label htmlFor="potassium" className="block text-sm font-medium text-gray-700">Potassium (ppm)</label>
                <input type="number" id="potassium" name="potassium" value={formData.potassium} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Analyze
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

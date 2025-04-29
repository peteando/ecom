"use client"; // Marking this as a Client Component

import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to an API or service)
        console.log(formData);
    }

    return (
        <section className="bg-purple-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-3">
                <h2 className="text-4xl lg:text-4xl font-bold mb-10 text-center">Contact Me</h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 mt-2 bg-white text-black rounded-md shadow-sm focus:ring-2 focus:ring-[#266f6b] focus:outline-none" 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 mt-2 bg-white text-black rounded-md shadow-sm focus:ring-2 focus:ring-[#266f6b] focus:outline-none" 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-medium">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows="4" 
                            className="w-full px-4 py-2 mt-2 bg-white text-black rounded-md shadow-sm focus:ring-2 focus:ring-[#266f6b] focus:outline-none" 
                            required
                        ></textarea>
                    </div>

                    <div>
                        <button type="submit" className="w-full bg-[#266f6b] text-white py-3 rounded-md font-semibold hover:bg-[#1f5c58] transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

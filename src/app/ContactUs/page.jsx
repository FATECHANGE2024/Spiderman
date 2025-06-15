
'use client';
import Navbar from "@/app/component/Navbar/Navbar";

import { useState } from 'react';

export default function ContactForm() {

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            // Handle non-200 responses
            if (!res.ok) {
                console.error('Server error:', res.statusText);
                alert('Server error. Please try again later.');
                return;
            }

            const data = await res.json(); // Safe now

            if (data.success) {
                alert('Message sent!');
            } else {
                alert('Failed to send. Try again.');
            }
        } catch (error) {
            console.error('Network or JSON error:', error);
            alert('Something went wrong. Please try again.');
        }
    };


    return (
        <div>
            <Navbar />
            <div className="mt-40 max-w-7xl mx-auto py-16 px-4 md:px-8">
                <div className="bg-white text-black rounded-xl p-8 grid md:grid-cols-2 gap-10 shadow-xl border border-gray-200">

                    {/* Left Section: Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold text-orange-600">Get In Touch</h2>
                        <p className="text-gray-700 mt-2">
                            Ready to start your journey with us? Contact our admissions team for more information.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                required
                                className="w-full bg-gray-100 placeholder-black text-black border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-gray-100 text-black border placeholder-black border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                className="w-full bg-gray-100 text-black border placeholder-black border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            />
                            <select
                                name="course"
                                required
                                className="w-full bg-gray-100 text-black border placeholder-black border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            >
                                <option value="">Select a course</option>
                                <option value="BTech">BTech</option>
                                <option value="MBA">MBA</option>
                                <option value="BCA">BCA</option>
                            </select>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-gray-100 text-black border placeholder-black border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded font-semibold transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Section: Info */}
                    <div className="space-y-6">
                        <div className="bg-gray-100 rounded-lg p-6 text-center border border-gray-200">
                            <p className="text-orange-600 font-semibold">Interactive Campus Map</p>
                            <p className="text-sm text-black">Click on markers to explore our campuses</p>
                        </div>

                        {[
                            {
                                title: "Main Campus - Bhopal",
                                address: "Raisen Road, Bhopal, Madhya Pradesh 462042",
                                phone: "+91 755 249 3333",
                                email: "info@lnctgroup.co.in",
                            },
                            {
                                title: "LNCT University Campus",
                                address: "Kolar Road, Bhopal, Madhya Pradesh 462021",
                                phone: "+91 755 249 4444",
                                email: "university@lnctgroup.co.in",
                            },
                            {
                                title: "LNCTS Campus - Bhopal",
                                address: "Sagar Road, Bhopal, Madhya Pradesh 462041",
                                phone: "+91 755 249 5555",
                                email: "lncts@lnctgroup.co.in",
                            },
                        ].map((campus, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-4 bg-gray-100 shadow-sm">
                                <h4 className="font-semibold text-orange-600">{campus.title}</h4>
                                <p className="text-sm text-black">{campus.address}</p>
                                <p className="text-sm text-blue-700">{campus.phone}</p>
                                <p className="text-sm text-blue-700">{campus.email}</p>
                            </div>
                        ))}

                        <div className="border border-gray-200 rounded-lg p-4 bg-gray-100 shadow-sm">
                            <h4 className="font-semibold text-orange-600">Office Hours</h4>
                            <p className="text-sm text-black">
                                Mon - Fri: <span className="text-blue-700">9:00 AM - 6:00 PM</span>
                            </p>
                            <p className="text-sm text-black">
                                Saturday: <span className="text-blue-700">9:00 AM - 2:00 PM</span>
                            </p>
                            <p className="text-sm text-black">
                                Sunday: <span className="text-red-500">Closed</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

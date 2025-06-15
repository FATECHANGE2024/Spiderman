'use client';
import Navbar from "@/app/component/Navbar/Navbar";
import { useState } from 'react';

export default function Grievance() {
    const [submitStatus, setSubmitStatus] = useState('');
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
       <div className="">
    <Navbar />
    <div className="min-h-screen bg-white text-white py-10 px-4 ">
        <div className="max-w-3xl mx-auto bg-white border-gray-200 rounded-2xl p-8 shadow-2xl mt-40 ">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Grievance Redressal Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white border border-zinc-700 placeholder-black text-black"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white border border-zinc-700 placeholder-black text-black"
                />
                <input
                    name="department"
                    type="text"
                    placeholder="Your Department"
                    required
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white border border-zinc-700 placeholder-black text-black"
                />
                <select
                    name="category"
                    required
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white border border-zinc-700 placeholder-black text-black"
                >
                    <option value="">Select Category</option>
                    <option>Academic</option>
                    <option>Harassment</option>
                    <option>Hostel</option>
                    <option>Infrastructure</option>
                    <option>Other</option>
                </select>
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Describe your grievance..."
                    required
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white border border-zinc-700 placeholder-black text-black"
                />
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded font-semibold transition"
                >
                    Submit Grievance
                </button>
            </form>
        </div>
    </div>
</div>

    );
}

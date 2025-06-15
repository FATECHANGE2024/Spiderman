// 'use client';
// import Navbar from "@/app/component/Navbar/Navbar";
// import { useState } from 'react';

// export default function Grievance() {

//     const [form, setForm] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         course: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };



//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(form),
//             });

//             // Handle non-200 responses
//             if (!res.ok) {
//                 console.error('Server error:', res.statusText);
//                 alert('Server error. Please try again later.');
//                 return;
//             }

//             const data = await res.json(); // Safe now

//             if (data.success) {
//                 alert('Message sent!');
//             } else {
//                 alert('Failed to send. Try again.');
//             }
//         } catch (error) {
//             console.error('Network or JSON error:', error);
//             alert('Something went wrong. Please try again.');
//         }
//     };


//     return (
//         <div>
//             <Navbar />
//             <section className="h-screen w-full overflow-hidden">
//                 <img
//                     className="object-cover h-full w-full inset-0"
//                     alt="Banner"
//                     src="/media/Incubation.jpg"
//                 />
//             </section>

//             <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 grid md:grid-cols-2 gap-10">
//                 <div>
//                     <h2 className="text-3xl font-bold text-purple-700">Get In Touch</h2>
//                     <p className="text-gray-600 mt-2">Ready to start your journey with us? Contact our admissions team for more information.</p>

//                     <form onSubmit={handleSubmit} className="mt-8 space-y-4">
//                         <input type="text" name="fullName" placeholder="Full Name" required className="w-full border p-2 rounded" onChange={handleChange} />
//                         <input type="email" name="email" placeholder="Email Address" required className="w-full border p-2 rounded" onChange={handleChange} />
//                         <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-2 rounded" onChange={handleChange} />
//                         <select name="course" required className="w-full border p-2 rounded" onChange={handleChange}>
//                             <option value="">Select a course</option>
//                             <option value="BTech">BTech</option>
//                             <option value="MBA">MBA</option>
//                             <option value="BCA">BCA</option>
//                         </select>
//                         <textarea name="message" placeholder="Message" rows="4" className="w-full border p-2 rounded" onChange={handleChange}></textarea>
//                         <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Send Message</button>
//                     </form>
//                 </div>

//                 <div className="space-y-6">
//                     <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 text-center">
//                         <p className="text-purple-700 font-semibold">Interactive Campus Map</p>
//                         <p className="text-sm text-gray-600">Click on markers to explore our campuses</p>
//                     </div>

//                     {[
//                         {
//                             title: "Main Campus - Bhopal",
//                             address: "Raisen Road, Bhopal, Madhya Pradesh 462042",
//                             phone: "+91 755 249 3333",
//                             email: "info@lnctgroup.co.in"
//                         },
//                         {
//                             title: "LNCT University Campus",
//                             address: "Kolar Road, Bhopal, Madhya Pradesh 462021",
//                             phone: "+91 755 249 4444",
//                             email: "university@lnctgroup.co.in"
//                         },
//                         {
//                             title: "LNCTS Campus - Bhopal",
//                             address: "Sagar Road, Bhopal, Madhya Pradesh 462041",
//                             phone: "+91 755 249 5555",
//                             email: "lncts@lnctgroup.co.in"
//                         },
//                     ].map((campus, i) => (
//                         <div key={i} className="border rounded-lg p-4 shadow-sm">
//                             <h4 className="font-semibold">{campus.title}</h4>
//                             <p className="text-sm text-gray-600">{campus.address}</p>
//                             <p className="text-sm text-blue-600">{campus.phone}</p>
//                             <p className="text-sm text-blue-600">{campus.email}</p>
//                         </div>
//                     ))}

//                     <div className="border rounded-lg p-4 shadow-sm">
//                         <h4 className="font-semibold">Office Hours</h4>
//                         <p className="text-sm">Mon - Fri: <span className="text-blue-600">9:00 AM - 6:00 PM</span></p>
//                         <p className="text-sm">Saturday: <span className="text-blue-600">9:00 AM - 2:00 PM</span></p>
//                         <p className="text-sm">Sunday: <span className="text-red-500">Closed</span></p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }




// 'use client';
// import { useState } from 'react';

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     course: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };



// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     // Handle non-200 responses
//     if (!res.ok) {
//       console.error('Server error:', res.statusText);
//       alert('Server error. Please try again later.');
//       return;
//     }

//     const data = await res.json(); // Safe now

//     if (data.success) {
//       alert('Message sent!');
//     } else {
//       alert('Failed to send. Try again.');
//     }
//   } catch (error) {
//     console.error('Network or JSON error:', error);
//     alert('Something went wrong. Please try again.');
//   }
// };


//   return (
//     <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 grid md:grid-cols-2 gap-10">
//       <div>
//         <h2 className="text-3xl font-bold text-purple-700">Get In Touch</h2>
//         <p className="text-gray-600 mt-2">Ready to start your journey with us? Contact our admissions team for more information.</p>

//         <form onSubmit={handleSubmit} className="mt-8 space-y-4">
//           <input type="text" name="fullName" placeholder="Full Name" required className="w-full border p-2 rounded" onChange={handleChange} />
//           <input type="email" name="email" placeholder="Email Address" required className="w-full border p-2 rounded" onChange={handleChange} />
//           <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-2 rounded" onChange={handleChange} />
//           <select name="course" required className="w-full border p-2 rounded" onChange={handleChange}>
//             <option value="">Select a course</option>
//             <option value="BTech">BTech</option>
//             <option value="MBA">MBA</option>
//             <option value="BCA">BCA</option>
//           </select>
//           <textarea name="message" placeholder="Message" rows="4" className="w-full border p-2 rounded" onChange={handleChange}></textarea>
//           <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Send Message</button>
//         </form>
//       </div>

//       <div className="space-y-6">
//         <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 text-center">
//           <p className="text-purple-700 font-semibold">Interactive Campus Map</p>
//           <p className="text-sm text-gray-600">Click on markers to explore our campuses</p>
//         </div>

//         {[
//           {
//             title: "Main Campus - Bhopal",
//             address: "Raisen Road, Bhopal, Madhya Pradesh 462042",
//             phone: "+91 755 249 3333",
//             email: "info@lnctgroup.co.in"
//           },
//           {
//             title: "LNCT University Campus",
//             address: "Kolar Road, Bhopal, Madhya Pradesh 462021",
//             phone: "+91 755 249 4444",
//             email: "university@lnctgroup.co.in"
//           },
//           {
//             title: "LNCTS Campus - Bhopal",
//             address: "Sagar Road, Bhopal, Madhya Pradesh 462041",
//             phone: "+91 755 249 5555",
//             email: "lncts@lnctgroup.co.in"
//           },
//         ].map((campus, i) => (
//           <div key={i} className="border rounded-lg p-4 shadow-sm">
//             <h4 className="font-semibold">{campus.title}</h4>
//             <p className="text-sm text-gray-600">{campus.address}</p>
//             <p className="text-sm text-blue-600">{campus.phone}</p>
//             <p className="text-sm text-blue-600">{campus.email}</p>
//           </div>
//         ))}

//         <div className="border rounded-lg p-4 shadow-sm">
//           <h4 className="font-semibold">Office Hours</h4>
//           <p className="text-sm">Mon - Fri: <span className="text-blue-600">9:00 AM - 6:00 PM</span></p>
//           <p className="text-sm">Saturday: <span className="text-blue-600">9:00 AM - 2:00 PM</span></p>
//           <p className="text-sm">Sunday: <span className="text-red-500">Closed</span></p>
//         </div>
//       </div>
//     </div>
//   );
// }









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
            <div className="min-h-screen bg-black text-white py-10 px-4 ">
                <div className="max-w-3xl mx-auto bg-zinc-900 rounded-lg p-8 shadow-xl mt-35">
                    <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Grievance Redressal Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 placeholder-gray-400"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            required
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 placeholder-gray-400"
                        />
                        <input
                            name="department"
                            type="text"
                            placeholder="Your Department"
                            required
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 placeholder-gray-400"
                        />
                        <select
                            name="category"
                            required
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
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
                            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded font-semibold transition"
                        >
                            Submit Grievance
                        </button>
                        {status && <p className="text-sm text-green-400 mt-2">{status}</p>}
                        
                    </form>
                </div>
            </div>

            {/* <form
                onSubmit={handleSubmit}
                className="w-[85%] mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg space-y-4 mt-60"
            >
                <h2 className="text-2xl font-semibold">Grievance Form</h2>
                <input name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
                <input name="department" placeholder="Department" onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
                <select name="category" onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 border border-gray-700">
                    <option value="">Select Category</option>
                    <option>Academic</option>
                    <option>Hostel</option>
                    <option>Harassment</option>
                    <option>Infrastructure</option>
                    <option>Other</option>
                </select>
                <textarea name="message" placeholder="Describe your grievance..." onChange={handleChange} required rows={4} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded">Submit</button>
                {status && <p className="text-sm text-green-400">{status}</p>}
            </form> */}
        </div>
    );
}

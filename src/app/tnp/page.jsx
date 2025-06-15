import Navbar from "@/app/component/Navbar/Navbar";

export default function Training() {

    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden ">
                <img
                    className="object-fit h-full w-full inset-0"
                    alt="Banner"
                    src="/media/TP.jpg"
                />
            </section>
            <div className="bg-white px-4 md:px-12 py-20 text-gray-800">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-orange-600">Training & Placements</h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We prepare our students to face real-world challenges through industry-focused training and strong placement support.
                    </p>
                </div>

                
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Comprehensive Training Programs</h2>
                        <p className="mt-4 text-gray-600">
                            Our curriculum is designed to upskill students with technical, soft skills, and aptitude training. Sessions include hands-on workshops,
                            expert lectures, hackathons, and resume building.
                        </p>
                        <ul className="mt-6 list-disc list-inside space-y-2 text-gray-700">
                            <li>Soft Skills & Personality Development</li>
                            <li>Technical Training (Java, Python, Full Stack, etc.)</li>
                            <li>Aptitude & Logical Reasoning Practice</li>
                            <li>Mock Interviews & Group Discussions</li>
                        </ul>
                    </div>
                    <img src="/media/training.svg" alt="Training" className="rounded-lg shadow-md" />
                </div>

                
                <div className="bg-gray-100 p-10 rounded-xl shadow-md mb-20">
                    <h2 className="text-2xl font-bold text-orange-600 text-center">Placement Highlights</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
                        {[
                            { label: "Highest Package", value: "₹18 LPA" },
                            { label: "Total Offers in 2024", value: "500+" },
                            { label: "Recruiters Visited", value: "100+" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-gray-700">{item.value}</h3>
                                <p className="text-sm text-gray-500 mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="text-center mb-16">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Top Recruiters</h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 grayscale hover:grayscale-0 transition">
                        {["tcs", "infosys", "wipro", "cognizant"].map((company, idx) => (
                            <img
                                key={idx}
                                src={`/media/${company}.jpg`} 
                                alt={company}
                                className="text-20 object-contain"
                            />
                        ))}
                    </div>
                </div>

                
                <div className="grid md:grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-orange-50 p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">"I got placed in TCS with help of the placement cell. The training helped me crack the interviews confidently."</p>
                            <div className="mt-4">
                                <h4 className="text-orange-600 font-bold">Ritika Sharma</h4>
                                <p className="text-sm text-gray-500">BTech CSE, Batch 2024</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}

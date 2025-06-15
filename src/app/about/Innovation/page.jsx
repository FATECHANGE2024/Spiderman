import Navbar from "@/app/component/Navbar/Navbar";

export default function Innovation() {

    const pillars = [
        { emoji: "🚀", text: "Encourage startup mindset among students" },
        { emoji: "🔬", text: "Foster innovation and R&D culture" },
        { emoji: "🧑‍🏫", text: "Provide mentorship and expert guidance" },
        { emoji: "📈", text: "Facilitate funding and incubation support" },
        { emoji: "🌏", text: "Promote sustainable and scalable business ideas" },
    ];

    const features = [
        "Startup Incubation Centre",
        "Innovation Lab",
        "Mentorship by Industry Experts",
        "Workshops, Bootcamps & Webinars",
        "Startup Showcase Events",
        "Funding Support & Grant Assistance",
        "IPR & Patent Filing Support",
    ];

    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/Incubation.jpg"
                />
            </section>

            <section className="py-12 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center">LNCT Startup & Innovation Cell</h2>
                    <p className="text-center text-gray-700 mb-8">
                        We empower students to build, innovate, and lead the startups of tomorrow.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">Incubation Support</h3>
                            <p className="text-sm text-gray-600">
                                Dedicated space, mentorship, and early-stage support for student-led startups.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">Innovation Lab</h3>
                            <p className="text-sm text-gray-600">
                                Hands-on labs and workshops to prototype and test ideas.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">Funding Assistance</h3>
                            <p className="text-sm text-gray-600">
                                Access to grants, competitions, and investor connects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-400 text-white py-12 px-6 m-5 w-[80%] mx-auto rounded-2xl ">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Core Pillars of Innovation</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-600 rounded-xl shadow hover:shadow-lg transition text-lg flex items-start gap-3"
                            >
                                <span className="text-2xl">{pillar.emoji}</span>
                                <p className="text-left text-gray-200">{pillar.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-400 text-white py-12 px-6 w-[80%] mx-auto rounded-2xl m-5">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Key Features & Offerings</h2>
                    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="bg-gray-600 p-4 rounded-xl border-l-4 border-blue-500 hover:bg-gray-800 transition"
                            >
                                <span className="font-semibold text-gray-100">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </div>
    );
}
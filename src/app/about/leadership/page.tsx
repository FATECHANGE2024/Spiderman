import Navbar from "@/app/component/Navbar/Navbar";

export default function Leadership() {
    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/bg2.jpg"
                />
            </section>

            <section className="flex flex-col items-center mb-4 font-sans">

                {/* Chancellor */}
                <h1 className="text-2xl font-bold m-4">Chancellor</h1>
                <table className="w-[80%] mx-auto table-fixed border-black border rounded-md overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-black px-4 py-2 w-1/2 text-left">Designation</th>
                            <th className="border border-black px-4 py-2 w-1/2 text-left">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Chancellor (LNCT University)</td>
                            <td className="border border-black px-4 py-2">Shri Jay Narayan Chouksey</td>
                        </tr>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Chancellor (LNCT Vidyapeeth University)</td>
                            <td className="border border-black px-4 py-2">Smt. Poonam Chouksey</td>
                        </tr>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Chancellor (JNCT Professional University)</td>
                            <td className="border border-black px-4 py-2">Dr Anupam Chouksey</td>
                        </tr>
                    </tbody>
                </table>

                {/* OSD */}
                <h1 className="text-2xl font-bold m-4">Officer on Special Duty (OSD)</h1>
                <table className="w-[80%] mx-auto table-fixed border border-black rounded-md overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-black px-4 py-2 w-1/2 text-left">Designation</th>
                            <th className="border border-black px-4 py-2 w-1/2 text-left">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Group OSD</td>
                            <td className="border border-black px-4 py-2">Dr. SUNIL KUMAR SINGH</td>
                        </tr>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">OSD (LNCTS)</td>
                            <td className="border border-black px-4 py-2">Dr. AMITBODH UPADHYAYA</td>
                        </tr>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">OSD (LNCTE)</td>
                            <td className="border border-black px-4 py-2">Ms. Usha Singh</td>
                        </tr>
                    </tbody>
                </table>


                {/* Principal */}
                <h1 className="text-2xl font-bold m-4">Principal</h1>
                <table className="w-[80%] mx-auto table-fixed border border-black rounded-md overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-black px-4 py-2 w-1/2 text-left">Designation</th>
                            <th className="border border-black px-4 py-2 w-1/2 text-left">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Principal (LNCTS)</td>
                            <td className="border border-black px-4 py-2">Dr. SUNIL KUMAR SINGH</td>
                        </tr>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Principal (LNCTS)</td>
                            <td className="border border-black px-4 py-2">Dr. AMITBODH UPADHYAYA</td>
                        </tr>
                        <tr className="hover:bg-blue-100 transition duration-300">
                            <td className="border border-black px-4 py-2">Principal (LNCTE)</td>
                            <td className="border border-black px-4 py-2">Ms. Usha Singh</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </div>
    );
}

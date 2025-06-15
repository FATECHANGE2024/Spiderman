import Navbar from "@/app/component/Navbar/Navbar";

export default function IJNCT() {


    return (
        <div>
            <Navbar />
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/IJLNCT.jpg"
                />
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-20">
                <div className="w-[90%] mx-auto rounded-2xl bg-gray-200 p-10 ">
                    <h2 className="text-4xl font-bold text-center mb-4 text-orange-400">
                        International Journal of LNCT
                    </h2>
                    <p className="text-center text-black text-sm mb-8">
                        ISSN (Online): 2456-9895
                    </p>

                    <img
                        src="#" 
                        alt="International Journal Banner"
                        className="w-full rounded-lg mb-10"
                    />

                    <div className="space-y-6 text-lg text-black leading-relaxed">
                        <p>
                            Lakshmi Narain College of Technology (LNCT) group of colleges is one of the oldest and largest education groups in central India. Founded in 1994, LNCT Bhopal has the privilege of being the first private (self-financed) institute of Madhya Pradesh. International Journal of LNCT (IJLNCT) is published by LNCT.
                        </p>

                        <p>
                            The International Journal of LNCT (IJLNCT) is a peer-reviewed, open-access journal published in English. It provides a forum for engineers and researchers to publish empirical results relevant to both academia and industry. IJLNCT encourages the submission of original research, technology trend surveys, and analytical studies across a wide range of engineering disciplines.
                        </p>

                        <p>
                            Topics typically include the analysis of data and experience to assess new technologies, systems, and development practices. IJLNCT is a platform for frontier research in Computer Science, Electrical, Electronics, and Mechanical Engineering.
                        </p>

                        <p>
                            📅 <strong>Publication Schedule:</strong> The journal is published bimonthly (6 issues per year) in February, April, June, August, October, and December.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
}
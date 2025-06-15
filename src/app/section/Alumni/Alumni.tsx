"use client";
import React from "react";

export default function Alumni() {

    function alumniHover(e: React.MouseEvent<HTMLDivElement>) {
        console.log(1)
        const bg = (e.currentTarget as HTMLElement)!.querySelector(".alumniBg");
        const intro = (e.currentTarget as HTMLElement)!.querySelector(".alumniIntro");
        const info = (e.currentTarget as HTMLElement)!.querySelector(".alumniInfo");

        bg!.classList.remove("opacity-0");
        bg!.classList.add("opacity-50");
        intro!.classList.remove("-translate-y-0");
        intro!.classList.add("-translate-y-[100%]");
        info!.classList.remove("translate-y-[100%]");
        info!.classList.add("translate-y-0");
    }

    function alumniNoHover(e: React.MouseEvent<HTMLDivElement>) {
        console.log(2)
        const bg = (e.currentTarget as HTMLElement)!.querySelector(".alumniBg");
        const intro = (e.currentTarget as HTMLElement)!.querySelector(".alumniIntro");
        const info = (e.currentTarget as HTMLElement)!.querySelector(".alumniInfo");

        bg!.classList.remove("opacity-50");
        bg!.classList.add("opacity-0");
        intro!.classList.remove("-translate-y-[100%]");
        intro!.classList.add("-translate-y-0");
        info!.classList.remove("translate-y-0");
        info!.classList.add("translate-y-[100%]");
    }

    return (
        <section className="flex flex-col items-center">
            <div className="h-[80px] flex justify-center items-center text-center"><h1 className="text-4xl font-extrabold font-serifs">Notable Alumni</h1></div>

            <div className="w-[80vw] flex justify-center items-center my-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="overflow-hidden h-[250px] w-[250px] relative shadow-[0px_0px_5px_1px_black] flex-shrink-1 sm:w-[516px] sm:col-span-2" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni1.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover object" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">SHWETA KIRKIRE</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">SCIENTIST - ISRO AHMEDABAD</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Shweta Kirkire, a brilliant mind from LNCT&#39;S 2000 Batch&#40;EC&#41;, who now stands as a proud Scientist at ISRO&#39;s Ahmedabad center. Her contribution to the CHANDRAYAAN-3 Project illuminates India&#39;s space exploration endeavors!!</p>
                        </div>
                    </div>

                    <div className="overflow-hidden h-[250px] w-[250px] relative shadow-[0px_0px_5px_1px_black]" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni2.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">NAPENDRA KUMAR CHOUREY</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">PARA ATHLETE</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Napendra Kumar Chourey, an inspiring LNCT alumnus, is a para athlete who won a gold medal at the 14th National Para Canoe Championship 2021, showcasing excellence in sports and determination.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden h-[250px] w-[250px] relative shadow-[0px_0px_5px_1px_black]" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni3.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">RAHUL BHANDARI</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">PROJECT MANAGER - JIO</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Rahul Bhandari is a Project Manager at Jio. A CSE 2021 graduate, he earned the Spotlight Award for outstanding contributions and leadership in the tech industry.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden h-[250px] w-[250px] relative bg-amber-600 shadow-[0px_0px_5px_1px_black]" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni4.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">RAHUL PAREEK</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">LIEUTENANT INDIAN NAVY</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Rahul Pareek, an LNCTE Mechanical Engineering 2017 graduate, advanced to become a Naval Architect Officer in the Indian Navy after earning a postgraduate diploma in Naval Construction from IIT Delhi.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden h-[250px] w-[250px] relative shadow-[0px_0px_5px_1px_black]" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni5.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">SHRUTI JAYANT DESHMUKH</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">IAS OFFICER</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Srushti Jayant Deshmukh, a 2018 Chemical Engineering graduate from LNCT, achieved All India Rank 5 in the UPSC Civil Services Exam, becoming the top female candidate that year.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden h-[250px] w-[250px] relative shadow-[0px_0px_5px_1px_black]" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni6.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">TUSHINA RATNAM</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">SOFTWARE ANALYST - VODAFONE (IRELAND)</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Tushina Ratnam, an LNCT alumna, is a Software Analyst at Vodafone Ireland.  She earned a Master&#39;s in Information Systems from University College Dublin and has delivered expert lectures at LNCT.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden h-[250px] w-[250px] relative shadow-[0px_0px_5px_1px_black] flex-shrink-1 lg:w-[516px] lg:col-span-2" onMouseOver={(e) => alumniHover(e)} onMouseOut={(e) => alumniNoHover(e)}>
                        <img src="/alumni/alumni7.jpg" className="absolute top-0 left-0 h-[100%] w-[100%] object-cover" />
                        <div className="alumniBg absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-0"></div>
                        <div className="alumniIntro absolute top-0 left-0 h-[100%] w-[100%] -translate-y-0 transition-transform duration-300 ease-linear">
                            <div className="absolute bottom-3 left-3 transition-opacity duration-300">
                                <h1 className="text-white text-xl font-bold text-shadow-[0px_0px_8px_black]">MR. ANIS RAHMAN</h1>
                                <p className="text-white text-shadow-[0px_0px_8px_black]">DIRECTOR - MINISTRY OF COMMUNICATION (GOVT. OF INDIA)</p>
                            </div>
                        </div>
                        <div className="alumniInfo absolute top-0 left-0 h-[100%] w-[100%] grid place-content-center translate-y-[100%] transition-transform duration-300 ease-linear">
                            <p className="text-white text-center m-4">Anis Rehman, a 2001 Electronics & Communication graduate from LNCT, serves as Director in the Ministry of Communication, Government of India, exemplifying leadership in digital transformation and public service.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
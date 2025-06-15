"use client";
import Link from "next/link";
import React from "react";

export default function Campus() {

    function grow(e: React.MouseEvent<HTMLDivElement>) {
        const box = (e.currentTarget as HTMLElement)!;
        const content = box.querySelector(".contentBox");
        box.classList.add("grow-5");
        content!.classList.remove("invisible","opacity-0","translate-y-[100%]");
    }

    function normal(e: React.MouseEvent<HTMLDivElement>) {
        const box = (e.currentTarget as HTMLElement)!;
        const content = box.querySelector(".contentBox");
        box.classList.remove("grow-5");
        content!.classList.add("invisible","opacity-0","translate-y-[100%]");
    }

    return (
        <section>
            <div className="h-[80px] flex justify-center items-center text-center"><h1 className="text-4xl font-extrabold font-serifs">Discover Our Premier Institutions</h1></div>

            <div className="h-[400px] md:h-[calc(100vh-200px)] w-[100vw] flex my-6">
                
                <div className="bg-red-400 relative h-[100%] flex-1 overflow-hidden transition-all duration-300 ease-in-out" onMouseOver={e => grow(e)} onMouseOut={e => normal(e)}>
                    <img src="/campusSection/campus1.jpg" className="h-full w-full object-cover"/>
                    <div className="contentBox absolute bottom-0 m-2 p-2 bg-black text-white invisible opacity-0 transition-all duration-300 translate-y-[100%]">
                        <h1 className="text-[20px] font-bold">Lakshmi Narain College of Technology &#40;LNCT&#41;, Bhopal</h1>
                        <p>LNCT Bhopal is the flagship institution of the LNCT Group and one of the most prestigious private engineering colleges in Central India.</p>
                    </div>
                </div>

                <div className="bg-blue-400 relative h-[100%] flex-1 overflow-hidden transition-all duration-300 ease-in-out" onMouseOver={e => grow(e)} onMouseOut={e => normal(e)}>
                    <img src="/campusSection/campus2.jpg" className="h-full w-full object-cover"/>
                    <div className="contentBox absolute bottom-0 m-2 p-2 bg-black text-white invisible opacity-0 transition-all duration-300 translate-y-[100%]">
                        <h1 className="text-[20px] font-bold">Lakshmi Narain College of Technology & Science &#40;LNCTS&#41;, Bhopal</h1>
                        <p>LNCTS Bhopal is a leading institute focused on technical and scientific education with an emphasis on innovation and research.</p>
                    </div>
                </div>

                <div className="bg-orange-400 relative h-[100%] flex-1 overflow-hidden transition-all duration-300 ease-in-out" onMouseOver={e => grow(e)} onMouseOut={e => normal(e)}>
                    <img src="/campusSection/campus3.jpg" className="h-full w-full object-cover"/>
                    <div className="contentBox absolute bottom-0 m-2 p-2 bg-black text-white invisible opacity-0 transition-all duration-300 translate-y-[100%]">
                        <h1 className="text-[20px] font-bold">Lakshmi Narain College of Technology Excellence &#41;LNCTE&#41;, Bhopal</h1>
                        <p>LNCTE Bhopal is synonymous with academic rigor and technical excellence. Founded in 2007, the institution provides a dynamic learning environment for budding engineers.</p>
                    </div>
                </div>

                <div className="bg-yellow-400 relative h-[100%] flex-1 overflow-hidden transition-all duration-300 ease-in-out" onMouseOver={e => grow(e)} onMouseOut={e => normal(e)}>
                    <img src="/campusSection/campus4.jpg" className="h-full w-full object-cover"/>
                    <div className="contentBox absolute bottom-0 m-2 p-2 bg-black text-white invisible opacity-0 transition-all duration-300 translate-y-[100%]">
                        <h1 className="text-[20px] font-bold">LNCT University &#40;LNCTU&#41;, Bhopal</h1>
                        <p>LNCT University is a multidisciplinary private university offering a wide range of undergraduate, postgraduate, and doctoral programs.</p>
                    </div>
                </div>

                <div className="bg-purple-400 relative h-[100%] flex-1 overflow-hidden transition-all duration-300 ease-in-out" onMouseOver={e => grow(e)} onMouseOut={e => normal(e)}>
                    <img src="/campusSection/campus5.jpg" className="h-full w-full object-cover"/>
                    <div className="contentBox absolute bottom-0 m-2 p-2 bg-black text-white invisible opacity-0 transition-all duration-300 translate-y-[100%]">
                        <h1 className="text-[20px] font-bold">LNCT Indore</h1>
                        <p>LNCT Indore extends the legacy of LNCT&#39;s excellence to the education hub of Madhya Pradesh. The institution offers a blend of engineering, management, and pharmacy programs.</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-center my-6"><Link href="/" className="bg-orange-400 text-2xl py-2 px-4 rounded-xl text-white hover:text-orange-400 hover:bg-white hover:border-1 hover:border-orange-400 hover:border-solid">View All Institutes</Link></div>
        </section>
    )
}
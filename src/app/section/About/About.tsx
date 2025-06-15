"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [deadCounter, setDeadCounter] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.3,
    });

    useEffect(() => {
        if (!inView || deadCounter) return;

        const fps = 60;
        const duration = 1000;
        const totalFrames = Math.round((duration / 1000) * fps);

        let frame = 0;

        const easeOutQuad = (t: number) => t * (2 - t);

        const interval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;

            const newVal1 = 1.12 * easeOutQuad(progress);
            const newVal2 = 171 * easeOutQuad(progress);
            const newVal3 = 500 * easeOutQuad(progress);
            const newVal4 = 191 * easeOutQuad(progress);

            setValue1(parseFloat(newVal1.toFixed(2)));
            setValue2(Math.round(newVal2));
            setValue3(Math.round(newVal3));
            setValue4(Math.round(newVal4));


            if (frame >= totalFrames) {
                clearInterval(interval);
                setDeadCounter(true);
            }
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [inView, deadCounter]);

    return (
        <section className="bg-black min-h-[calc(100vh-140px)]">
            <div className="h-15"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="text-white m-10">
                    <div><h1 className="font-extrabold text-6xl underline decoration-2 underline-offset-8">About Us</h1></div>
                    <p className="mt-4">Born in semi urban city of Bilaspur &#40;C.G.&#41;,Shri Jai Narayan Chouksey, completed his post graduation from Robertson College, Jabalpur. He established Lakshmi Narain College of Technology &#40;LNCT&#41;, Bhopal in 1994 under the banner of H.K. Kalchuri Education Trust. Since then, With the commitment of &#34;Working Towards Being the Best, LNCT Group has achieved many milestones. The institute is successfully meeting the objective of producing skilled manpower of the highest quality who is able to cope up with the challenges of ever evolving industrial needs of the country. The Alumni of LNCT Group are working all across the Globe in Big Multi National Companies.</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-white h-[300px] w-[500px] m-10 relative">
                        <img src="/campusSection/campus1.jpg" className="h-full w-full object-cover"></img>
                        <div className="absolute top-0 left-0 h-[20%] w-full bg-linear-to-b from-black to-white/[0]"></div>
                        <div className="absolute bottom-0 left-0 h-[20%] w-full bg-linear-to-t from-black to-white/[0]"></div>
                        <div className="absolute top-0 left-0 h-full w-[20%] bg-linear-to-r from-black to-white/[0]"></div>
                        <div className="absolute top-0 right-0 h-full w-[20%] bg-linear-to-l from-black to-white/[0]"></div>
                        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
                    </div>
                </div>
            </div>

            <div ref={ref} className="w-[80%] justify-self-center flex flex-wrap gap-4 justify-center">
                <div className="h-[200px] w-[250px] flex flex-col justify-center items-center gap-4">
                    <p className="text-white font-extrabold text-6xl">₹{value1.toFixed(2)}Cr.</p>
                    <p className="text-orange-400 font-bold text-xl">Highest Package</p>
                </div>
                <div className="h-[200px] w-[250px] flex flex-col justify-center items-center gap-4">
                    <p className="text-white font-extrabold text-6xl">{value2}</p>
                    <p className="text-orange-400 font-bold text-xl">NIRF All India Rank</p>
                </div>
                <div className="h-[200px] w-[250px] flex flex-col justify-center items-center gap-4">
                    <p className="text-white font-extrabold text-6xl">{value3}+</p>
                    <p className="text-orange-400 font-bold text-xl">Top Recruiters</p>
                </div>
                <div className="h-[200px] w-[250px] flex flex-col justify-center items-center gap-4">
                    <p className="text-white font-extrabold text-6xl">{value4}+</p>
                    <p className="text-orange-400 font-bold text-xl">Patent Publications</p>
                </div>
            </div>
        </section>
    )
}
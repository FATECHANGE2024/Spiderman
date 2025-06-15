"use client";
import React, { useEffect, useState, useRef } from "react";


export default function Ranking() {

    // WIDTH FOR imagesBox

    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [dimensionsGbox, setDimensionsGbox] = useState({ width: 0, height: 0 });



    useEffect(() => {
        const element = galleryRef.current;
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect) {
                    setDimensionsGbox({
                        height: entry.contentRect.height,
                        width: ((window.innerWidth >= 1024) ? entry.contentRect.width : 3 * entry.contentRect.width),
                    });
                }
            }
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    // WIDTH FOR imagesBox2


    // Slider

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                const slides = (window.innerWidth >= 1024) ? document.querySelectorAll(".imagesBox") : document.querySelectorAll(".imageElement");
                const totalSlides = slides.length;
                return (prev + 1) % totalSlides;
            });
        }, 4000);

        return () => clearInterval(interval);

    }, [])

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            const slides = document.querySelectorAll(".imagesBox");
            const slider = document.querySelector(".imagesBoxContainer") as HTMLElement;
            const sliderWidth = (document.querySelector(".imagesBox") as HTMLElement).offsetWidth;
            const totalSlides = slides!.length;
            setIndex(prevIndex => prevIndex%totalSlides);
            slider.style.transform = `translateX(-${index * sliderWidth}px)`;
        } else {
            console.log(1);
            const slides = document.querySelectorAll(".imageElement");
            const slider = document.querySelector(".imagesBoxContainer") as HTMLElement;
            const sliderWidth = (document.querySelector(".imageElement") as HTMLElement).offsetWidth;
            const totalSlides = slides!.length;
            setIndex(prevIndex => prevIndex%totalSlides);
            slider.style.transform = `translateX(-${index * sliderWidth}px)`;
        }
    }, [index])

    // Slider2
    
    return (
        <section className="h-[1100px] bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: 'url(/media/recognitionBackground.jpg)' }}>
            <div className="h-20"></div>


            <div className="bg-black w-[90%] lg:w-[80%] rounded-[0_18px_18px_0] py-4 flex flex-col justify-center items-center gap-4 text-center">

                <h1 className="text-white text-4xl font-extrabold">Rankings and Accrediations</h1>
                <div className="bg-white w-[80%] lg:w-[80%] h-[300px] my-4 rounded-2xl flex justify-center items-center">
                    <div><p onClick={() => { setIndex(index - 1 + (window.innerWidth >= 1024 ? document.querySelectorAll(".imagesBox").length : document.querySelectorAll(".imageElement").length)) }} className="bg-black text-3xl text-white h-[40px] w-[40px] flex justify-center items-center rounded-xl shadow-[0_0_1px_1px_white] -translate-x-5">&#60;</p></div>
                    <div ref={galleryRef} className="galleryBox w-[240px] h-[240px] lg:w-[80%] overflow-hidden">

                        <div className="imagesBoxContainer flex transition-transform duration-300" style={{ height: dimensionsGbox.height, width: (3 * dimensionsGbox.width) }}>

                            <div className="imagesBox flex" style={{ height: dimensionsGbox.height, width: dimensionsGbox.width }}>
                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking1.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>

                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking2.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>

                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking3.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>
                            </div>

                            <div className="imagesBox flex" style={{ height: dimensionsGbox.height, width: dimensionsGbox.width }}>
                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking4.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>

                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking5.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>

                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking6.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>
                            </div>

                            <div className="imagesBox flex" style={{ height: dimensionsGbox.height, width: dimensionsGbox.width }}>
                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking7.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>

                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking8.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>

                                <div className="imageElement h-full flex-1 shadow-[0_0_1px_1px_black_inset]">
                                    <div className="h-[50%] w-full flex justify-center items-center"><img src="/ranking/ranking9.png" className="h-full" /></div>
                                    <div><p className="text-[13px] text-center m-2">LNCT Bhopal is accredited by the National Board of Accreditation (NBA) for several of its core engineering programs.</p></div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div onClick={() => { setIndex(index + 1); }}><p className="bg-black  text-3xl text-white h-[40px] w-[40px] flex justify-center items-center rounded-xl shadow-[0_0_1px_1px_white] translate-x-5">&#62;</p></div>
                </div>

            </div>


        </section>
    )
}
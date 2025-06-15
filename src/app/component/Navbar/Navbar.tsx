"use client";


import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [headerBg, setHeaderBg] = useState(false);

    // SET HEADER BACKGROUND COLOR
    useEffect(() => {
        setHeaderBg(true);
        const header = document.getElementById("header");
        header!.classList.add("bg-linear-to-b", "from-black", "to-black/[0]");
    }, [])

    // HEADER BACKGROUND COLOR TRANSITION ON HOME PAGE
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const header = document.getElementById("header");

            if ((window.scrollY === 0) && headerBg) {
                header!.classList.remove("bg-black");
                header!.classList.add("bg-linear-to-b", "from-black", "to-black/[0]");
            }

            if (window.scrollY > 0) {
                header!.classList.remove("bg-linear-to-b", "from-black", "to-black/[0]");
                header!.classList.add("bg-black");
            }
        })
    })

    // DISPLAY SUBMENU ON HOVER
    function onMouseOver(e: React.MouseEvent<HTMLDivElement>) {
        const uLine = (e.currentTarget as HTMLElement)!.querySelector(".uLine");
        uLine!.classList.remove("w-0");
        uLine!.classList.add("w-full");
        if (window.innerWidth >= 1024) {
            // eventTarget to HTMLElement
            const subMenu = (e.currentTarget as HTMLElement)!.querySelector(".subMenu");
            subMenu?.classList.remove("lg:hidden");
            subMenu?.classList.add("lg:flex");
        }
    }

    function onMouseOut(e: React.MouseEvent<HTMLDivElement>) {
        const uLine = (e.currentTarget as HTMLElement)!.querySelector(".uLine");
        uLine!.classList.remove("w-full");
        uLine!.classList.add("w-0");
        if (window.innerWidth >= 1024) {
            const uLine = (e.currentTarget as HTMLElement)!.querySelector(".uLine");
            uLine!.classList.remove("w-full");
            uLine!.classList.add("w-0");
            const subMenu = (e.currentTarget as HTMLElement)!.querySelector(".subMenu");
            subMenu?.classList.remove("lg:flex");
            subMenu?.classList.add("lg:hidden");
        }
    }

    // OPEN MENU IN MOBILE

    function openMobileMenu() {
        console.log("Menu opn");
        const menuBar = document.querySelector(".menuBar");
        menuBar!.classList.remove("-translate-x-[100%]");
        menuBar!.classList.add("translate-x-0");
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        console.log("Menu close");
        const menuBar = document.querySelector(".menuBar");
        menuBar!.classList.remove("translate-x-0");
        menuBar!.classList.add("-translate-x-[100%]");
        document.body.style.overflow = "";
    }

    // MOBILE SUBMENU ANIMATION

    function mobileNavClick(e: React.MouseEvent<HTMLDivElement>) {
        if (window.innerWidth < 1024) {
            console.log("Open")
            const nav = document.querySelector(".navBar");
            const subMenu = (e.currentTarget as HTMLElement)!.querySelector(".subMenu");
            if (subMenu) {
                nav!.classList.remove("left-0");
                nav!.classList.add("-left-[100%]");
                subMenu!.classList.remove("left-[100%]");
                subMenu!.classList.add("left-0");
            }
        }
    }

    function mobileNavClose(e: React.MouseEvent<HTMLDivElement>) {
        console.log("Close")
        e.stopPropagation();
        const nav = document.querySelector(".navBar");
        const subMenu = (e.currentTarget as HTMLElement)!.closest(".subMenu");
        if (subMenu && nav) {
            subMenu!.classList.remove("left-0");
            subMenu!.classList.add("left-[100%]");
            nav!.classList.remove("-left-[100%]");
            nav!.classList.add("left-0");
        }
    }


    return (
        <header id="header" className="fixed top-0 h-[140px] w-[100%] font-body transition-colors duration-500 ease-in-out z-[9999]">
            <nav className="fixed w-full">
                <div className="flex justify-between items-center mt-6 mx-6">
                    <div className="ml-4"><img src="/media/logo2.png" className="h-[50px]" /></div>
                    <div className="mr-4">
                        <ul className="hidden lg:flex lg:gap-2 lg:text-white">
                            <li className="bg-orange-400 px-4 py-2 rounded-3xl cursor-pointer hover:bg-orange-500">Notification</li>
                            <li className="bg-orange-400 px-4 py-2 rounded-3xl cursor-pointer hover:bg-orange-500">Admission</li>
                            <li className="bg-orange-400 px-4 py-2 rounded-3xl cursor-pointer hover:bg-orange-500">Login</li>
                        </ul>
                    </div>
                    <div onClick={() => openMobileMenu()} className="lg:hidden flex flex-col justify-center items-center gap-3 h-[60px] w-[60px] bg-orange-400">
                        <hr className="border-2 border-solid border-white w-[80%]" />
                        <hr className="border-2 border-solid border-white w-[80%]" />
                        <hr className="border-2 border-solid border-white w-[80%]" />
                    </div>
                </div>
                <div className="menuBar overflow-hidden h-full w-[100%] fixed top-0 -left-0 text-white bg-black -translate-x-[100%] lg:bg-black/[0] lg:static lg:bloc lg:mt-6 lg:h-auto lg:w-auto lg:translate-x-0 transition-transform duration-400 lg:overflow-visible">
                    <div className="h-[80px] w-[100%] flex justify-end items-center lg:hidden">
                        <div className="relative bg-white h-[60px] w-[60px] mr-3 lg:hidden" onClick={() => closeMobileMenu()}>
                            <hr className="border-2 border-solid border-black w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                            <hr className="border-2 border-solid border-black w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                        </div>
                    </div>
                    <div className="navBar absolute top-[80px] left-0 text-2xl flex flex-col h-[calc(100vh-80px)] w-[100%] font-bold lg:text-[16px] lg:flex-row lg:justify-end lg:gap-10 lg:mx-10 lg:static lg:ml-0 lg:h-auto lg:w-auto lg:font-normal transition-all duration-300 ease-linear">
                        {/* HOME */}
                        <div className="m-4 lg:m-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}><Link href="/">Home</Link>
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* ABOUT */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 relative" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)} onClick={(e) => mobileNavClick(e)}>About
                            <hr className="uLine w-0 transition-all duration-400" />

                            {/* <div className="subMenu lg:bg-blue-400 lg:w-[600px] lg:h-[300px] lg:hidden lg:absolute lg:top-full"></div> */}

                            <div className="subMenu z-50 overflow-y-scroll h-[calc(100vh-80px)] w-[100%] fixed top-[80px] left-[100%] text-white lg:hidden lg:text-black lg:w-[600px] lg:h-[300px] lg:absolute lg:left-0 lg:top-full lg:translate-x-0 lg:overflow-visible transition-all duration-300 ease-linear">
                                <div className="h-[100%] lg:bg-white lg:grid lg:grid-cols-2 lg:h-[390px] lg:mt-2 lg:w-auto lg:translate-x-0">
                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal">
                                        <div className="m-4 ml-8 lg:ml-4 text-[16px] lg:hidden" onClick={(e) => mobileNavClose(e)}>&#60; BACK</div>
                                        <Link className="hover:bg-black hover:text-white" href="/about/overview">Overview</Link>
                                        <Link className="hover:bg-black hover:text-white" href="/about/leadership">Leadership</Link>
                                        <Link className="hover:bg-black hover:text-white" href="#">Eminent Faculty</Link>
                                        <Link className="hover:bg-black hover:text-white" href="#">Infrastructure</Link>
                                        <Link className="hover:bg-black hover:text-white" href="#">Trust</Link>
                                        <Link className="hover:bg-black hover:text-white" href="#">Credo</Link>
                                        <Link className="hover:bg-black hover:text-white" href="/about/committee">Committee</Link>
                                        <Link className="hover:bg-black hover:text-white" href="/about/Innovation">Innovation and Startups</Link>
                                        <Link className="hover:bg-black hover:text-white" href="/about/IJNCT">International Joural</Link>
                                        <Link className="hover:bg-black hover:text-white" href="/about/Grievance">Greievance Redressal</Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* PROGRAMS */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Programs
                            <hr className="uLine w-0 transition-all duration-400" />

                            <div className="subMenu w-[100%] absolute text-black top-[80px] left-[100%] lg:hidden lg:text-black lg:w-[600px] lg:h-[300px] lg:absolute lg:translate-x-0">
                                <div className="translate-x-[100%] lg:grid lg:grid-cols-2 bg-white lg:h-[390px] lg:mt-4 lg:w-auto lg:translate-x-0">
                                    <div className="flex flex-col lg:justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 lg:my-4 lg:h-auto lg:gap-0">
                                        <Link className="" href="#">Program 1</Link>
                                        <Link href="#">Program 2</Link>
                                        <Link href="#">Program 3</Link>
                                        <Link href="#">Program 4</Link>
                                    </div>
                                    <div className="hidden lg:block bg-black h-full w-100"></div>
                                </div>
                            </div>

                        </div>
                        {/* DEPARTMENT */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Department
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* PLACEMENT */}
                        <Link href="/tnp" className="cursor-pointer">
                            <div className="mx-4 mb-4 lg:mx-0 lg:mb-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Training & Placements
                                <hr className="uLine w-0 transition-all duration-400" />
                            </div>
                        </Link>
                        {/* RANKING */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Ranking
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* ALUMNI */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Alumni
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* MORE SECRTION */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Explore More
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* CONTACT */}
                        <Link href="/ContactUs" className="cursor-pointer">
                            <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 " onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)} >Contact Us
                                <hr className="uLine w-0 transition-all duration-400" />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>

        </header>
    )
}
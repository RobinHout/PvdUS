"use client";
import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import "./headerStyle.css";
import logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropdown";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // return (
    //     <>
    //         <header id={scrolled ? "scrolled" : ""} className="header">
    //             <Link className="logo" href="/">
    //                 <Image src={logo} alt="Logo van PvdUS" priority />
    //             </Link>
    //             <Link href="/">
    //                 <h1 className="titel">Partij voor de Utrechtse Student</h1>
    //             </Link>
    //             <Dropdown />
    //         </header>
    //     </>
    // );
    return (
        <header
            className={`fixed top-0 left-0 w-full flex items-center justify-between
                    px-5 py-2.5 transition-colors duration-500 ease-in-out
                    z-[1000] ${scrolled ? "bg-[#415587]" : "bg-transparent"}`}
        >
            {/* Logo */}
            <Link href="/" className="w-[70px] h-auto">
                <Image
                    src={logo}
                    alt="Logo van PvdUS"
                    priority
                    className="w-[70px] h-auto"
                />
            </Link>

            {/* Titel */}
            <Link href="/home">
                <h1
                    className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-[anton]
text-[#f280cb] text-center transition-colors duration-200 ease-in-out
py-[15px] px-5"
                >
                    Partij voor de Utrechtse Student
                </h1>
            </Link>

            {/* Dropdown */}
            <Dropdown />
        </header>
    );
};

export default Header;

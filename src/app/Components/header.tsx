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

    return (
        <>
            <header id={scrolled ? "scrolled" : ""} className="header">
                <Link className="logo" href="/">
                    <Image src={logo} alt="Logo van PvdUS" priority />
                </Link>
                <a href="home">
                    <h1 className="titel">Partij voor de Utrechtse Student</h1>
                </a>
                <Dropdown />
            </header>
        </>
    );
};

export default Header;

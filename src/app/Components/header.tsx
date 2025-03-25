"use client";
import { useEffect, useState } from "react";
import "./headerStyle.css";
import logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                id={scrolled ? "scrolled" : ""}
                className={scrolled ? "header" : "headerNiks"}
            >
                <Link className="logo" href="/">
                    <Image src={logo} alt="Logo van PvdUS" priority />
                </Link>
                <a href="home">
                    <h1 className="titel">Partij voor de Utrechtse Student</h1>
                </a>
                <div>
                    <a
                        href=""
                        className="knop"
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(!menuOpen);
                        }}
                        aria-label="menuButton"
                    >
                        <i className="fa fa-bars" id="bars"></i>
                    </a>
                </div>
                <nav id="menu" className={menuOpen ? "openMenu" : "menu"}>
                    <ul>
                        <li>
                            <Link href="/">Homepagina</Link>
                        </li>
                        <li>
                            <Link href="#">Fractie 2024-2025</Link>
                        </li>
                        <li>
                            <Link href="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="#">Speerpunten & initiatieven</Link>
                        </li>
                        <li>
                            <Link href="#">Universiteitsraad</Link>
                        </li>
                        <li>
                            <Link href="#">Word lid!</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

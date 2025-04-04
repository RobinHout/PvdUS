"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./headerStyle.css";
import logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);

    const pathname = usePathname();
    const isHomePage = pathname === "/";
    console.log(hideHeader);

    // const handleScroll = () => {
    //     if (window.scrollY > 50 && window.scrollY < 2000) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowBottom = window.innerHeight + scrollY;
            const pageHeight = document.body.offsetHeight;

            // Set scrolled flag
            if (scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Hide header at the bottom
            if (isHomePage) {
                if (windowBottom >= pageHeight) {
                    setHideHeader(true);
                    console.log(windowBottom + "sdf" + pageHeight);
                } else {
                    setHideHeader(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (hideHeader) return null;
    return (
        <>
            <header
                id={scrolled ? "scrolled" : isHomePage ? "headerNiks" : ""}
                className="header"
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
                            <Link href="/NieuweFractie">Fractie 2025-2026</Link>
                        </li>
                        <li>
                            <Link href="/Fractie">Fractie 2024-2025</Link>
                        </li>
                        <li>
                            <Link href="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/Speerpunten">
                                Speerpunten & initiatieven
                            </Link>
                        </li>
                        <li>
                            <Link href="/Universiteitsraad">
                                Universiteitsraad
                            </Link>
                        </li>
                        <li>
                            <Link href="#">Word lid!</Link>
                        </li>
                        <li>
                            <Link href="/OudeFracties">Oude fracties</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

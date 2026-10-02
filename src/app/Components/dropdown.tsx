"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
    { href: "/", label: "Homepagina" },
    { href: "/NieuweFractie", label: "Fractie 2026-2027" },
    { href: "/OudeFracties", label: "Oude fracties" },
    { href: "/Speerpunten", label: "Speerpunten & initiatieven" },
    { href: "/Universiteitsraad", label: "Universiteitsraad" },
    { href: "/Contact", label: "Contact" },
    { href: "/WordLid", label: "Meld je aan!" },
];

const isActivePath = (pathname: string, href: string) => {
    if (href === "/") {
        return pathname === href;
    }

    return pathname.startsWith(href);
};

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handlePointerDown = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className="relative flex items-center">
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="site-navigation"
                aria-label={isOpen ? "Sluit menu" : "Open menu"}
                onClick={() => setIsOpen((open) => !open)}
                className="group flex items-center rounded-md border border-white/15 bg-[#415587]/88 px-3 py-2 text-white/88 shadow-[0_10px_24px_rgba(18,31,59,0.18)] backdrop-blur-md transition duration-200 hover:border-white/30 hover:bg-[#415587] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#415587]"
            >
                <span className="relative flex h-5 w-6 flex-col justify-between">
                    <span
                        className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                            isOpen ? "translate-y-[9px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-full rounded-full bg-current transition duration-200 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                            isOpen ? "-translate-y-[9px] -rotate-45" : ""
                        }`}
                    />
                </span>
            </button>

            <div
                id="site-navigation"
                className={`absolute right-0 top-full mt-3 w-[min(19rem,calc(100vw-1.5rem))] origin-top-right rounded-xl border border-slate-200/70 bg-white/96 p-2 text-slate-900 shadow-[0_20px_45px_rgba(18,31,59,0.18)] backdrop-blur-xl transition-all duration-200 ${
                    isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-2 opacity-0"
                }`}
            >
                <div className="grid gap-1">
                    {navigationItems.map((item) => {
                        const active = isActivePath(pathname, item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                aria-current={active ? "page" : undefined}
                                className={`rounded-lg border px-4 py-3 text-sm transition duration-200 ${
                                    active
                                        ? "border-[#415587]/18 bg-[#415587]/8 text-[#24314d]"
                                        : "border-transparent bg-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <span className="block font-medium tracking-[0.01em]">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

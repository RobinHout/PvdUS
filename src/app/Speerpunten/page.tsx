"use client";

import { useState } from "react";
import TekstBlok from "../Components/tekstBlok";
import { speerpunten } from "./speerpuntenData";

type Speerpunt = {
    id: number;
    titel: string;
    tekst: string;
    meerWeten?: string;
};

function Chevron({ open }: { open: boolean }) {
    return (
        <svg
            className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function Speerpunten() {
    // Houdt alleen bij welke "Meer weten" open staat (optioneel: meerdere tegelijk kan ook)
    const [openMeerWetenId, setOpenMeerWetenId] = useState<number | null>(null);

    const toggleMeerWeten = (id: number) => {
        setOpenMeerWetenId((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <TekstBlok
                titel="Standpunten"
                tekst={`Al meer dan 19 jaar vertegenwoordigt de PvdUS de belangen van actieve studenten in Utrecht.
Want studeren is zoveel meer dan alleen in de boeken duiken. Je studententijd is een unieke periode waarin je niet alleen academische kennis opdoet, maar ook jezelf leert kennen, nieuwe ervaringen opdoet en jezelf ontwikkelt – binnen én buiten de collegezaal. Of je nu actief bent bij een vereniging, je inzet voor medezeggenschap of op zoek bent naar balans tussen studie en relevante ervaring opdoen: de stem van de actieve student verdient een plek aan tafel. En dáár maakt de PvdUS zich hard voor.`}
            />

            <section className="bg-slate-50">
                <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                            Speerpunten
                        </h1>
                    </div>

                    <div className="space-y-4">
                        {(speerpunten as Speerpunt[]).map((s) => {
                            const hasMeerWeten = Boolean(s.meerWeten?.trim());
                            const isMeerWetenOpen = openMeerWetenId === s.id;

                            return (
                                <div
                                    key={s.id}
                                    className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                                >
                                    {/* Titel + hoofdtekst altijd zichtbaar */}
                                    <div className="p-5">
                                        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                                            {s.titel}
                                        </h2>

                                        <p className="mt-3 leading-relaxed text-slate-700">
                                            {s.tekst}
                                        </p>

                                        {/* Alleen Meer weten uitklapbaar */}
                                        {hasMeerWeten ? (
                                            <div className="mt-5">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleMeerWeten(s.id)
                                                    }
                                                    aria-expanded={
                                                        isMeerWetenOpen
                                                    }
                                                    className="flex w-full items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3 text-left transition hover:bg-slate-100"
                                                >
                                                    <div>
                                                        <div className="text-sm font-semibold text-slate-900">
                                                            Meer weten
                                                        </div>
                                                        <div className="mt-0.5 text-xs text-slate-600">
                                                            {isMeerWetenOpen
                                                                ? "Klik om te sluiten"
                                                                : "Klik om te openen"}
                                                        </div>
                                                    </div>

                                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                                                        <Chevron
                                                            open={
                                                                isMeerWetenOpen
                                                            }
                                                        />
                                                    </div>
                                                </button>

                                                <div
                                                    className={`grid overflow-hidden transition-all duration-300 ${
                                                        isMeerWetenOpen
                                                            ? "grid-rows-[1fr] opacity-100"
                                                            : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                                >
                                                    <div className="min-h-0">
                                                        <div className="mt-3 rounded-xl border border-slate-100 bg-white p-4">
                                                            <p className="text-sm leading-relaxed text-slate-700">
                                                                {s.meerWeten}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

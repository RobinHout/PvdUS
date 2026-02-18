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
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
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
                        <p className="mt-2 text-slate-600">
                            Klik op een onderwerp om meer te lezen.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(speerpunten as Speerpunt[]).map((s) => {
                            const isOpen = openId === s.id;

                            return (
                                <div
                                    key={s.id}
                                    className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(s.id)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                                    >
                                        <div>
                                            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                                                {s.titel}
                                            </h2>
                                            <p className="mt-1 text-sm text-slate-500">
                                                {isOpen
                                                    ? "Klik om te sluiten"
                                                    : "Klik om te openen"}
                                            </p>
                                        </div>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                                            <Chevron open={isOpen} />
                                        </div>
                                    </button>

                                    <div
                                        className={`grid overflow-hidden transition-all duration-300 ${
                                            isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="min-h-0">
                                            <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                                                <p className="leading-relaxed text-slate-700">
                                                    {s.tekst}
                                                </p>

                                                {s.meerWeten?.trim() ? (
                                                    <div className="mt-4 rounded-xl bg-slate-50 p-4">
                                                        <div className="text-sm font-semibold text-slate-900">
                                                            Meer weten
                                                        </div>
                                                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                                                            {s.meerWeten}
                                                        </p>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
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

"use client";
import TekstBlok from "../Components/tekstBlok";
import { useState } from "react";
import { speerpunten } from "./speerpuntenData";

export default function Speerpunten() {
    const [openIndex, setOpenIndex] = useState(10);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? 10 : index);
    };

    return (
        <>
            <TekstBlok
                titel="Standpunten"
                tekst={`Al meer dan 18 jaar vertegenwoordigt de PvdUS de belangen van actieve studenten in Utrecht.
Want studeren is zoveel meer dan alleen in de boeken duiken. Je studententijd is een unieke periode waarin je niet alleen academische kennis opdoet, maar ook jezelf leert kennen, nieuwe ervaringen opdoet en jezelf ontwikkelt – binnen én buiten de collegezaal. Of je nu actief bent bij een vereniging, je inzet voor medezeggenschap of op zoek bent naar balans tussen studie en relevante ervaring opdoen: de stem van de actieve student verdient een plek aan tafel. En dáár maakt de PvdUS zich hard voor.`}
            ></TekstBlok>
            <div className="space-y-4 p-4 bg-white mx-auto shadow-md">
                {speerpunten.map((speerpunt) => (
                    <div
                        key={speerpunt.id}
                        className="bg-white shadow-md rounded-lg p-4 transition duration-200 hover:shadow-lg w-full sm:w-1/2 mx-auto"
                    >
                        <h2
                            className="cursor-pointer font-semibold text-xl text-gray-800 hover:text-blue-600"
                            onClick={() => handleClick(speerpunt.id)}
                        >
                            {speerpunt.titel}
                        </h2>
                        {openIndex === speerpunt.id && (
                            <p className="mt-2 text-gray-700">
                                {speerpunt.tekst}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

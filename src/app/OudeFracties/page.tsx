import TekstBlok from "../Components/tekstBlok";
// import Image from "next/image";
import { oudeFracties } from "./dataOudeFracties";

const jaartallen = [
    // "2025 - 2026",
    // "2024 - 2025",
    "2023 - 2024",
    "2022 - 2023",
    "2021 - 2022",
    "2020 - 2021",
    "2019 - 2020",
    "2018 - 2019",
    "2017 - 2018",
    "2016 - 2017",
    "2015 - 2016",
    "2014 - 2015",
    "2013 - 2014",
    "2012 - 2013",
    "2011 - 2012",
];

export default function OudeFracties() {
    return (
        <>
            <TekstBlok titel="Oude Fracties" tekst=""></TekstBlok>
            {oudeFracties.map((groep, groepIndex) => (
                <div key={groepIndex} className="bg-white py-6 sm:py-12">
                    <div className="mx-auto grid max-w-7xl gap-1 px-4 lg:px-6 xl:grid-cols-3">
                        {/* <div className=""> */}
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                                {jaartallen[groepIndex]}
                            </h2>
                        </div>
                        <ul
                            role="list"
                            // className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                            className=""
                        >
                            {groep.map((person, persoonIndex) => (
                                <li key={persoonIndex}>
                                    <div className="flex items-center gap-x-6 pb-1.5">
                                        <div>
                                            <h3 className="text-xl/6 font-semibold tracking-tight text-gray-900">
                                                {person.name}
                                            </h3>
                                            <p className="text-sm/6 font-semibold text-[#415587]">
                                                {person.role}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}

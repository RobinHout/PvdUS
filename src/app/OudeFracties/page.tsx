import TekstBlok from "../Components/tekstBlok";
// import Image from "next/image";
import { oudeFracties } from "./dataOudeFracties";

export default function OudeFracties() {
    return (
        <>
            <TekstBlok titel="Oude Fracties" tekst=""></TekstBlok>
            {oudeFracties.map((groep, groepIndex) => (
                <div key={groepIndex} className="bg-white py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                                {groepIndex}
                            </h2>
                        </div>
                        <ul
                            role="list"
                            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                        >
                            {groep.map((person, persoonIndex) => (
                                <li key={persoonIndex}>
                                    <div className="flex items-center gap-x-6">
                                        {/* <Image
                                            alt=""
                                            src={person.imageUrl}
                                            className="size-16 rounded-full object-cover"
                                        /> */}
                                        <div>
                                            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                                                {person.name}
                                            </h3>
                                            <p className="text-sm/6 font-semibold text-indigo-600">
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

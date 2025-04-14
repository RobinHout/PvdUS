import TekstBlok from "../Components/tekstBlok";
import "./oudeStyle.css";
// import Image from "next/image";
const people2324 = [
    {
        name: "Lieke van Zijl",
        role: "U.V.S.V./N.V.V.S.U.",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Derk Droppert",
        role: "Utrechtsch Studenten Corps",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Stan Janse",
        role: "C.S. Veritas | JSVU",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Helen van Roy",
        role: "U.V.S.V./N.V.V.S.U.",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Saar van der Horst",
        role: "U.S.R. “Triton”",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
];
const people2223 = [
    {
        name: "Maud Duurkens",
        role: "U.V.S.V./N.V.V.S.U.",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Kees de Vries",
        role: "C.S. Veritas | JSVU",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Emar Kronenburg",
        role: "Utrechtsch Studenten Corps",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Michiel Jekel",
        role: "U.S.R. “Triton”",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Bram van der Avoird",
        role: "Utrechtsch Studenten Corps",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
];
const people2122 = [
    {
        name: "Nick Noteboom",
        role: "Utrechtsch Studenten Corps | JSVU",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Mart van der Linden",
        role: "U.S.R. “Triton” | UBV",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Valerie van Eck",
        role: "U.V.S.V./N.V.V.S.U.",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];
const people2021 = [
    {
        name: "Pepijn Lapidaire",
        role: "Utrechtsch Studenten Corps | SCHC",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Romy van Wijk",
        role: "C.S. Veritas | JSVU",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Sya Huijskens",
        role: "U.V.S.V./N.V.V.S.U. | LKVV",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];
export default function OudeFracties() {
    return (
        <>
            <TekstBlok titel="Oude Fracties" tekst=""></TekstBlok>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            2023-2024
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            EVT TEKST
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                        {people2324.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full"
                                    />
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
            </div>{" "}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            2022-2023
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            EVT TEKST
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                        {people2223.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full"
                                    />
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
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            2021-2022
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            EVT TEKST
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                        {people2122.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full"
                                    />
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
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            2020-2021
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            EVT TEKST
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                        {people2021.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full"
                                    />
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
        </>
    );
}

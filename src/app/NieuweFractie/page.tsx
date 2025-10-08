import TekstBlok from "../Components/tekstBlok";
import Image from "next/image";
import Footer from "../Components/footer";
import { fractieleden } from "./nieuweFractieData";

export default function NieuweFractie() {
    return (
        <div className="flex flex-col">
            <TekstBlok titel="Fractie 2025-2026" tekst="" />

            <div className="flex flex-col md:flex-row flex-wrap justify-evenly gap-6 max-w-screen-lg mx-auto px-4 py-8">
                {fractieleden.map((fractie) => (
                    <div
                        key={fractie.naam}
                        className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full"
                    >
                        <Image
                            src={fractie.img}
                            alt={fractie.naam}
                            className="w-full max-h-100 object-cover"
                        />
                        <div className="p-4">
                            {/* Korte gegevens */}
                            <div className="border-b pb-2">
                                <p className="text-lg font-semibold text-black">
                                    {fractie.naam}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {fractie.functie}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {fractie.vereniging}
                                </p>
                            </div>
                            <p className="text-base mb-4 pt-2 text-black">
                                {fractie.tekst}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-10" />

            <Footer />
        </div>
    );
}

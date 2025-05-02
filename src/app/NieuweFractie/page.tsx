// import TekstBlok from "../Components/tekstBlok";
// import "../NieuweFractie/nieuweFractieStyle.css";
// import Image from "next/image";
// import Footer from "../Components/footer";
// import { fractieleden } from "./nieuweFractieData";
// export default function nieuweFractie() {
//     return (
//         <div>
//             <TekstBlok titel="Fractie 2024-2025" tekst=""></TekstBlok>
//             <div className="fractieLijst ">
//                 {fractieleden.map((fractie) => (
//                     <div className="fractieLid" key={fractie.naam}>
//                         <div className="fractieFotoContainer">
//                             <Image
//                                 src={fractie.img}
//                                 alt="iets"
//                                 className="fractieFoto"
//                             ></Image>
//                         </div>
//                         <div className="fractieTekst">
//                             <div className="fractieLangeTekst">
//                                 {fractie.tekst}
//                             </div>
//                             <div className="korteTekst">
//                                 <div className="fractieNaam">
//                                     {fractie.naam}
//                                 </div>
//                                 <div className="fractieFunctie">
//                                     {fractie.functie}
//                                 </div>
//                                 <div className="fractieVereniging">
//                                     {fractie.vereniging}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="h-10" />
//             <Footer></Footer>
//         </div>
//     );
// }
import TekstBlok from "../Components/tekstBlok";
import Image from "next/image";
import Footer from "../Components/footer";
import { fractieleden } from "./nieuweFractieData";

export default function NieuweFractie() {
    return (
        <div className="flex flex-col">
            {/* Titelblok */}
            <TekstBlok titel="Fractie 2024-2025" tekst="" />

            {/* Fractieledenlijst */}
            <div className="flex flex-col md:flex-row flex-wrap justify-evenly gap-6 max-w-screen-lg mx-auto px-4 py-8">
                {fractieleden.map((fractie) => (
                    <div
                        key={fractie.naam}
                        className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-[45%] md:w-[30%]"
                    >
                        <Image
                            src={fractie.img}
                            alt={fractie.naam}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            {/* Korte gegevens */}
                            <div className="border-b pb-2">
                                <p className="text-lg font-semibold">
                                    {fractie.naam}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {fractie.functie}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {fractie.vereniging}
                                </p>
                            </div>
                            {/* Lange beschrijving */}
                            <p className="text-base mb-4 pt-2">
                                {fractie.tekst}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Spacing */}
            <div className="h-10" />

            {/* Footer */}
            <Footer />
        </div>
    );
}

import TekstBlok from "../Components/tekstBlok";
import "../NieuweFractie/nieuweFractieStyle.css";
import Image from "next/image";
import Footer from "../Components/footer";
import { fractieleden } from "./nieuweFractieData";
export default function nieuweFractie() {
    return (
        <div>
            <TekstBlok titel="Fractie 2024-2025" tekst=""></TekstBlok>
            <div className="fractieLijst ">
                {fractieleden.map((fractie) => (
                    <div className="fractieLid" key={fractie.naam}>
                        <div className="fractieFotoContainer">
                            <Image
                                src={fractie.img}
                                alt="iets"
                                className="fractieFoto"
                            ></Image>
                        </div>
                        <div className="fractieTekst">
                            <div className="fractieLangeTekst">
                                {fractie.tekst}
                            </div>
                            <div className="korteTekst">
                                <div className="fractieNaam">
                                    {fractie.naam}
                                </div>
                                <div className="fractieFunctie">
                                    {fractie.functie}
                                </div>
                                <div className="fractieVereniging">
                                    {fractie.vereniging}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-10" />
            <Footer></Footer>
        </div>
    );
}

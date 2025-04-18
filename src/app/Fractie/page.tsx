import TekstBlok from "../Components/tekstBlok";
import "../NieuweFractie/nieuweFractieStyle.css";
import sammie from "../Components/Img/Fractie 2024-2025/SammieVerhoeven.jpeg";
import kai from "../Components/Img/Fractie 2024-2025/KaiVanWilligen.jpeg";
import orlando from "../Components/Img/Fractie 2024-2025/OrlandoWeering.jpg";
import anne from "../Components/Img/Fractie 2024-2025/AnneMinjon.jpg";
import pien from "../Components/Img/Fractie 2024-2025/PienVanDerMeij.jpeg";
import Image from "next/image";
import Footer from "../Components/footer";
export default function nieuweFractie() {
    return (
        <div style={{}}>
            <TekstBlok titel="Fractie 2024-2025" tekst=""></TekstBlok>
            <div className="fractieLijst">
                <div className="fractieLid">
                    <div className="fractieFotoContainer">
                        <Image
                            src={sammie}
                            alt="iets"
                            className="fractieFoto"
                        ></Image>
                    </div>
                    <div className="fractieTekst">
                        <div className="fractieLangeTekst">
                            Hoi, ik ben Sammie Verhoeven. Ik ben dit jaar de
                            fractievoorzitter van PvdUS. Ik studeer Liberal Arts
                            and Sciences met mijn hoofdrichting in Bestuurs- en
                            Organsatiewetenschap en daarnaast ben ik lid van de
                            studentenvereniging U.V.S.V./N.V.V.S.U.. Verder ben
                            ik dit jaar coördinator van de commissie Strategie,
                            Personeel & Organisatie binnen de Universiteitsraad
                            en zet ik me dit jaar in voor sociale veiligheid.
                        </div>
                        <div className="fractieNaam">
                            Sammie Verhoeven <br /> Fractievoorzitter
                        </div>
                    </div>
                </div>
                <div className="fractieLid">
                    <div className="fractieFotoContainer">
                        <Image
                            src={kai}
                            alt="iets"
                            className="fractieFoto"
                        ></Image>
                    </div>
                    <div className="fractieTekst">
                        <div className="fractieLangeTekst">
                            Hallo, Ik ben Kai van Willigen en ik ben dit jaar de
                            voorzitter van de Universiteitsraad. Binnen de raad
                            zit ik in de commissie Onderwijs, Onderzoek en
                            Studenten. Dit jaar zet ik mij in voor de
                            verbetering van de positie van studentbestuurders
                            binnen Utrecht. Naast het raadswerk studeer ik
                            Psychologie en ben ik lid bij Unitas!{" "}
                        </div>
                        <div className="fractieNaam">
                            Kai van Willigen <br /> Voorzitter Universiteitsraad
                        </div>
                    </div>
                </div>
                <div className="fractieLid">
                    <div className="fractieFotoContainer">
                        <Image
                            src={orlando}
                            alt="iets"
                            className="fractieFoto"
                        ></Image>
                    </div>
                    <div className="fractieTekst">
                        <div className="fractieLangeTekst">
                            Hallo, mijn naam is Orlando Weering. Ik studeer
                            Filosofie en ik ben lid van het Utrechts Studenten
                            Corps. In de raad zit ik bij de commissie Financiën,
                            Ict, Huisvesting & Duurzaamheid.
                        </div>
                        <div className="fractieNaam">Orlando Weering</div>
                    </div>
                </div>
                <div className="fractieLid">
                    <div className="fractieFotoContainer">
                        <Image
                            src={anne}
                            alt="iets"
                            className="fractieFoto"
                        ></Image>
                    </div>
                    <div className="fractieTekst">
                        <div className="fractieLangeTekst">
                            Hoi! Ik ben Anne Minjon. Ik studeer Communicatie- en
                            Informatiewetenschappen en daarnaast ben ik lid van
                            de studentenvereniging U.V.S.V./N.V.V.S.U.. Dit jaar
                            mag ik binnen de Universiteitsraad de rol van
                            PR-Commissaris vertegenwoordigen. Verder zit ik in
                            de commissie Financiën, Ict, Huisvesting &
                            Duurzaamheid.{" "}
                        </div>
                        <div className="fractieNaam">
                            Anne Minjon <br /> PR-Commissaris Universiteitsraad
                        </div>
                    </div>
                </div>
                <div className="fractieLid">
                    <div className="fractieFotoContainer">
                        <Image
                            src={pien}
                            alt="iets"
                            className="fractieFoto"
                        ></Image>
                    </div>
                    <div className="fractieTekst">
                        <div className="fractieLangeTekst">
                            Hi, ik ben Pien van der Meij. Ik studeer Rechten en
                            ben ik lid bij Unitas S.R. Ik heb dit jaar een
                            plekje in de commissie Onderwijs, Onderzoek &
                            Studentzaken weten te bemachtigen. Verder ben ik ook
                            de secretaris van de Universiteitsraad dit jaar, wat
                            betekent dat ik ga over het mailverkeer en notuleer
                            bij vergaderingen.
                        </div>
                        <div className="fractieNaam">
                            Pien van der Meij <br /> Secretaris
                            Universiteitsraad
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

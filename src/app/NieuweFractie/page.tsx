import TekstBlok from "../Components/tekstBlok";
import "./nieuweFractieStyle.css";
import lot from "../Components/Img/Fractie 2025-2026/LotPeters.jpeg";
import christa from "../Components/Img/Fractie 2025-2026/ChristaHoedemaeker.jpeg";
import kim from "../Components/Img/Fractie 2025-2026/KimBrandsen.jpeg";
import gijs from "../Components/Img/Fractie 2025-2026/GijsFrankena.jpeg";
import veerle from "../Components/Img/Fractie 2025-2026/VeerleOudeLenferink.jpeg";
import Image from "next/image";
import Footer from "../Components/footer";
export default function nieuweFractie() {
    return (
        <div style={{}}>
            <TekstBlok titel="Nieuwe Fractie" tekst=""></TekstBlok>
            <div className="fractieLijst">
                <div className="fractieLid">
                    <Image src={lot} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">
                            Lot is 21 jaar oud en studeert Philosophy, Politics
                            & Economics, volgend jaar gaat ze beginnen aan haar
                            master Economic Policy. Naast haar studie is ze
                            actief bij Triton. Aankomend jaar wil ze zich
                            inzetten voor studenten die zich óók buiten hun
                            studie willen ontwikkelen. Dit betekent: het
                            versterken van de band tussen de universiteit en en
                            alle diverse verenigingen die Utrecht rijk is. Zo
                            krijgen studenten de ruimte en de steun om zoveel
                            mogelijk uit hun studententijd te halen. Verder wil
                            ze de samenwerking tussen universiteitsraden in
                            Nederland versterken, zodat goede ideeën sneller
                            gedeeld worden en studenten daar direct van
                            profiteren.{" "}
                        </div>
                    </div>
                    <div className="NFinfo">Lot Peters</div>
                </div>
                <div className="fractieLid">
                    <Image src={veerle} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">
                            De tweede plek op onze lijst wordt vervuld door
                            Veerle Oude Lenferink. Ze is 21 jaar oud en zit in
                            haar derde jaar van de track Internationale
                            Betrekkingen in de bachelor Geschiedenis. Daarnaast
                            zit ze in haar derde jaar van U.V.S.V./N.V.V.S.U.
                            Aankomend jaar gaat Veerle zich inzetten voor betere
                            ondersteuning vanuit de universiteit voor de
                            carrières van studenten. Er is nog best veel
                            onduidelijk over waar een student rekening mee moet
                            houden bij het kiezen van een master, om maar een
                            voorbeeld te noemen. Ze is ervan overtuigd dat de
                            universiteit zich op dit gebied op vele manieren kan
                            ontwikkelen. Daarnaast wilt ze zich inzetten voor de
                            gezondheid van studenten. Zo zouden studenten
                            gemakkelijk toegang moeten krijgen tot verschillende
                            soorten sport omdat dit bevorderlijk is voor het
                            studentenwelzijn.
                        </div>
                    </div>
                    <div className="NFinfo">Veerle Oude Lenferink</div>
                </div>
                <div className="fractieLid">
                    <Image src={kim} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">
                            Kim is 21 jaar en studeert Sociologie en Economics
                            and Business Economics. Daarnaast is ze 3e jaars bij
                            C.S. Veritas. Ze wil zich komend jaar inzetten voor
                            flexibeler onderwijs om het sociale welzijn van
                            studenten te verbeteren. Het is belangrijk dat
                            studenten genoeg ruimte en vrijheid krijgen om zich
                            niet alleen binnen hun studie, maar ook binnen hun
                            verenigingen en andere extra curriculaire
                            activiteiten te kunnen ontwikkelen. Ook wil ze
                            zorgen dat er ondanks landelijke bezuinigingen op
                            het hoger onderwijs, genoeg ondersteuning
                            beschikbaar blijft voor studenten om een fijne
                            studententijd te kunnen hebben.
                        </div>
                    </div>
                    <div className="NFinfo">Kim Brandsen</div>
                </div>
                <div className="fractieLid">
                    <Image src={gijs} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">
                            Gijs is 24 jaar oud en zit in zijn derde jaar van de
                            opleiding Interdisciplinaire Sociale Wetenschappen.
                            Daarnaast is hij lid bij het Utrechtsch Studenten
                            Corps en hockeyer bij MMHC Voordaan. Aankomend jaar
                            hoopt Gijs zich in te kunnen zetten voor de
                            ontwikkelingsmogelijkheden van studenten zowel
                            binnen als buiten hun opleiding. Denk bijvoorbeeld
                            aan het beschermen van extracurriculair onderwijs
                            zoals de honoursprogramma’s, of het faciliteren van
                            studenten in bestuursfuncties bij studie-, sport- en
                            gezelligheidsverenigingen. Gijs zou ook willen
                            onderzoeken of de universiteit een grotere rol kan
                            spelen in studentenhuisvesting, zodat studenten zich
                            kunnen focussen op hun ontwikkeling!
                        </div>
                    </div>
                    <div className="NFinfo">Gijs Frankena</div>
                </div>
                <div className="fractieLid">
                    <Image src={christa} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">Nog niks</div>
                    </div>
                    <div className="NFinfo">Christa Hoedmaeker</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

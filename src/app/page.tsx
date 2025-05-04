// import achtergrond from "./Components/Img/UtrechtDomtoren.jpg";
// import groepsfoto from "./Components/Img/PvdUSgroepsfoto.jpeg";
import "./globals.css";
import TekstBlok from "./Components/tekstBlok";
import Intro from "./Components/intro";
import Link from "next/link";
import Image from "next/image";
import foto from "./Components/Img/PvdUSgroepsfoto.jpeg";
import speerpunten from "./Components/Img/Wtr/SpeerpuntenFoto.jpg";
import nieuweFractie from "./Components/Img/Wtr/NieuweFractieFoto.jpeg";
import universiteitsraad from "./Components/Img/Wtr/UniversiteitenraadFoto.jpg";
import Footer from "./Components/footer";
// import Blokje from "./Components/blokjes";

export default function HomePage() {
    return (
        <>
            <div style={{ height: "200px" }} className="opvulling" />
            <Intro />
            <TekstBlok
                titel="Welkom!"
                tekst={`Wij zijn De Partij voor de Utrechtse Student (PvdUS). Op dit moment zetelt onze 18e fractie in de Universiteitsraad van de Universiteit Utrecht. Binnen de Universiteitsraad vertegenwoordigen wij de 'actieve student'. Dit is de student die het belangrijk vindt om zich naast studie ook op andere vlakken te ontplooien. 
`}
            />
            <div style={{ backgroundColor: "white" }}>
                <div className="flex flex-col md:flex-row justify-evenly w-full max-w-screen-lg mx-auto pb-4 z-[1000] sm:w-full ">
                    <Link
                        href="/NieuweFractie"
                        className="w-full sm:w-3/5 md:w-[30%] rounded-t-lg transition-shadow duration-150 hover:shadow-lg hover:opacity-90"
                    >
                        <Image
                            src={nieuweFractie}
                            alt="test"
                            className="w-auto max-w-full rounded"
                        />
                        <div className="text-center text-lg font-[Public_Sans] py-2">
                            Nieuwe fractie
                        </div>
                    </Link>
                    <Link
                        href="/Speerpunten"
                        className="w-full sm:w-3/5 md:w-[30%] rounded-t-lg transition-shadow duration-150 hover:shadow-lg hover:opacity-90"
                    >
                        <Image
                            src={speerpunten}
                            alt="test"
                            className="w-auto max-w-full rounded"
                        />
                        <div className="text-center text-lg font-[Public_Sans] py-2">
                            Standpunten
                        </div>
                    </Link>
                    <Link
                        // href="/Universiteitsraad"
                        href=""
                        className="w-full sm:w-3/5 md:w-[30%] rounded-t-lg transition-shadow duration-150 hover:shadow-lg hover:opacity-90"
                    >
                        <Image
                            src={universiteitsraad}
                            alt="test"
                            className="w-auto max-w-full rounded"
                        />
                        <div className="text-center text-lg font-[Public_Sans] py-2">
                            Universiteitsraad
                        </div>
                    </Link>
                </div>
            </div>
            <div className="afloop">
                <Image
                    src={foto}
                    alt="Groeps"
                    style={{ width: "100%" }}
                ></Image>
                <div className="overlay"></div>
                <Footer></Footer>
            </div>
        </>
    );
}

// De PvdUS is in 2007 opgericht om de stem van de actieve student te vertegenwoordigen. Het idee bij de oprichting van de PvdUS was om andere perspectieven en ideeën te bieden binnen de raad. De toegenomen variatie zorgt voor een betere representatie en belangenvertegenwoordiging van de actieve student. Met actieve studenten bedoelen; we studenten die zich willen ontwikkelen naast hun studie. We zijn er voor alle studenten die veel willen kunnen sporten, bezig zijn binnen hun studie- of gezelligheidsvereniging of er andere activiteiten op na houden die buiten het curriculum vallen. Inmiddels komt de PvdUS al 18 jaar op voor alle studenten aan de UU door het beleid van de universiteit kritisch te bekijken en altijd te blijven denken vanuit het perspectief van studenten zelf. We willen dat de student zichzelf actief kan ontwikkelen en een zelfstandig volwassen persoon kan worden. De PvdUS vindt dat de Universiteit Utrecht ruimte en ondersteuning moet bieden voor die ontwikkeling door goed onderwijs te verzorgen, zich op te stellen als betrouwbare instelling en hulp en ondersteuning te bieden bij activerende instituten.`}

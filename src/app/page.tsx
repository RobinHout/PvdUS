// import achtergrond from "./Components/Img/UtrechtDomtoren.jpg";
// import groepsfoto from "./Components/Img/PvdUSgroepsfoto.jpeg";
import "./globals.css";
import TekstBlok from "./Components/tekstBlok";
import Intro from "./Components/intro";
import Link from "next/link";
import Image from "next/image";
import foto from "./Components/Img/PvdUSgroepsfoto.jpeg";
import Footer from "./Components/footer";
// import Blokje from "./Components/blokjes";

export default function HomePage() {
    return (
        <>
            {/* <img
                alt="Foto van Utrecht"
                src={achtergrond}
                className="achtergrondFoto"
            ></img> */}
            <div style={{ height: "100px" }} className="opvulling" />
            <Intro />
            <TekstBlok
                titel="Welkom!"
                tekst={`Wij zijn De Partij voor de Utrechtse Student (PvdUS). Op dit moment zetelt onze 18e fractie in de Universiteitsraad van de Universiteit Utrecht. Binnen de Universiteitsraad vertegenwoordigen wij de 'actieve student'. Dit is de student die het belangrijk vindt om zich naast studie ook op andere vlakken te ontplooien. 
`}
            />
            <div style={{ backgroundColor: "white" }}>
                <div className="blokjes">
                    <Link className="blokje" href="/NieuweFractie">
                        <Image
                            src={foto}
                            alt="test"
                            className="blokjeFoto"
                        ></Image>
                        <div className="blokjeTekst">Nieuwe fractie</div>
                    </Link>
                    <Link className="blokje" href="/Speerpunten">
                        <Image
                            src={foto}
                            alt="test"
                            className="blokjeFoto"
                        ></Image>
                        <div className="blokjeTekst">Speerpunten</div>
                    </Link>
                    <Link className="blokje" href="/Universiteitsraad">
                        <Image
                            src={foto}
                            alt="test"
                            className="blokjeFoto"
                        ></Image>
                        <div className="blokjeTekst">Universiteitsraad</div>
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
            {/* <Blokje></Blokje> */}
            {/* <div style={{ height: "500px"`11 }} className="opvulling" /> */}
        </>
    );
}

// De PvdUS is in 2007 opgericht om de stem van de actieve student te vertegenwoordigen. Het idee bij de oprichting van de PvdUS was om andere perspectieven en ideeën te bieden binnen de raad. De toegenomen variatie zorgt voor een betere representatie en belangenvertegenwoordiging van de actieve student. Met actieve studenten bedoelen; we studenten die zich willen ontwikkelen naast hun studie. We zijn er voor alle studenten die veel willen kunnen sporten, bezig zijn binnen hun studie- of gezelligheidsvereniging of er andere activiteiten op na houden die buiten het curriculum vallen. Inmiddels komt de PvdUS al 18 jaar op voor alle studenten aan de UU door het beleid van de universiteit kritisch te bekijken en altijd te blijven denken vanuit het perspectief van studenten zelf. We willen dat de student zichzelf actief kan ontwikkelen en een zelfstandig volwassen persoon kan worden. De PvdUS vindt dat de Universiteit Utrecht ruimte en ondersteuning moet bieden voor die ontwikkeling door goed onderwijs te verzorgen, zich op te stellen als betrouwbare instelling en hulp en ondersteuning te bieden bij activerende instituten.`}

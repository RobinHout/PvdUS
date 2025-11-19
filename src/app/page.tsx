import "./globals.css";
import TekstBlok from "./Components/tekstBlok";
import Intro from "./Components/intro";
import Link from "next/link";
import Image from "next/image";
import foto from "./Components/Img/1758105154723.jpeg";
import speerpunten from "./Components/Img/Wtr/SpeerpuntenFoto.jpg";
import nieuweFractie from "./Components/Img/Huidige_Fractie_Bijgesneden.jpg";
import universiteitsraad from "./Components/Img/Wtr/UniversiteitenraadFoto.jpg";
import Footer from "./Components/footer";

export default function HomePage() {
    return (
        <>
            <div style={{ height: "200px" }} className="opvulling" />
            <Intro />
            <TekstBlok
                titel="Welkom!"
                tekst={`Wij zijn De Partij voor de Utrechtse Student (PvdUS). Op dit moment zetelt onze 19e fractie in de Universiteitsraad van de Universiteit Utrecht. Binnen de Universiteitsraad vertegenwoordigen wij de 'actieve student'. Dit is de student die het belangrijk vindt om zich naast studie ook op andere vlakken te ontplooien. 
`}
            />
            <div className="bg-white">
                <div className="flex flex-col md:flex-row justify-evenly w-full max-w-screen-lg mx-auto pb-4 z-[1000]">
                    <Link
                        href="/NieuweFractie"
                        className="w-4/5 mx-auto md:mx-0 sm:w-3/5 md:w-[30%] rounded-t-lg transition-shadow duration-150 hover:shadow-lg hover:opacity-90"
                    >
                        <Image
                            src={nieuweFractie}
                            alt="test"
                            className="w-auto max-w-full rounded"
                        />
                        <div className="text-center text-lg font-[Public_Sans] py-2 text-black">
                            Huidige fractie
                        </div>
                    </Link>
                    <Link
                        href="/Speerpunten"
                        className="w-4/5 mx-auto md:mx-0 sm:w-3/5 md:w-[30%] rounded-t-lg transition-shadow duration-150 hover:shadow-lg hover:opacity-90"
                    >
                        <Image
                            src={speerpunten}
                            alt="test"
                            className="w-auto max-w-full rounded"
                        />
                        <div className="text-center text-lg font-[Public_Sans] py-2 text-black">
                            Standpunten
                        </div>
                    </Link>
                    <Link
                        href="/Universiteitsraad"
                        className="w-4/5 mx-auto md:mx-0 sm:w-3/5 md:w-[30%] rounded-t-lg transition-shadow duration-150 hover:shadow-lg hover:opacity-90"
                    >
                        <Image
                            src={universiteitsraad}
                            alt="test"
                            className="w-auto max-w-full rounded"
                        />
                        <div className="text-center text-lg font-[Public_Sans] py-2 text-black">
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

import TekstBlok from "../Components/tekstBlok";
import "./fractieStyle.css";
import sammie from "../Components/Img/Bestuurslid 2.jpeg";
import kai from "../Components/Img/Bestuurslid 3.jpeg";
import orlando from "../Components/Img/Bestuurslid 1.jpg";
import anne from "../Components/Img/Bestuurslid 5.jpg";
import pien from "../Components/Img/Bestuurslid 4.jpeg";
import Image from "next/image";
import Footer from "../Components/footer";
export default function nieuweFractie() {
    return (
        <div style={{}}>
            <TekstBlok titel="Fractie 2024-2025" tekst=""></TekstBlok>
            <div className="nieuweFractieAchtergrond">
                <div className="nieuwLid">
                    <Image src={sammie} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">Bestuurslid 3</div>
                    </div>
                    <div className="NFinfo">
                        Sammie Verhoeven <br /> Fractievoorzitter
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image src={kai} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">Bestuurslid 3</div>
                    </div>
                    <div className="NFinfo">
                        Kai van Willigen <br /> Voorzitter Universiteitsraad
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image src={orlando} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">Bestuurslid 3</div>
                    </div>
                    <div className="NFinfo">Orlando Weering</div>
                </div>
                <div className="nieuwLid">
                    <Image src={anne} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">Bestuurslid 3</div>
                    </div>
                    <div className="NFinfo">
                        Anne Minjon <br /> PR-Commissaris Universiteitsraad
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image src={pien} alt="iets" className="nlIMG"></Image>
                    <div className="NFoverlay">
                        <div className="NFtext">Bestuurslid 3</div>
                    </div>
                    <div className="NFinfo">
                        Pien van der Meij <br /> Secretaris Universiteitsraad
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

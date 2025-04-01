import TekstBlok from "../Components/tekstBlok";
import "./nieuweFractieStyle.css";
import bestuurslid from "../Components/Img/Bestuurslid 1.jpeg";
import Image from "next/image";
export default function nieuweFractie() {
    return (
        <>
            <TekstBlok titel="Nieuwe Fractie" tekst=""></TekstBlok>
            <div className="nieuweFractieAchtergrond">
                <div className="nieuwLid">
                    <Image
                        src={bestuurslid}
                        alt="iets"
                        className="nlIMG"
                    ></Image>
                    <div className="overlay">
                        <div className="text">Bestuurslid 1</div>
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image
                        src={bestuurslid}
                        alt="iets"
                        className="nlIMG"
                    ></Image>
                    <div className="overlay">
                        <div className="text">Bestuurslid 2</div>
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image
                        src={bestuurslid}
                        alt="iets"
                        className="nlIMG"
                    ></Image>
                    <div className="overlay">
                        <div className="text">Bestuurslid 3</div>
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image
                        src={bestuurslid}
                        alt="iets"
                        className="nlIMG"
                    ></Image>
                    <div className="overlay">
                        <div className="text">Bestuurslid 4</div>
                    </div>
                </div>
                <div className="nieuwLid">
                    <Image
                        src={bestuurslid}
                        alt="iets"
                        className="nlIMG"
                    ></Image>
                    <div className="overlay">
                        <div className="text">Bestuurslid 5</div>
                    </div>
                </div>
            </div>
        </>
    );
}

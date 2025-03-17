import "./tekstBlokStyle.css";
import Image from "next/image";
import groepsfoto from "../Components/Img/PvdUSgroepsfoto.jpeg";
import bedrijven from "../Components/Img/BedrijvenPvdUS.png";

type TekstBlokProps = {
    titel: string;
    tekst: string;
};

const tekstBlok: React.FC<TekstBlokProps> = ({ titel, tekst }) => {
    return (
        <>
            <div className="blok">
                <h1>{titel}</h1>
                <p className="blokTekst">{tekst}</p>
                <Image
                    src={groepsfoto}
                    alt="Groepsfoto van PvdUS"
                    style={{ paddingTop: "20px" }}
                ></Image>
                <Image
                    src={bedrijven}
                    alt="Alle bedrijven waar PvdUS mee te maken heeft"
                    style={{ justifySelf: "center", paddingTop: "20px" }}
                ></Image>
            </div>
        </>
    );
};
export default tekstBlok;

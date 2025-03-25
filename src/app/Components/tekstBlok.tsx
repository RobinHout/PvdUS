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
                <div className="streep">a</div>
                <div className="tekstVanHetBlok">
                    <h1>{titel}</h1>
                    <p className="blokTekst">{tekst}</p>
                </div>
                <Image
                    src={groepsfoto}
                    alt="Groepsfoto van PvdUS"
                    style={{ paddingTop: "20px", justifySelf: "center" }}
                ></Image>
                <Image
                    src={bedrijven}
                    alt="Alle bedrijven waar PvdUS mee te maken heeft"
                    style={{
                        justifySelf: "center",
                        paddingTop: "20px",
                        width: "70%",
                    }}
                ></Image>
                <div className="streep">a</div>
            </div>
        </>
    );
};
export default tekstBlok;

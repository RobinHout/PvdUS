import "./tekstBlokStyle.css";
// import groepsfoto from "../Components/Img/PvdUSgroepsfoto.jpeg";
// import bedrijven from "../Components/Img/BedrijvenPvdUS.png";

type TekstBlokProps = {
    titel: string;
    tekst: string;
};

const tekstBlok: React.FC<TekstBlokProps> = ({ titel, tekst }) => {
    return (
        <>
            <div className="blok">
                <h1>{titel}</h1>
                <p style={{ whiteSpace: "pre-line" }}>{tekst}</p>
                {/* <img
                    src={groepsfoto}
                    alt="groepsfoto van PvdUS"
                    className="groepsfoto"
                ></img>
                <img
                    src={bedrijven}
                    alt="groepsfoto van PvdUS"
                    className="groepsfoto"
                ></img> */}
            </div>
        </>
    );
};
export default tekstBlok;

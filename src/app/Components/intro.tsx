import Logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import "./introStyle.css";

const Intro = () => {
    return (
        <>
            <div className="intro">
                <Image
                    alt="logo van PvdUS"
                    src={Logo}
                    className="introLogo"
                ></Image>
                <div className="introTekst">
                    <p style={{ color: "transparent" }}>.</p>
                    <h1>Partij voor de Utrechtse Student</h1>
                    <p>De partij voor de studenten van Utrecht</p>
                </div>
            </div>
        </>
    );
};
export default Intro;

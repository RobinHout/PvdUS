import TekstBlok from "../Components/tekstBlok";
import Image from "next/image";
import foto from "../Components/Img/1758105154723.jpeg";
import Footer from "../Components/footer";
export default function contact() {
    return (
        <>
            {/* <img
                alt="Foto van Utrecht"
                src={achtergrond}
                className="achtergrondFoto"
            ></img> */}
            <div style={{ height: "100px" }} className="opvulling" />
            <TekstBlok
                titel="Wil je ons bereiken?"
                tekst={`E-mailadres 
bestuur.pvdus@gmail.com

Adres
Bestuursgebouw, kamer 4.46
Heidelberglaan 8, 3584CS Utrecht

mailbox 80125, 3508 TC Utrecht`}
            />
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

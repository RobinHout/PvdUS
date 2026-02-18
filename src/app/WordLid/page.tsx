import TekstBlok from "../Components/tekstBlok";
import foto from "../Components/Img/1758105154723.jpeg";
import Image from "next/image";
import Footer from "../Components/footer";
export default function WordLid() {
    return (
        <>
            <TekstBlok
                titel="Meld je aan bij de PvdUS"
                tekst={`Ben jij een betrokken Utrechtse student met een passie voor medezeggenschap? Heb jij ideeën over hoe het studentenleven en de universiteit beter kunnen – en wil je daar écht iets in betekenen?

Meld je dan aan voor de Partij voor de Utrechtse Student (PvdUS)! Als lid van de PvdUS zet jij je een jaar lang in voor de belangen van álle actieve studenten aan de Universiteit Utrecht. Op het hoogste niveau denk je mee, beslis je mee en maak je je hard voor thema’s zoals het onderwijskwaliteit, studentenwelzijn, duurzaamheid en het (sport)verenigingsleven in Utrecht.

Je werkt samen met een andere ambitieuze studenten, leert superveel en krijgt naast een groot netwerk, ook een waardevolle toevoeging op je cv erbij.

Klinkt dit als iets voor jou? Stuur dan nu je motivatie en cv naar bestuur.pvdus@gmail.com en wie weet maak jij binnenkort deel uit van het hoogste medezeggenschapsorgaan van de Universiteit Utrecht! `}
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

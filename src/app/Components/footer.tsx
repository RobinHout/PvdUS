// components/Footer.jsx
import SocialsButton from "./SocialsButton";
const Footer = () => {
    return (
        <footer className="mt-auto relative bg-[#415587] w-full h-[35px] overflow-visible pb-0">
            <h1
                className="absolute text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem]
                       font-[anton] text-[#f280cb]
                       left-4 sm:left-12
                       top-0 sm:-top-[30px] lg:-top-[30px]"
            >
                Partij voor de Utrechtse Student
            </h1>
            <div className="absolute inset-y-0 right-4 bottom-7 flex items-center">
                <SocialsButton
                    instagramUrl="https://www.instagram.com/partijvoordeutrechtsestudent/"
                    linkedinUrl="https://www.linkedin.com/in/fractiepvdus/"
                    size={50} // groter icoon
                />
            </div>
        </footer>
    );
};

export default Footer;

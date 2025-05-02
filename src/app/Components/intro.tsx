// import Logo from "./Img/logo-pvdus.png";
// import Image from "next/image";
// import "./introStyle.css";
// import Link from "next/link";
// const Intro = () => {
//     return (
//         <>
//             <div className="intro">
//                 <Image
//                     alt="logo van PvdUS"
//                     src={Logo}
//                     className="introLogo"
//                 ></Image>
//                 <div>
//                     <div className="introTekst pb-10">
//                         <p style={{ color: "transparent" }}>.</p>
//                         <h1>Partij voor de Utrechtse Student</h1>
//                         <p>De partij voor de studenten van Utrecht</p>
//                     </div>
//                     <Link
//                         href="Contact"
//                         className="inline-block transition-colors duration-500 ease-in-out rounded-md border border-transparent bg-pink-300 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//                     >
//                         Contact
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default Intro;
import Logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="flex max-w-screen-lg mx-auto text-pink-300 relative">
            <Image
                alt="logo van PvdUS"
                src={Logo}
                className="p-4 pl-[15%] w-2/5 pb-10 sm:w-1/2 md:w-2/5 h-auto"
            />
            <div>
                <div className="pb-10">
                    <p className="text-transparent">.</p>
                    <h1 className="text-4xl font-[anton]">
                        Partij voor de Utrechtse Student
                    </h1>
                    <p className="text-lg font-[public-sans]">
                        De partij voor de studenten van Utrecht
                    </p>
                </div>
                <Link
                    href="Contact"
                    className="inline-block transition-colors duration-500 ease-in-out rounded-md border border-transparent bg-pink-300 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Intro;

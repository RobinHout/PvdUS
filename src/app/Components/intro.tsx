import Logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="flex max-w-screen-lg mx-auto text-pink-300 relative">
            <div
                className="
    relative 
    w-1/2      /* 50% breedte op mobiel */
    sm:w-2/5   /* 40% vanaf ≥640px */
    md:w-1/3   /* ~33% vanaf ≥768px */
    lg:w-2/5   /* 40% vanaf ≥1024px */
    

  h-auto"
            >
                <Image
                    src={Logo}
                    alt="logo van PvdUS"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div>
                <div className="pb-10">
                    <p className="text-transparent">.</p>
                    <h1 className="text-4xl font-[anton]">
                        Partij voor de Utrechtse Student
                    </h1>
                    <p className="text-lg font-[Public_Sans]">
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

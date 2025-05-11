import Logo from "./Img/logo-pvdus.png";
import Image from "next/image";
import Link from "next/link";
const Intro = () => {
    return (
        <div className="flex flex-col sm:flex-row max-w-screen-lg mx-auto text-[#f280cb] relative">
            {/* Logo blok */}
            <div className="relative w-full h-48 sm:w-1/2 sm:h-auto sm:max-w-md">
                <Image
                    src={Logo}
                    alt="logo van PvdUS"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Tekstblok */}
            <div className="w-full sm:w-1/2 mt-8 sm:mt-0 sm:pl-8 text-center sm:text-left">
                <div className="pb-10">
                    <p className="text-transparent">.</p>
                    <h1 className="text-5xl font-[anton]">
                        Partij voor de Utrechtse Student
                    </h1>
                    <p className="text-xl font-[Public_Sans]">
                        De partij voor de studenten van Utrecht
                    </p>
                </div>
                <Link
                    href="/Contact"
                    className="inline-block transition-colors duration-500 ease-in-out rounded-md border border-transparent bg-[#f280cb] px-8 py-3 text-center text-lg text-white hover:bg-indigo-700"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Intro;

// const Intro = () => {
//     return (
//       <div className="flex max-w-screen-xl mx-auto text-[#f280cb] relative space-x-8">
//         <div
//           className="
//             relative
//             w-3/5      /* 60% op mobiel */
//             sm:w-1/2   /* 50% vanaf ≥640px */
//             md:w-2/5   /* 40% vanaf ≥768px */
//             lg:w-1/2   /* 50% vanaf ≥1024px */
//             h-auto
//           "
//         >
//           <Image
//             src={Logo}
//             alt="logo van PvdUS"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//         <div className="flex flex-col justify-center">
//           <div className="pb-12">
//             <p className="text-transparent">.</p>
//             <h1 className="text-5xl font-[anton] leading-tight">
//               Partij voor de Utrechtse Student
//             </h1>
//             <p className="text-xl font-[Public_Sans] mt-4">
//               De partij voor de studenten van Utrecht
//             </p>
//           </div>
//           <Link
//             href="/contact"
//             className="
//               inline-block
//               transition-colors duration-500 ease-in-out
//               rounded-lg
//               border border-transparent
//               bg-[#f280cb]
//               px-10 py-4
//               text-center
//               font-medium
//               text-white
//               hover:bg-indigo-700
//               text-lg
//             "
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     );
//   };

//   export default Intro;

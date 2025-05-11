import type { Metadata } from "next";
import { Anton, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";
// import Footer from "./Components/footer";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});
const publicSans = Public_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PvdUS",
    description: "Dit is de website van de Partij van de Utrechtse Student",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" className={`${anton} ${publicSans} antialiased`} />
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
            <body className="App flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                {/* <Footer /> */}
            </body>
        </>
    );
}

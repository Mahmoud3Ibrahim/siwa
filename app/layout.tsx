import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const cairo = Cairo({
    subsets: ["arabic", "latin"],
    variable: "--font-cairo",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Hossny Inn - Luxury Eco-Resort in Siwa Oasis, Egypt",
    description: "Wake up inside walls built from Siwa salt. A boutique eco-resort where the desert meets tranquility. Experience salt hotels, hot springs, desert safaris, and stargazing in Siwa Oasis, Egypt.",
    keywords: ["Siwa Oasis", "Egypt hotel", "salt hotel", "eco-resort", "desert hotel", "luxury resort", "Siwa accommodation"],
    authors: [{ name: "Hossny Inn" }],
    openGraph: {
        title: "Hossny Inn - Siwa Escape",
        description: "A boutique eco-resort built from Siwa salt, where the desert meets tranquility.",
        type: "website",
        locale: "en_US",
        alternateLocale: "ar_EG",
        siteName: "Hossny Inn",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hossny Inn - Siwa Escape",
        description: "A boutique eco-resort built from Siwa salt, where the desert meets tranquility.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${playfair.variable} ${cairo.variable} antialiased`}
            >
                <LanguageProvider>
                    <Header />
                    <main className="min-h-screen pt-20">
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}

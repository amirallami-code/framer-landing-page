import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Framer Landing Page",
    description: "Template created by Frontend Tribe, Code by Amirhossein Allami",
};

export default function RootLayout({children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="relative">
            <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
                {children}
            </body>
        </html>
    );
}

"use client";

import Image from "next/image";
import AppLogo from '@/public/framer-logo.png'
import Link from "next/link";
import { ArrowUpRight, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-black text-[#BCBCBC] text-sm py-12 text-center">
            <div className="container flex flex-col items-center justify-center gap-6">
                <div className="inline-flex relative before:content-[''] before:absolute before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)]">
                    <Image src={AppLogo} alt="Framer" height={40} className="relative"/>
                </div>
                <nav className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">Customers</Link>
                    <Link href="/">Updates</Link>
                    <Link href="/">Help</Link>
                    <a
                        key="GitHub"
                        href="https://github.com/amirallami-code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-1 hover:bg-transparent"
                    >
                        <ArrowUpRight className="w-4 h-4 mt-0.5" />
                        Github
                    </a>
                </nav>
                <div className="flex gap-6">
                    <a href="/" key="Twitter" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="/" key="Instagram" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="/" key="Linkedin" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="/" key="Youtube" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-4 h-4" />
                    </a>
                    <a href="/" key="Github" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                    </a>
                </div>
                <p>&copy; 2025 Your Company, Inc. All rights reserved.</p>
                <p>Made by <a key="Website" href="https://amirallami.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Amir</a></p>
            </div>
        </footer>
    )
}
export default Footer

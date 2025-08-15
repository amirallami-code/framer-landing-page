"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import acmeLogo from "@/public/logos/logo-acme.png";
import apexLogo from "@/public/logos/logo-apex.png";
import celestialLogo from "@/public/logos/logo-celestial.png";
import echoLogo from "@/public/logos/logo-echo.png";
import pulseLogo from "@/public/logos/logo-pulse.png";
import quantumLogo from "@/public/logos/logo-quantum.png";

const LogoTicker = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: "-50%",
                        }}
                        transition={{
                            duration: 25,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    >
                        <Image src={acmeLogo} alt="ACME" className="logo-ticker-image" />
                        <Image src={apexLogo} alt="APEX" className="logo-ticker-image" />
                        <Image src={celestialLogo} alt="CELESTIAL" className="logo-ticker-image" />
                        <Image src={echoLogo} alt="ECHO" className="logo-ticker-image" />
                        <Image src={pulseLogo} alt="PULSE" className="logo-ticker-image" />
                        <Image src={quantumLogo} alt="QUANTUM" className="logo-ticker-image" />

                        {/* Second Half */}
                        <Image src={acmeLogo} alt="ACME" className="logo-ticker-image" />
                        <Image src={apexLogo} alt="APEX" className="logo-ticker-image" />
                        <Image src={celestialLogo} alt="CELESTIAL" className="logo-ticker-image" />
                        <Image src={echoLogo} alt="ECHO" className="logo-ticker-image" />
                        <Image src={pulseLogo} alt="PULSE" className="logo-ticker-image" />
                        <Image src={quantumLogo} alt="QUANTUM" className="logo-ticker-image" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default LogoTicker

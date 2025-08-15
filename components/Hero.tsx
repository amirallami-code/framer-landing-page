"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {ArrowRight} from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';
import cogImage from "@/public/shapes/cog.png";
import cynlinderImage from "@/public/shapes/cylinder.png";
import noodleImage from "@/public/shapes/noodle.png";

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
            <div className="container">
                <div className="w-full md:flex items-center justify-between">
                    <div className="md:w-[478px] z-20">
                        <span className="tag">
                            Version 2.0 is here!
                        </span>
                        <h1 className="title text-5xl md:text-7xl text-start">
                            Pathway to productivity
                        </h1>
                        <p className="description text-start">
                            Celebrate the joy of accomplishment with an app designed to track your progress.
                            motivate your efforts, and celebrate your successes
                        </p>
                        <div className="flex items-center gap-1 mt-7">
                            <Button>
                                <Link href="/">
                                    Get for free
                                </Link>
                            </Button>
                            <Button variant="link">
                                <Link href="/">
                                    Learn more
                                </Link>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="md:h-[648px] relative flex items-center justify-center md:flex-1 mt-20 md:mt-0 ">
                        <motion.img
                            src={cogImage.src}
                            alt="Cog Shape"
                            className="md:absolute md:h-3/4 lg:h-full md:w-auto md:max-w-none z-10"
                            animate={{
                                translateY: [-20, 20],
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                        />
                        <motion.img
                            src={cynlinderImage.src}
                            width={200}
                            height={200}
                            alt="Cylinder Shape"
                            className="hidden md:block md:absolute -top-8 -left-20"
                            style={{
                                translateY: translateY,
                            }}
                        />
                        <motion.img
                            src={noodleImage.src}
                            width={200}
                            height={200}
                            alt="Noodle Shape"
                            className="hidden md:block md:absolute -bottom-28 -right-10 rotate-30"
                            style={{
                                translateY: translateY,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero

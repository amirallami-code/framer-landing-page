"use client";

import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {ArrowRight, Cog} from "lucide-react";
import cogImage from "@/public/shapes/cog.png";
import cynlinderImage from "@/public/shapes/cylinder.png";
import noodleImage from "@/public/shapes/noodle.png";

const Hero = () => {
    return (
        <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
            <div className="container">
                <div className="w-full md:flex items-center justify-between">
                    <div className="md:w-[478px] z-20">
                        <span className="tag">
                            Version 2.0 is here!
                        </span>
                        <h1 className="title">
                            Pathway to productivity
                        </h1>
                        <p className="description">
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
                    <div className="mt-20 md:mt-0 md:h-[648px] flex items-center justify-center md:flex-1 relative">
                        <Image src={cogImage} alt="Cog Shape" className="md:absolute md:h-full md:w-auto md:max-w-none z-10"/>
                        <Image src={cynlinderImage} width={200} height={200} alt="Cylinder Shape" className="hidden md:block -top-8 -left-20 md:absolute" />
                        <Image src={noodleImage} width={200} height={200} alt="Noodle Shape" className="hidden md:block -bottom-28 -right-10 md:absolute rotate-30" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero

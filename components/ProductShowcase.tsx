'use client';

import {useRef} from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion';
import LogoTicker from "@/components/LogoTicker";
import productImage from "@/public/product-picture.png";
import pyramidShape from "@/public/shapes/pyramid.png";
import tubeShape from "@/public/shapes/tube.png";

const ProductShowcase = () => {
    const showcaseRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: showcaseRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <>
            <LogoTicker />

            <section ref={showcaseRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-20 overflow-x-clip">
                <div className="container">
                    <div className="heading-wrapper">
                        <div className="flex items-center justify-center">
                            <span className="tag">Boost your productivity</span>
                        </div>
                        <h2 className="title">A more effective way to track progress</h2>
                        <p className="description">
                            Effortlessly turn your ideas into a fully functional,
                            responsive, SaaS website in just minutes with this template.
                        </p>
                    </div>
                    <div className="relative">
                        <Image src={productImage} alt="Product Image" className="mt-10"/>
                        <motion.img
                            src={pyramidShape.src}
                            alt="Pyramid Shape"
                            width={262}
                            height={262}
                            className="hidden md:block absolute -right-36 -top-32"
                            style={{
                                translateY,
                            }}
                        />
                        <motion.img
                            src={tubeShape.src}
                            alt="Tube Shape"
                            width={262}
                            height={262}
                            className="hidden md:block absolute -left-36 bottom-24"
                            style={{
                                translateY,
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductShowcase

"use client";

import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight} from "lucide-react";
import starImage from "@/public/shapes/star.png";
import springImage from "@/public/shapes/spring.png";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

const CallToAction = () => {
    const callToActionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: callToActionRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
       <section ref={callToActionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-10 md:py-24 overflow-x-clip">
           <div className="container">
               <div className="heading-wrapper relative">
                   <h2 className="title">Sign up for free today</h2>
                   <p className="description">
                       Celebrate the joy of accomplishment with an app designed to track progress and motivate your efforts.
                   </p>
                   <motion.img
                       src={starImage.src}
                       alt="Star Shape"
                       width={360}
                       className="hidden md:block -top-[156px] -left-[400px] md:absolute"
                       style={{
                           translateY,
                       }}
                   />
                   <motion.img
                       src={springImage.src}
                       alt="Spring Shape"
                       width={300}
                       className="hidden md:block -top-[19px] -right-[331px] md:absolute"
                       style={{
                           translateY,
                       }}
                   />
               </div>
               <div className="flex items-center justify-center gap-1 mt-10">
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
       </section>
    )
}
export default CallToAction
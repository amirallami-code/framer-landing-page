"use client";

import avatar1 from "@/public/avatar/avatar-1.png";
import avatar2 from "@/public/avatar/avatar-2.png";
import avatar3 from "@/public/avatar/avatar-3.png";
import avatar4 from "@/public/avatar/avatar-4.png";
import avatar5 from "@/public/avatar/avatar-5.png";
import avatar6 from "@/public/avatar/avatar-6.png";
import avatar7 from "@/public/avatar/avatar-7.png";
import avatar8 from "@/public/avatar/avatar-8.png";
import avatar9 from "@/public/avatar/avatar-9.png";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: avatar1.src,
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: avatar2.src,
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: avatar3.src,
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: avatar4.src,
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: avatar5.src,
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: avatar6.src,
        name: "Riley Smith",
        username: "@rileysmith1",
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: avatar7.src,
        name: "Jordan Patels",
        username: "@jpatelsdesign",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: avatar8.src,
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: avatar9.src,
        name: "Casey Harper",
        username: "@casey09",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({text, imageSrc, name, username}) => (
                            <div className="card p-6" key={username}>
                                <div>{text}</div>
                                <div className="flex items-center gap-2 mt-5">
                                    <div>
                                        <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold tracking-tight leading-5">{name}</div>
                                        <div className="text-sm leading-5 tracking-tight text-gray-700">{username}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="flex justify-center">
                        <span className="tag">Testimonials</span>
                    </div>
                    <h2 className="title mt-5">What our users say</h2>
                    <p className="description">
                        From intuitive design to powerful features, our app has become an essential tool for users around the world.
                    </p>
                </div>
                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn}  duration={15}/>
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19}/>
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17}/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
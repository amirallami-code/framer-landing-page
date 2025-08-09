"use client";

import {twMerge} from "tailwind-merge";
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
    return (
        <section className="py-24">
            <div className="container">
                <div className="heading-wrapper">
                    <h2 className="title">Pricing</h2>
                    <p className="description">
                        Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
                    </p>
                </div>
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
                        <div key={title} className={twMerge("card", inverse && "border-black bg-black text-white")}>
                            <div className="flex justify-between items-center">
                                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>{title}</h3>
                                {popular && (
                                    <div className="inline-flex text-sm px-3.5 py-1.5 rounded-lg border border-white/20">
                                        <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-baseline gap-1 mt-6">
                                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                                <span className={twMerge("tracking-tight font-bold text-black/50", inverse && "text-white/50")}>/month</span>
                            </div>
                            <Button
                                className="w-full mt-8"
                                {...(inverse ? { variant: "secondary" } : {})}
                            >
                                <Link href={"/"}>
                                    {buttonText}
                                </Link>
                            </Button>
                            <ul className="flex flex-col gap-5 mt-8">
                                {features.map(feature => (
                                    <li key={feature} className="text-sm flex items-center gap-4">
                                        <Check className="w-5 h-5"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Pricing


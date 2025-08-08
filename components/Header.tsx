"use client"

import AppLogo from '@/public/framer-logo.png';
import { ArrowRight, Menu, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent, SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Customers", href: "/customers" },
    { label: "Updates", href: "/updates" },
    { label: "Help", href: "/help" },
    { label: "GitHub", href: "https://github.com/amirallami-code", external: true },
];


const isExternal = (href: string) => /^https?:\/\//.test(href);

const Header = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="bg-black text-white text-center z-50">
                <Link href="/public" className="flex justify-center items-center gap-2 py-3.5">
                    <p className="text-gray-400 hidden md:block">
                        Streamline your workflows and boost your productivity
                    </p>
                    <span className="text-white">Get started for free</span>
                    <ArrowRight className="w-4 h-4 mt-0.5" />
                </Link>
            </div>

            <header className="sticky top-0 z-50 glass-morphism">
                <nav className="container h-[70px] flex items-center justify-between bg-none">
                    <div>
                        <Link href="/public" className="flex items-center gap-3">
                            <Image src={AppLogo} alt="Framer Logo" height={40} width={40} />
                        </Link>
                    </div>

                    <div>
                        <div className="flex md:hidden items-center justify-center">
                            <Sheet>
                                <SheetTrigger asChild className="relative cursor-pointer">
                                    <button aria-label="Open menu" className="flex items-center justify-center">
                                        <Menu className="w-5 h-5 text-black" />
                                        <span className="absolute w-14 h-14 opacity-0"></span>
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="bg-black text-white border-black">
                                    <SheetHeader className="px-8 pb-0 pt-10">
                                        <SheetTitle className="text-white">Menu</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid flex-1 auto-rows-min gap-6 p-4 mx-4">
                                        {navLinks.map(({ label, href, external }) => {
                                            const isActive = pathname === href || (pathname === "/" && href === "/");
                                            const className = "flex flex-row gap-2 hover:bg-transparent";
                                            const id = isActive ? "active-tab" : "";

                                            return external ? (
                                                <a
                                                    key={label}
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={className}
                                                >
                                                    <ArrowUpRight className="w-4 h-4 mt-0.5" />
                                                    {label}
                                                </a>
                                            ) : (
                                                <Link key={label} href={href} id={id} className={className}>
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <SheetFooter>
                                        <SheetDescription className="text-gray-400">
                                            Streamline your workflows and boost your productivity
                                        </SheetDescription>
                                        <SheetClose asChild>
                                            <Button variant="default" className="dark" asChild>
                                                <Link href="/">Get for free</Link>
                                            </Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className="hidden md:block">
                            <NavigationMenu className="gap-3">
                                {navLinks.map(({ label, href, external }) => {
                                    const isActive = pathname === href;
                                    const className = "hover:bg-transparent";
                                    const id = isActive ? "active-tab" : "";

                                    return (
                                        <NavigationMenuItem key={label}>
                                            {external ? (
                                                <NavigationMenuLink asChild>
                                                    <Button variant="link" className={className}>
                                                        <a
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {label}
                                                        </a>
                                                    </Button>
                                                </NavigationMenuLink>
                                            ) : (
                                                <NavigationMenuLink asChild>
                                                    <Button variant="link" className={className}>
                                                        <Link href={href} id={id}>
                                                            {label}
                                                        </Link>
                                                    </Button>
                                                </NavigationMenuLink>
                                            )}
                                        </NavigationMenuItem>
                                    );
                                })}

                                <NavigationMenuItem>
                                    <Button className="px-4" asChild>
                                        <Link href="/">Get for free</Link>
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenu>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header
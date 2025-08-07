"use client"

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import AppLogo from '@/public/framer-logo.png';
import { ArrowRight, Menu } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
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
import { Button } from "@/components/ui/button"

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
            <div className="bg-black text-white text-center py-3.5">
                <Link href="/public" className="flex justify-center items-center gap-2">
                    <span>Get started for free</span>
                    <ArrowRight className="w-4 h-4 mt-0.5" />
                </Link>
            </div>

            <header className="sticky top-0 z-50">
                <nav className="container h-16 flex items-center justify-between">
                    <div>
                        <Link href="/public">
                            <Image src={AppLogo} alt="Framer Logo" height={40} width={40} />
                        </Link>
                    </div>

                    <div>
                        <div className="block md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button aria-label="Open menu">
                                        <Menu className="w-5 h-5" />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="bg-black text-white border-black">
                                    <SheetHeader className="px-8 pb-0 pt-10">
                                        <SheetTitle className="text-white">Menu</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid flex-1 auto-rows-min gap-6 p-4 mx-4">
                                        {navLinks.map(({ label, href, external }) => {
                                            const isActive = pathname === href || (pathname === "/" && href === "/");
                                            const className = isActive ? "active-tab" : "";

                                            return external ? (
                                                <a
                                                    key={label}
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={className}
                                                >
                                                    {label}
                                                </a>
                                            ) : (
                                                <Link key={label} href={href} className={className}>
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <SheetFooter>
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
                                    const className = isActive ? "active-tab" : "";

                                    return (
                                        <NavigationMenuItem key={label}>
                                            {external ? (
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        href={href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={className}
                                                    >
                                                        {label}
                                                    </a>
                                                </NavigationMenuLink>
                                            ) : (
                                                <NavigationMenuLink asChild>
                                                    <Link href={href} className={className}>
                                                        {label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            )}
                                        </NavigationMenuItem>
                                    );
                                })}

                                <NavigationMenuItem>
                                    <Button className="px-4 !rounded-lg" asChild>
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
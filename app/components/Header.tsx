import Link from "next/link";
import Image from 'next/image';
import AppLogo from '@/public/framer-logo.png';
import { ArrowRight, Menu } from "lucide-react";

const Header = () => {
    return (
        <header>
            <Link href="/" className="flex justify-center items-center gap-2 py-4 bg-black text-white">
                <p>Get started for free</p>
                <ArrowRight className="w-5 h-5" />
            </Link>

            <nav className="container">
                <div>
                    <Link href="/">
                        <Image src={AppLogo} alt="Framer Logo" height={40} width={40} />
                    </Link>
                </div>

                <div>
                    di
                </div>
            </nav>
        </header>
    )
}
export default Header

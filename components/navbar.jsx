"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    const menus = [
        { name: "Home", path: "/" },
        { name: "Assessment", path: "/assessment" },
    ];

    return (
        <div>
            <nav className="fixed top-0 z-1000 flex items-center bg-white text-[#1D2B3F] w-full px-10 py-4 justify-between shadow-sm top-page">
                <Link href="/" className="flex items-center logo">
                    <Image
                        src="/logo.svg"
                        alt="FinPersona Logo"
                        width={50}
                        height={50}
                    />
                    <span className="text-lg font-bold pl-2 text-logo">FinPersona</span>
                </Link>

                <ul className="flex gap-8 font-bold text-[#1D2B3F] navbar">
                    {menus.map((menu) => (
                        <li key={menu.path}>
                            <Link
                                href={menu.path}
                                className={`text-center text-link ${pathname === menu.path
                                        ? "active-link" : ""
                                    }`}
                            >
                                {menu.name}
                                <div className="border-link"></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
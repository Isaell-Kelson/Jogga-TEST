"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

export default function Header() {
    return (
        <nav className="fixed top-0 w-full h-20 bg-blue-900 flex items-center justify-between px-4 md:px-8 lg:px-28 z-30">
            <div className="flex-shrink-0">
                <Image src={Logo} alt="logo" className="w-20 md:w-32" />
            </div>
            <div className="flex items-center">
                <ul className="hidden md:flex space-x-6 lg:space-x-12 text-white">
                    <li>
                        <a href="#products" className="hover:text-gray-400 transition-colors duration-200">Products</a>
                    </li>
                    <li>
                        <a href="#solutions" className="hover:text-gray-400 transition-colors duration-200">Solutions</a>
                    </li>
                    <li>
                        <a href="#resources" className="hover:text-gray-400 transition-colors duration-200">Resources</a>
                    </li>
                    <li>
                        <a href="#pricing" className="hover:text-gray-400 transition-colors duration-200">Pricing</a>
                    </li>
                </ul>
                <div className="ml-4">
                    <Button className="bg-green-400 rounded p-2 lg:p-3">
                        <span className="text-white">Fale pelo Whatsapp →</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

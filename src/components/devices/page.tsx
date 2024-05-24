import React from "react";
import { Button } from "@nextui-org/react";

export default function Devices() {
    return (
        <section
            className="relative bg-blue-900"
            style={{
                backgroundImage: `url("/background-2.svg")`,
                backgroundSize: "25%",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex justify-center items-center ml-20">
                <div className="text-white text-center p-20 max-w-7xl">
                    <h1 className="text-5xl font-bold mt-11">Your work, everywhere you are</h1>
                    <p className="text-base mt-10 mb-4">
                        Access your notes from your computer, phone or tablet by synchronising with various services,
                        including whitepace, Dropbox and <br/> OneDrive. The app is available on Windows, macOS, Linux,
                        Android and iOS. A terminal app is also available!
                    </p>
                    <Button className="md:w-52 mt-10 h-16 bg-blue-400 text-white">Entrar em contato →</Button>
                </div>
            </div>
        </section>
    );
}

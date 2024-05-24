import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Extension() {
    return (
        <section className="relative bg-blue-900 w-full h-full mt-16 md:p-12 bg-no-repeat"
                 style={{
                     backgroundImage: `url("/vector.svg")`,
                     backgroundSize: "24%",
                     backgroundPositionX: "88%",
                     backgroundPosition: "right",
                 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-6 md:p-12 lg:p-16 relative">
                <div className="flex justify-center">
                    <Image
                        src="/section-2.svg"
                        width={500}
                        height={500}
                        alt="Section Image"
                    />
                </div>

                <div className="relative text-white mt-2 md:mt-0 md:ml-10">
                    <h1 className="text-4xl md:text-6xl font-bold mt-10 md:mt-32">
                        Use as Extension
                    </h1>

                    <div className="mt-1 md:mt-2 md:mb-10">
                        <p className="mt-0 md:mt-1">
                            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take
                            screenshots as notes.
                        </p>
                        <Button className="w-full md:w-52 h-16 bg-blue-400 text-white mt-5">
                            Entrar em contato →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

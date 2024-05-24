import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Customize() {
    return (
        <section className="relative w-full h-full mt-16" style={{ marginBottom: '4rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="mt-10 md:mt-0 md:ml-10 bg-no-repeat"
                     style={{
                         backgroundImage: `url("/vector.svg")`,
                         backgroundSize: "55%",
                         backgroundPositionX: "",
                         backgroundPosition: "left",
                         backgroundPositionY: "38%",
                     }}>
                    <h1 className="text-4xl md:text-6xl font-bold mt-8 md:mt-0">Customize it to <br/> your needs</h1>
                    <p className="mt-4 md:mt-10">
                        Customise the app with plugins, custom themes and multiple text editors <br/> (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <div className="mt-4 md:mt-10">
                        <Button className="w-full md:w-52 h-16 bg-blue-400 text-white">
                            Entrar em contato →
                        </Button>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-4 md:mr-12 rounded-none">
                    <Image
                        src="/section-3.svg"
                        width="0"
                        height="0"
                        alt=""
                        className="w-full h-full rounded-none"
                    />
                </div>
            </div>
        </section>
    );
}

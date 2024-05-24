"use client";
import React from "react";
import {Button} from "@nextui-org/react";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white text-center py-4">
            <h1 className="text-5xl font-bold mt-24">
                Try Whitepace <br/> today
            </h1>
            <p className="font-light text-md p-6">
                Get started for free. <br/> Add your team as your needs grow.
            </p>

            <Button className="w-full md:w-52 h-16 bg-blue-400 text-white">
                Entrar em contato →
            </Button>
            <p className="font-light text-sm p-5">
                Todos os direitos reservados. Desenvolvido por Jogga Digital Performance.
            </p>
        </footer>
    )
}
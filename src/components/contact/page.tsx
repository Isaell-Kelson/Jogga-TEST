import React, { useState, ChangeEvent } from "react";
import { Button, Input } from "@nextui-org/react";
import axios from 'axios';
import InputMask from "@mona-health/react-input-mask";


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => { // Tipo explícito para o evento 'e'
        setPhone(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/contact', {
                name,
                email,
                phone,
            });
            console.log('Resposta do servidor:', response.data);
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <section className="relative">
            <div
                className="w-full h-screen md:h-auto bg-cover bg-center"
                style={{
                    backgroundImage: `url("/background-1.svg")`,
                    height: "calc(80vh - 0px)",
                    width: "100%",
                    position: "relative",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("/background-1.svg")`,
                        marginTop: '64px',
                    }}
                ></div>

                <div className="h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-16 gap-8 md:gap-16 relative z-10 space-y-10 md:space-y-0">
                    <div className="text-center md:text-left mt-28 sm:mt-28 md:mt-0">
                        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mt-8 md:mt-0">
                            Get More Done with <br /> whitepace
                        </h1>
                        <p className="text-white mt-5">
                            Project management software that enables your teams to collaborate, plan, <br /> analyze and manage everyday tasks
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-96 mt-10 md:mt-0">
                        <p className="text-white text-xl text-center md:text-left">Fill the form to get in touch</p>
                        <div>
                            <p className="text-white">Nome</p>
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                labelPlacement="outside"
                                fullWidth
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <p className="text-white">E-mail</p>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    labelPlacement="outside"
                                    fullWidth
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-white">Telefone</p>
                                <InputMask
                                    className="w-full rounded-2xl h-10"
                                    mask="(99) 99999-9999"
                                    onChange={handlePhoneChange}
                                    value={phone}
                                />
                            </div>
                        </div>

                        <div>
                            <Button className="w-full md:w-auto bg-blue-400 h-12 text-white" onClick={handleSubmit}>
                                Entrar em contato →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

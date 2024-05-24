"use client";
import React from "react";
import Image from "next/image";
import MySwiper from "../swiper/Slider";

const Sponsors: React.FC = () => {
    return (
        <section className="relative mt-24">
            <h1 className="text-5xl font-bold text-center mb-8">Our sponsors</h1>
            <div className="flex flex-wrap justify-center gap-16 md:gap-64 mt-8">
                <Image
                    src="/apple.svg"
                    width={60}
                    height={0}
                    alt="Apple"
                />
                <Image
                    src="/microsoft.svg"
                    width={160}
                    height={0}
                    alt="Microsoft"
                />
                <Image
                    src="/Slack.svg"
                    width={160}
                    height={0}
                    alt="Slack"
                />
                <Image
                    src="/Google.svg"
                    width={160}
                    height={0}
                    alt="Google"
                />
            </div>
            <h1 className="text-5xl font-bold text-center mt-48">What Our Clients Say</h1>
            <div className="flex justify-center mt-8">
                <MySwiper />
            </div>
        </section>
    );
};

export default Sponsors;

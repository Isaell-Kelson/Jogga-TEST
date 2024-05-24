"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const MySwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <section className="mt-14">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper min-h-72"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                <SwiperSlide
                    className="relative bg-white rounded-xl mt-2 px-4 py-4 shadow-lg max-w-96 max-h-96 mb-36"
                >
                    <div className="h-96">
                        <Image
                            className="relative"
                            src="/Comment.svg"
                            width="400"
                            height="100"
                            alt=""
                        />
                        <h2 className="text-xl font-semibold mt-16 ml-32">
                            Oberon Shaw, MCH
                        </h2>
                        <p className="text-sm ml-32 mt-3">
                            Head of Talent Acquisition, North America
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="relative bg-blue-400 rounded-xl mt-2 px-4 py-4 shadow-lg max-w-96 max-h-96"
                >
                    <div className="h-96">
                        <Image
                            className="relative"
                            src="/Comment-2.svg"
                            width="400"
                            height="100"
                            alt=""
                        />
                        <h2 className="text-blue-900 text-xl font-semibold mt-16 ml-32">
                            Oberon Shaw, MCH
                        </h2>
                        <p className="text-white text-sm font-extralight ml-32 mt-3">
                            Head of Talent Acquisition, North America
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="relative bg-blue-400 rounded-xl mt-2 px-4 py-4 shadow-lg max-w-96 max-h-96"
                >
                    <div className="h-96">
                        <Image
                            className="relative"
                            src="/Comment-2.svg"
                            width="400"
                            height="100"
                            alt=""
                        />
                        <h2 className="text-blue-900 text-xl font-semibold mt-16 ml-32">
                            Oberon Shaw, MCH
                        </h2>
                        <p className="text-white text-sm font-extralight ml-32 mt-3">
                            Head of Talent Acquisition, North America
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default MySwiper;

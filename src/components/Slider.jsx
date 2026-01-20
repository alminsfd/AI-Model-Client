import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Qwen3 from '../assets/Qwen3.png';
import claude from '../assets/caude.jpg';
import grok from '../assets/grok.jpg';
import deepseek from '../assets/deekseek.webp';
import { FaArrowRight } from 'react-icons/fa';

const Models = [
    { img: Qwen3, name: 'Qwen3' },
    { img: claude, name: 'Claude' },
    { img: grok, name: 'Grok' },
    { img: deepseek, name: 'DeepSeek' },
];

const Slider = () => {
    return (
        <section className="relative mt-24">
            <div className="my-12 max-w-7xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-10 
                       bg-linear-to-r from-sky-500 via-cyan-500 to-blue-500 
                       bg-clip-text text-transparent">
                    Trending Models
                </h2>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12 max-h-[70vh]"
                >
                    {Models.map((toy, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className="group relative bg-white rounded-2xl overflow-hidden 
                           shadow-lg hover:-translate-y-2 hover:shadow-2xl 
                           transition-all duration-300"
                            >
                                {/* Image */}
                                <img
                                    src={toy.img}
                                    alt={toy.name}
                                    className="w-full h-[60vh] md:h-[50vh] object-cover 
                             group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay */}
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/70 
                             via-black/30 to-transparent opacity-0 
                             group-hover:opacity-100 transition-opacity duration-500 
                             flex flex-col items-center justify-end p-6 gap-3"
                                >
                                    <h3 className="text-white text-xl font-semibold">
                                        {toy.name}
                                    </h3>

                                    <Link to='/viewmodels'
                                        className="px-5 py-2 rounded-full bg-sky-500 text-white 
                               hover:bg-sky-600 transition"
                                    >
                                        <div className='flex justify-center items-center gap-1' >
                                            Explore Model <FaArrowRight />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Scroll Hint */}
                <div className="flex justify-center mt-6 animate-bounce">
                    <span className="text-cyan-500 text-3xl font-semibold">
                        Scroll Down  ↓
                    </span>
                </div>
            </div>

            {/* Bottom Fade (Next Section Hint) */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 
                      bg-linear-to-t from-white to-transparent" />
        </section>
    );
};

export default Slider;

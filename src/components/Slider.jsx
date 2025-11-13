import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Qwen3 from '../assets/Qwen3.png';
import claude from '../assets/caude.jpg';
import grok from '../assets/grok.jpg';
import deepseek from '../assets/deekseek.webp';


const Models = [
    { img: Qwen3, name: 'Qwen3' },
    { img: claude, name: 'Claude' },
    { img: grok, name: 'grok' },
    { img: deepseek, name: 'deepseek' },
];

const Slider = () => {
    return (
        <div className='mt-30' >
            <div className="my-12 max-w-7xl mx-auto px-4">

                <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-8 bg-linear-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Trending Model
                </h2>

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
                    className="pb-10"
                >
                    {Models.map((toy, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <img
                                    src={toy.img}
                                    alt={toy.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                                    <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                                        {Models.name}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
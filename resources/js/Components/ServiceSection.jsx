import React, { useEffect, useState, useCallback, useRef } from "react";
import ServiceCard from "./ServiceCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function ServiceSection() {
    const [services, setServices] = useState([]);

    const getServices = () => {
        fetch('/api/services', {
            method: 'POST'
        }).then(response => {
            return response.json();
        }).then(services => {
            setServices(services);
        });
    }

    useEffect(() => {
        getServices();
    }, []);

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <section>
                <div>
                    <p className="font-normal mb-5">
                        Вы можете прокрутить список услуг мышью или с клавиатуры (клик мышью внутри области карточек услуг + клавиши &laquo;влево&raquo; и &laquo;вправо&raquo;).<br />
                        Кнопка &laquo;Подробнее об услуге&raquo; открывает страницу услуги с более подробным описанием.<br />
                        Кнопка &laquo;Заказать&raquo; приведет вас на форму анкеты для заказа услуги.
                    </p>
                    <div className="relative flex flex-row flex-nowrap">
                        <Swiper
                            ref={sliderRef}
                            spaceBetween={16}
                            loop={true}
                            breakpoints={{
                                452: {
                                    slidesPerView: 1
                                },
                                903: {
                                    slidesPerView: 2
                                },
                                1354: {
                                    slidesPerView: 3
                                },
                                1805: {
                                    slidesPerView: 4
                                }
                            }}
                        >
                            {
                                services.map(service => (
                                    <SwiperSlide>
                                        <ServiceCard card={service} short={true} key={service.slug} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    <div className="flex flex-row justify-between">
                        <a href='/services' className='px-7 py-3.5 rounded-xl bg-primary text-white text-lg font-bold'>
                            Посмотреть все услуги
                        </a>
                        <div className="flex flex-row justify-start">
                            <button className="w-24 h-12 border border-primary rounded-l-xl px-6 hover:bg-primary" onClick={handlePrev}
                                onMouseOver={event => (document.getElementById('service-arrow-prev').src = '/assets/images/hover-arrow-left.png')}
                                onMouseOut={event => (document.getElementById('service-arrow-prev').src = '/assets/images/arrow-left.png')}
                            >
                                <img
                                    id='service-arrow-prev'
                                    src="/assets/images/arrow-left.png"
                                    onMouseOver={event => (event.target.src = '/assets/images/hover-arrow-left.png')}
                                    onMouseOut={event => (event.target.src = '/assets/images/arrow-left.png')}
                                    alt="" />
                            </button>
                            <button className="w-24 h-12 border border-primary rounded-r-xl px-6 hover:bg-primary" id="service-next" onClick={handleNext}
                                onMouseOver={event => (document.getElementById('service-arrow-next').src = '/assets/images/hover-arrow-right.png')}
                                onMouseOut={event => (document.getElementById('service-arrow-next').src = '/assets/images/arrow-right.png')}
                            >
                                <img
                                    id='service-arrow-next'
                                    src="/assets/images/arrow-right.png"
                                    onMouseOver={event => (event.target.src = '/assets/images/hover-arrow-right.png')}
                                    onMouseOut={event => (event.target.src = '/assets/images/arrow-right.png')}
                                    alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

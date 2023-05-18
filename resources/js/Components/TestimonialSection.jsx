import React, { useEffect, useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper"
import { Pagination } from "swiper"
import TestimonialCard from "./TestimonialCard"

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default function TestimonialSection() {
	const [testimonials, setTestimonials] = useState([]);

	const getTestimonials = () => {
		fetch('/api/testimonials', {
			method: 'POST'
		}).then(response => {
			return response.json();
		}).then(testimonials => {
			setTestimonials(testimonials);
		});
	}

	useEffect(() => {
		getTestimonials();
	}, []);

	const testimonialSliderRef = useRef(null);

	const handlePrev = useCallback(() => {
		if (!testimonialSliderRef.current) return;
		testimonialSliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!testimonialSliderRef.current) return;
		testimonialSliderRef.current.swiper.slideNext();
	}, []);

	return (
		<>
			<section>
				<div className="grid grid-cols-12">
					{/* Левая часть секции */}
					<div className="
						xs:col-span-12
						md:col-span-10
						lg:col-span-9
						xl:col-span-7
						2xl:col-span-6
					">
						{/* Свайпер */}
						<div className="mb-9">
							<Swiper
								ref={testimonialSliderRef}
								pagination={{
									el: '#testimonials-paging',
									clickable: true,
									type: 'bullets',
									// pauseOnMouseEnter: true,
									// disableOnInteraction: false
								}}
								modules={[Pagination, Autoplay]}
								autoplay={{ delay: 3000 }}
								loop={false}
								slidesPerView={1}
							>
								{
									testimonials.map(testimonial =>
										<SwiperSlide key={testimonial.sort_no} style={{ height: 'auto' }} className="p-4">
											<TestimonialCard testimonial={testimonial} />
										</SwiperSlide>
									)
								}
							</Swiper>
						</div>
						{/* Пейджинг и навигация */}
						<div className="flex xs:flex-col md:flex-row xs:gap-y-4 justify-between">
							{/* Пейджинг */}
							<div className="text-center" id="testimonials-paging" />
							{/* Кнопки навигации */}
							<div className="hidden flex flex-row justify-start items-center">
								<button className="w-24 h-12 border border-primary rounded-l-xl px-6 hover:bg-primary" id="testimonial-prev" onClick={handlePrev}
									onMouseOver={event => (document.getElementById('testimonial-arrow-prev').src = '/assets/images/hover-arrow-left.png')}
									onMouseOut={event => (document.getElementById('testimonial-arrow-prev').src = '/assets/images/arrow-left.png')}
								>
									<img
										id='testimonial-arrow-prev'
										src="/assets/images/arrow-left.png"
										onMouseOver={event => (event.target.src = '/assets/images/hover-arrow-left.png')}
										onMouseOut={event => (event.target.src = '/assets/images/arrow-left.png')}
										alt="" />
								</button>
								<button className="w-24 h-12 border border-primary rounded-r-xl px-6 hover:bg-primary" id="testimonial-next" onClick={handleNext}
									onMouseOver={event => (document.getElementById('testimonial-arrow-next').src = '/assets/images/hover-arrow-right.png')}
									onMouseOut={event => (document.getElementById('testimonial-arrow-next').src = '/assets/images/arrow-right.png')}
								>
									<img
										id='testimonial-arrow-next'
										src="/assets/images/arrow-right.png"
										onMouseOver={event => (event.target.src = '/assets/images/hover-arrow-right.png')}
										onMouseOut={event => (event.target.src = '/assets/images/arrow-right.png')}
										alt="" />
								</button>
							</div>
						</div>
					</div>
					<div className="
						sm:max-xl:hidden
						xl:col-start-9 sm:col-span-4
						2xl:col-start-8 2xl:col-span-5
					">
						<img src='/assets/images/testimonials-background.png' alt="" className="float-right" />
					</div>
				</div>
			</section>
		</>
	);
}

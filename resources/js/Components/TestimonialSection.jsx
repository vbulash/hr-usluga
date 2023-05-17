import React, { useEffect, useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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
				<div className="grid grid-cols-12">
					{/* Левая часть секции */}
					<div className="col-span-5">
						{/* Свайпер */}
						<div className="mb-9">
							<Swiper
								ref={sliderRef}
								spaceBetween={16}
								loop={false}
								slidesPerView={1}
							>
								{
									testimonials.map(testimonial =>
										<SwiperSlide key={testimonial.sort_no} style={{ height: 'auto' }} className="p-4">
											<div className="px-7 py-7 shadow-lg rounded-xl">
												{testimonial.testimonial}
											</div>
										</SwiperSlide>
									)
								}
							</Swiper>
						</div>
						{/* Кнопки свайпера */}
						<div className="flex flex-row xs:gap-y-4 justify-between">
							<div className="xs:max-md:hidden md:flex md:flex-col md:justify-center" id='testimonials-paging'></div>
							<div className="flex flex-row justify-start items-center">
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
				</div>
			</section>
		</>
	);
}

import React, { useEffect, useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from '@inertiajs/react'

// Import Swiper styles
import 'swiper/css';

import PostCard from "./PostCard";

export default function PostSection() {
	const [posts, setPosts] = useState([]);

	const getPosts = () => {
		fetch('/api/posts', {
			method: 'POST'
		}).then(response => {
			return response.json();
		}).then(posts => {
			setPosts(posts);
		});
	}

	useEffect(() => {
		getPosts();
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
					<div className="mb-9">
						<Swiper
							ref={sliderRef}
							spaceBetween={16}
							loop={false}
							slidesPerView={1}
							breakpoints={{
								768: {
									slidesPerView: 2
								},
								1280: {
									slidesPerView: 3
								},
								1536: {
									slidesPerView: 4
								},
							}}
						>
							{
								posts.map(post =>
									<SwiperSlide key={post.slug}>
										<PostCard post={post} full={false} className="h-full" />
									</SwiperSlide>
								)
							}
						</Swiper>
					</div>
					<div className="flex xs:flex-col-reverse sm:flex-row xs:gap-y-4 justify-between">
						<Link href={route('posts.list')} method="get" as="button"
							className='px-7 py-3.5 rounded-xl bg-primary text-white text-lg font-bold'>
							Посмотреть все новости
						</Link>
						<div className="flex flex-row justify-start">
							<button className="w-24 h-12 border border-primary rounded-l-xl px-6 hover:bg-primary" id="post-prev" onClick={handlePrev}
								onMouseOver={event => (document.getElementById('post-arrow-prev').src = '/assets/images/hover-arrow-left.png')}
								onMouseOut={event => (document.getElementById('post-arrow-prev').src = '/assets/images/arrow-left.png')}
							>
								<img
									id='post-arrow-prev'
									src="/assets/images/arrow-left.png"
									onMouseOver={event => (event.target.src = '/assets/images/hover-arrow-left.png')}
									onMouseOut={event => (event.target.src = '/assets/images/arrow-left.png')}
									alt="" />
							</button>
							<button className="w-24 h-12 border border-primary rounded-r-xl px-6 hover:bg-primary" id="post-next" onClick={handleNext}
								onMouseOver={event => (document.getElementById('post-arrow-next').src = '/assets/images/hover-arrow-right.png')}
								onMouseOut={event => (document.getElementById('post-arrow-next').src = '/assets/images/arrow-right.png')}
							>
								<img
									id='post-arrow-next'
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

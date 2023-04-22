import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect, useRef, useCallback } from 'react';
import Toast from '@/Components/Toast';
import PostCard from '@/Components/PostCard';
import LatestNewsSidebar from '@/Components/LatestNewsSidebar';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [first, setFirst] = useState({});

	const getPosts = () => {
		fetch('/api/posts', {
			method: 'POST'
		}).then(response => {
			return response.json();
		}).then(posts => {
			setPosts(posts);
			setFirst(posts[0]);
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
			<BodyHeader active="Новости" />

			<section>
				<div className="grid grid-cols-12">
					<div className="col-start-2 col-span-10">
						<div className='text-lg uppercase hover:text-primary'>
							<a href={route('home')}>Главная</a> / Новости
						</div>
						<h1 className='mb-11'>Новости</h1>

						<div className="grid grid-cols-10 gap-8">
							<div className="xs:max-lg:col-span-10 lg:col-span-7 2xl:col-span-7 me-11">
								<div className="mb-11">
									<PostCard post={first} />
								</div>
								<div className="mb-9">
									<Swiper
										className='flex items-stretch'
										ref={sliderRef}
										spaceBetween={16}
										loop={false}
										slidesPerView={1}
										autoHeight={false}
										breakpoints={{
											768: {
												slidesPerView: 1
											},
											1280: {
												slidesPerView: 2
											},
											1536: {
												slidesPerView: 3
											},
										}}
									>
										{
											posts.map(post =>
												post.slug != first.slug ? (
													<SwiperSlide key={post.slug} style={{ height: 'auto' }} className="p-4">
														<PostCard post={post} full={false} className="h-full" />
													</SwiperSlide>
												) : null
											)
										}
									</Swiper>
								</div>
								<div className="flex xs:flex-col-reverse sm:flex-row xs:gap-y-4 justify-between">
									<div>&nbsp;</div>
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

							<div className="xs:max-lg:hidden lg:max-2xl:col-span-3 2xl:col-span-3">
								<LatestNewsSidebar posts={posts} count={4} />
							</div>
						</div>
					</div>
				</div>
			</section >

			<Toast />

			<BodyFooter active="Новости" />
		</>
	);
}

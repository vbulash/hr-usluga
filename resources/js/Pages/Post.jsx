import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect, useRef, useCallback } from 'react';
import Toast from '@/Components/Toast';
import PostCard from '@/Components/PostCard';
import LatestNewsSidebar from '@/Components/LatestNewsSidebar';
import { Helmet } from 'react-helmet';

export default function Post({ post }) {
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

	const postUrl = (post.id == undefined ? null : route('posts.get', { post: post.id }))
	const descriptionText = (post.id == undefined ? null : encodeURIComponent('Проверка публикации'))

	return (
		<>
			<Helmet>
				<meta property="og:title" content={post.title} />
				<meta property="og:url" content={window.location.href} />
				<meta property="og:image" content={post.image} />
			</Helmet>

			<BodyHeader active="Новости" />

			<section>
				<div className="grid grid-cols-12">
					<div className="col-start-2 col-span-10">
						<div className='text-lg uppercase hover:text-primary'>
							<a href={route('home')}>Главная</a> /
							<a href={route('posts.list')}>Новости</a> /
							{post.title}
						</div>
						<h1 className='mb-11'>Новости</h1>

						<div className="grid grid-cols-10 gap-8">
							<div className="xs:max-lg:col-span-10 lg:col-span-7 2xl:col-span-7 me-11">
								<div className="mb-11" id='post-body'>
									<PostCard post={post} full={true} className="mb-20" />

									{/* Социальные сети */}
									<div className='mb-6 text-2xl font-bold'>Поделитесь публикацией в социальных сетях:</div>
									<div className='flex justify-start gap-4'>
										{/* https://t.me/share/url?url={url}&text={text} */}
										<a href={
											'https://t.me/share/url?url=' + postUrl +
											'&text=' + descriptionText
										} target="_blank">
											<img src="/assets/images/socials/telegram3.png" alt="" />
										</a>

										<a href={
											'https://vk.com/share.php?url=' +
											postUrl
										} target="_blank">
											<img src="/assets/images/socials/vk3.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<div className="xs:max-lg:hidden lg:max-2xl:col-span-3 2xl:col-span-3">
								<LatestNewsSidebar posts={posts} current={post} count={4} />
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

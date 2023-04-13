import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect, useRef, useCallback } from 'react';
import Toast from '@/Components/Toast';
import PostCard from '@/Components/PostCard';
import LatestNewsSidebar from '@/Components/LatestNewsSidebar';

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

	return (
		<>
			<BodyHeader active="Новости" />

			<section>
				<div className="grid grid-cols-12">
					<div className="col-start-2 col-span-10">
						<div className='text-lg uppercase hover:text-primary'>
							<a href="/">Главная</a> /
							<a href="/posts">Новости</a> /
							{post.title}
						</div>
						<h1 className='mb-11'>Новости</h1>

						<div className="grid grid-cols-10 gap-8">
							<div className="xs:max-lg:col-span-10 lg:col-span-7 2xl:col-span-7 me-11">
								<div className="mb-11">
									<PostCard post={post} full={true} />
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

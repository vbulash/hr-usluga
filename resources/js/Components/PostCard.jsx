import { Link } from '@inertiajs/react';

export default function PostCard({ post, full }) {
	// const body = full ?
	// 	post.description :
	// 	post.digest;
	const body = full ?
		post.description :
		'';

	const postUrl = (post.id == undefined ? null : route('posts.get', { post: post.id }))

	return (
		<div className={
			(full ? '' : 'shadow-lg rounded-xl ') + 'flex flex-col justify-between h-full'
		}>
			<div>
				<img src={post.image} className={
					full ? 'mb-5 rounded-xl' : 'mb-7 rounded-t-xl'
				} alt="" />
				<div className={
					(full ? '' : 'px-6 ') + 'pt-6'
				}>
					<div className="text-sm mb-7">{post.publish_at_date}</div>
					<div className={
						(full ? 'text-4xl' : 'text-xl') +
						' font-black mb-4'
					}>{post.title}</div>
					<div className="post-content mb-5" dangerouslySetInnerHTML={{ __html: body }} />
				</div>
			</div>
			<div className="flex justify-end content-center">
				{
					full ?
						(<div>&nbsp;</div>) :
						(
							<Link href={postUrl} method="get" as="button"
								className='px-6 py-3 rounded-tl-xl rounded-br-xl bg-primary text-white font-bold'>
								Читать полностью
							</Link>
						)
				}
			</div>
		</div>
	);
}

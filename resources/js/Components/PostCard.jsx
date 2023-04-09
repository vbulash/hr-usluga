export default function PostCard({ post }) {
	return (
		<div className="shadow-lg rounded-xl flex flex-col justify-between">
			<div>
				<img src={post.image} className="rounded-t-xl mb-7" alt="" />
				<div className=" px-6 pt-6">
					<div className="text-xl font-black mb-4">{post.title}</div>
					<div className="text-lg mb-9">{post.digest}</div>
					{/* <div dangerouslySetInnerHTML={{ __html: post.description }} /> */}
				</div>
			</div>
			<div className="flex justify-between content-center">
				<div className="text-sm ps-6 pt-3">{post.publish_at_date}</div>
				<a href="#" className="px-6 py-3 rounded-tl-xl rounded-br-xl bg-primary text-white font-bold">Читать полностью</a>
			</div>
		</div>
	);
}

import React from 'react';
import Calendar from '@/Components/Calendar';
import { Link } from '@inertiajs/react';

export default class LatestNewsSidebar extends React.Component {
	constructor(props) {
		super(props);
	}

	getLatest() {
		return this.props.posts.slice(0, this.props.count);
	};

	render() {
		return (
			<>
				<Calendar posts={this.props.posts} current={this.props.hasOwnProperty('current') ? this.props.current : null} />
				<div className="mt-12 py-7 px-11 rounded-xl shadow-xl bg-gradient-to-r from-fuchsia-800 to-primary ">
					<div className='mb-6 text-center text-xl font-bold text-white uppercase'>Свежие новости</div>
					{
						this.getLatest().map(post => (
							<div key={post.slug}>
								<div className={
									'mb-4 text-center bg-white text-black text-sm hover:font-bold px-4 py-8 rounded-xl' +
									((new URL(window.location.href)).pathname === '/posts/' + post.id ? ' font-bold' : '')
								}>
									<Link href={'/posts/' + post.id} method="get" as="button">
										{post.title}
									</Link>
								</div>
							</div>
						))
					}
				</div>
			</>
		)
	};
}

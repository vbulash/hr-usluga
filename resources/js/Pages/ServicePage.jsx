import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect } from 'react';
import Toast from '@/Components/Toast';
import ServiceOrder from '@/Components/ServiceOrder';

export default function ServicePage(props) {
	const [service, setService] = useState([]);

	const getService = () => {
		fetch('/api/services.slug/' + props.slug, {
			method: 'POST'
		}).then(response => {
			return response.json();
		}).then(service => {
			setService(service);
		});
	}

	useEffect(() => {
		getService();
	}, []);

	return (
		<>
			{
				(service == undefined || service.length == 0) ? null : (
					<>
						<BodyHeader active="Услуги"> </BodyHeader>

						<section>
							<div className="grid grid-cols-12 gap-4">
								<div className="col-start-2 col-span-10">
									<div className='text-lg uppercase hover:text-primary'>
										<a href={route('home')}>Главная</a> / Услуги
									</div>
									<h1>{service.title}</h1>
									<div className="grid grid-cols-10 gap-4 xl:bg-[url('/assets/images/service-background.png')] bg-contain bg-right-top bg-no-repeat">
										<div className='col-start-1 xs:max-xl:col-span-10 xl:col-span-5 flex flex-col items-start mt-6 mb-6 grow-0'>
											{
												service.tags.map(tag => (
													<div className='basis-0 mt-2.5 py-1 text-2xl uppercase' key={tag}>
														{tag}
													</div>
												))
											}
											<div className='card-body mr-4 mt-9 mb-5 grow-1'
												dangerouslySetInnerHTML={{ __html: service.description }} />

											<div className='flex xs:max-sm:flex-col sm:flex-row items-start gap-x-6'>
												<div className='border-2 border-primary w-52 h-14 xs:max-sm:mb-5 flex justify-center items-center font-bold text-primary rounded-bl-xl rounded-xl'>
													<span className='text-3xl font-black'>{service.price}</span>&nbsp;
													<span className='text-2xl'>&#8381;</span>
												</div>
												<ServiceOrder
													slug={service.slug}
													button='bg-primary w-52 h-14 flex justify-center items-center font-bold text-white text-lg rounded-bl-xl rounded-xl'
												/>
											</div>
										</div>
									</div>
								</div>
							</div >
						</section >

						<Toast />

						<BodyFooter active="Услуги" />
					</>
				)
			}
		</>
	);
}

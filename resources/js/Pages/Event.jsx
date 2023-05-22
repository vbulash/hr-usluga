import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Toast from '@/Components/Toast';

export default function Event({ event }) {
	return (
		<>
			{
				(event == undefined || event.length == 0) ? null : (
					<>
						<BodyHeader active="События"> </BodyHeader>

						<section>
							<div className="grid grid-cols-12 gap-4">
								<div className="col-start-2 col-span-10">
									<div className='text-lg uppercase hover:text-primary'>
										<a href={route('home')}>Главная</a> /&nbsp;
										<a href={route('events.list')}>События</a> /&nbsp;
										{event.title}
									</div>
									<h1>{event.title}</h1>
									<div className="grid grid-cols-12 xl:bg-[url('/assets/images/events-background.png')] bg-contain bg-right-top bg-no-repeat">
										<div className="xs:col-span-12 lg:col-span-8">
											<div className='flex flex-col'>
												<div className='mt-6 mb-4 grow-0'>
													<div className='card-body mr-4 mt-9 mb-5 grow-1'
														dangerouslySetInnerHTML={{ __html: event.description }} />
												</div>
												<div className="text-md">
													<div className="mb-2">
														<FontAwesomeIcon icon={faCalendarCheck} /> {event.start_date} {event.finish_date == event.start_date ? null : ' - ' + event.finish_date}
													</div>
													{
														event.fullday ? null : (
															<div className='mb-2'>
																<FontAwesomeIcon icon={faClock} /> {event.start_time} - {event.finish_time}
															</div>
														)
													}
													{
														event.url ? (
															<div>
																<FontAwesomeIcon icon={faGlobe} /> <a href={event.url} target='_blank' className='text-primary font-bold hover:underline'>Ссылка на событие</a>
															</div>
														) : null
													}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div >
						</section >

						<Toast />

						<BodyFooter active="События" />
					</>
				)
			}
		</>
	);
}

import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "@inertiajs/react";
import EventTile from "./EventTile";

export default function EventSection() {
	const [events, setEvents] = useState([]);

	const getEvents = () => {
		fetch('/api/events.digest', {
			method: 'POST'
		}).then(response => {
			return response.json();
		}).then(events => {
			setEvents(events);
		});
	}

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<>
			<section>
				<div className="grid grid-cols-12 gap-x-4">
					{/* Левая часть секции */}
					<div className="
						xs:col-span-12
						sm:col-span-12
						md:col-span-6
						lg:col-span-6
						xl:col-span-6
						2xl:col-span-6
						grid gap-8
						xs:grid-cols-1
						sm:grid-cols-2
						md:grid-cols-1
						lg:grid-cols-1
						xl:grid-cols-2
						">
						{
							events.map(event =>
								<EventTile key={event.id} event={event} />
							)
						}
						<div className="grow shrink flex justify-center items-center">
							<Link href={route('events.list')} method="get" as="button"
								className='px-7 py-3.5 rounded-xl bg-primary text-white text-lg font-bold'>
								Посмотреть все события
							</Link>
						</div>
					</div>
					{/* Правая часть секции */}
					<div className="
						xs:max-sm:hidden
						md:col-span-6
						lg:col-span-6
						xl:col-span-6
						2xl:col-span-6
					">
						<img src='/assets/images/events-background.png' alt="" className="float-right" />
					</div>
				</div>
			</section>
		</>
	);
}

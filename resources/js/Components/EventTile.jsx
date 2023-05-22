import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@inertiajs/react'

export default function EventTile({ event }) {
	return (
		<div className="rounded-xl border-primary border-2
									bg-[linear-gradient(89.86deg,_#D0CDE1_0.14%,_rgba(255,_255,_255,_0)_99.9%)] hover:bg-[linear-gradient(263.72deg,_#663366_5.2%,_rgba(102,_51,_102,_0.67)_132.31%)]
									flex flex-col justify-between
									group/event-tile
									text-black
									hover:text-white
									">
			{/* Карточка */}
			<div className="pt-8 px-8">
				<div className="text-lg font-bold mb-4">
					{event.title}
				</div>
				<div className="text-md">
					<div className="mb-2">
						<FontAwesomeIcon icon={faCalendarCheck} /> {event.start_date} {event.finish_date == event.start_date ? null : ' - ' + event.finish_date}
					</div>
					{
						event.fullday ? null : (
							<div>
								<FontAwesomeIcon icon={faClock} /> {event.start_time} - {event.finish_time}
							</div>
						)
					}
				</div>
			</div>
			{/* Кнопка */}
			<div className="flex justify-end">
				<div className="border-t-2 border-s-2 border-primary rounded-tl-xl rounded-br-xl p-5 group-hover/event-tile:bg-white">
					<a href={route('events.get', { event: event.id })} target='_self'>
						<img
							id='event-open'
							src="/assets/images/arrow-right.png"
							alt="" />
					</a>
				</div>
			</div>
		</div>
	)
}

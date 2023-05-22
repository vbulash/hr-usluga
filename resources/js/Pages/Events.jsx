import BodyHeader from '@/Components/BodyHeader'
import BodyFooter from '@/Components/BodyFooter'
import { useState, useEffect, useRef, useCallback } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ruLocale from '@fullcalendar/core/locales/ru'
import Toast from '@/Components/Toast'

export default function Events() {
	const handleEventClick = (data) => {
		// console.log(data.event);
	}

	return (
		<>
			<BodyHeader active="События" />

			<section>
				<div className="grid grid-cols-12">
					<div className="col-start-2 col-span-10">
						<div className='text-lg uppercase hover:text-primary'>
							<a href={route('home')}>Главная</a> / События
						</div>
						<h1 className='mb-11'>События</h1>

						<FullCalendar
							plugins={[dayGridPlugin]}
							initialView="dayGridMonth"
							// events={events}
							eventClick={handleEventClick}
							eventColor='#663366'
							eventDisplay='block'
							locales={[ruLocale]}
							locale='ru'
							contentHeight='auto'
							headerToolbar={{
								start: 'title',
								center: 'prev,next,today',
								end: 'dayGridMonth,dayGridWeek,dayGridDay'
							}
							}
							showNonCurrentDates={false}
							titleFormat={(date) => {
								return `${['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][date.date.month]} ${date.date.year} г.`;
							}}
						/>
					</div>
				</div>
			</section >

			<Toast />

			<BodyFooter active="События" />
		</>
	);
}

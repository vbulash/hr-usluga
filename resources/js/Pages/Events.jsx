import BodyHeader from '@/Components/BodyHeader'
import BodyFooter from '@/Components/BodyFooter'
import { useState, useEffect, useRef, useCallback } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ruLocale from '@fullcalendar/core/locales/ru'
import Toast from '@/Components/Toast'

function getTimeString(dateString) {
	const date = new Date(dateString)
	if (date.getTimezoneOffset() != 0)
		date.setHours(date.getHours() + date.getTimezoneOffset() / 60)
	let result = (date.getHours() < 10 ? '0' : '') + date.getHours() + ':'
	result = result + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
	return result
}

function getDateString(dateString) {
	const date = new Date(dateString)
	let result = date.getFullYear() + '-'
	result = result + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-'
	result = result + (date.getDate() < 10 ? '0' : '') + date.getDate()
	return result
}

export default function Events() {
	const handleEventClick = (data) => {
		// console.log(data.event);
	}

	const handleEventRender = (info) => {
		let title = document.createElement('div')
		title.style.paddingTop = '8px'
		title.style.paddingLeft = '8px'
		title.style.paddingBottom = '14px'
		title.style.fontWeight = '700'
		title.style.fontSize = '16px'
		let html = '<p>' + info.event.title + '</p>'
		if (!info.event.allDay) {
			html = html + '<br/><p><strong>' + getTimeString(info.event.startStr) + '</strong> - <strong>' +
				getTimeString(info.event.endStr) + '</strong></p>'
		}
		title.innerHTML = html

		return { domNodes: [title] }
	}

	const handleEventsLoad = (info, success, failure) => {
		const formData = new FormData()
		formData.append('start', info.startStr)
		formData.append('end', info.endStr)

		fetch('/api/events', {
			method: 'POST',
			body: formData
		})
			.then(response => response.json())
			.then(result => {
				let events = []
				result.forEach(event => {
					events.push({
						id: event.id,
						allDay: (event.fullday == 1),
						start: (event.fullday == 1 ? getDateString(event.start) : event.start),
						end: (event.fullday == 1 ? getDateString(event.finish) : event.finish),
						title: event.title,
						url: route('events.get', {event: event.id})
					})
				})
				success(events)
			})
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

						<div className='calendar'>
							<FullCalendar
								plugins={[dayGridPlugin]}
								initialView="dayGridMonth"
								// events={events}
								events={handleEventsLoad}
								eventContent={handleEventRender}
								eventClick={handleEventClick}
								eventColor='#663366'
								eventDisplay='block'
								locales={[ruLocale]}
								locale='ru'
								timeZone='local'
								contentHeight='auto'
								headerToolbar={{
									start: 'title',
									center: 'prev,next,today',
									end: 'dayGridMonth,dayGridWeek'
								}
								}
								showNonCurrentDates={false}
								titleFormat={(date) => {
									return `${['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][date.date.month]} ${date.date.year} г.`;
								}}
							/>
						</div>
					</div>
				</div >
			</section >

			<Toast />

			<BodyFooter active="События" />
		</>
	);
}

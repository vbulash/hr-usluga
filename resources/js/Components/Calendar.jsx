import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ruLocale from '@fullcalendar/core/locales/ru'

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.count = 0;
	}

	handleEventClick = (data) => {
		console.log(data.event);
	}

	fillEvents() {
		let result = []
		for (let post of this.props.posts) {
			const elements = post.publish_at_date.split('.');
			const date = new Date(elements[2], parseInt(elements[1]) - 1, elements[0]);
			const dateStr =
				date.getFullYear() + '-' +
				(date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-' +
				(date.getDate() < 10 ? '0' : '') + date.getDate();
			result.push({
				title: ' ',
				date: dateStr,
				url: post.slug
			});
		}
		return result;
	}

	render() {
		// Учет множественного вызова render()
		let events = this.count++ == 2 ? this.fillEvents() : [];
		return (
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				// defaultView='monthView'
				events={events}
				eventClick={this.handleEventClick}
				eventColor='#663366'
				eventDisplay='block'
				locales={[ruLocale]}
				locale='ru'
				contentHeight='auto'
				headerToolbar={{
					start: 'title', // will normally be on the left. if RTL, will be on the right
					center: '',
					end: 'prev,next' // will normally be on the right. if RTL, will be on the left
				}}
				showNonCurrentDates={false}
				titleFormat={(date) => {
					return `${['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][date.date.month]} ${date.date.year} г.`;
				}}
			/>
		)
	}
}

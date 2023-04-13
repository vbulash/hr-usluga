import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ruLocale from '@fullcalendar/core/locales/ru'
import Tooltip from 'tooltip-js/dist/tooltip';

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}

	handleEventClick = (data) => {
		console.log(data.event);
	}

	fillEvents() {
		let result = []
		if (null != this)
			for (let post of this.props.posts) {
				const elements = post.publish_at_date.split('.');
				const date = new Date(elements[2], parseInt(elements[1]) - 1, elements[0]);
				const dateStr =
					date.getFullYear() + '-' +
					(date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-' +
					(date.getDate() < 10 ? '0' : '') + date.getDate();
				result.push({
					id: 'event' + post.id,
					title: '',
					tooltip: post.title,
					date: dateStr,
					url: '/posts/' + post.id
				});
			}
		return result;
	}

	showTooltip(info) {
		// console.log(info.el);	// info.event.extendedProps.tooltip
		// console.log(info.event.extendedProps.tooltip)
	}

	initialDate() {
		let date = null;
		if (this.props.current == null) {
			date = new Date();
		} else {
			const elements = this.props.current.publish_at_date.split('.');
			date = new Date(elements[2], parseInt(elements[1]) - 1, elements[0]);
		}
		return date.getFullYear() + '-' +
			(date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-01';;
	}

	render() {
		const events = this.fillEvents();
		const initialDate = this.initialDate();
		return (
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				events={events}
				eventClick={this.handleEventClick}
				eventColor='#663366'
				eventDisplay='block'
				eventDidMount={this.showTooltip}
				initialDate={initialDate}
				locales={[ruLocale]}
				locale='ru'
				contentHeight='auto'
				headerToolbar={{
					start: 'title', // will normally be on the left. if RTL, will be on the right
					center: '',
					end: 'prev,next' // will normally be on the right. if RTL, will be on the left
				}
				}
				showNonCurrentDates={false}
				titleFormat={(date) => {
					return `${['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][date.date.month]} ${date.date.year} г.`;
				}}
			/>
		)
	}
}

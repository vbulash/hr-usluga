export default function TestimonialCard({ testimonial }) {
	return (
		<>
			<div className="px-7 py-7 shadow-lg rounded-xl">
				{/* Заголовок карточки отзыва */}
				<div className="flex flex-row mb-5 items-center">
					{/* Фотография */}
					<img src={testimonial.photo} alt="" className="object-cover w-28 h-28 rounded-[50%] me-4" />
					<div>
						<div className="text-xl font-bold">{testimonial.fio}</div>
						<div className="text-lg">{testimonial.position}</div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
			</div>
		</>
	)
}

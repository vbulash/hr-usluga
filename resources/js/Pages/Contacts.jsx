import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect, useRef, useCallback } from 'react';
import Toast from '@/Components/Toast';
import FloatingLabelInput from '@/Components/FloatingLabelInput';
import FloatingTextArea from '@/Components/FloatingTextArea';

// Import Swiper styles
import 'swiper/css';

export default function Contacts() {

	const handleSend = (event) => {
		event.preventDefault();

		// Валидировать форму
		let errors = [];
		let inputs = [];

		const fio = event.target.fio;
		const email = event.target.email;
		const message = event.target.message;

		if (!fio.value) inputs.push('Имя и фамилия - <strong>не заполнено</strong>');
		if (email.value) {
			if (!String(email.value)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)) inputs.push('Электронная почта - <strong>заполнено, некорректное значение</strong>');
		} else inputs.push('Электронная почта - <strong>не заполнено</strong>');
		if (!message.value) inputs.push('Сообщение - <strong>не заполнено</strong>');
		let valid = inputs.length == 0;
		if (!valid) {
			errors.push('Необходимо корректно заполнить поля:');
			errors.push('<ul class="list-disc list-inside">');
			inputs.map(error => { errors.push(`<li class="pl-4">${error}</li>`) });
			errors.push("</ul>\n");
		}

		if (valid) {
			const feedback = new FormData();
			feedback.append('fio', fio.value);
			feedback.append('email', email.value);
			feedback.append('message', message.value);

			fetch('/api/feedback/', {
				method: 'POST',
				body: feedback,
			}).then(response => {
				if (response.ok) {
					window.toast.show('success',
						`
                            Письмо с вашим сообщением отправлено.<br/>
							Мы свяжемся с вами по указанным в форме обратной связи контактным данным.
                        `
					);
					this.hide();
				} else {
					window.toast.show('error',
						`
                        Ошибка отправки письма с сообщением:
                        <ul class="list-disc list-inside">
                            <li class="pl-4">Код ошибки: ${response.status}</li>
                            <li class="pl-4">Текст ошибки: ${response.statusText}</li>
                        </ul>
                        `
					);
				}
			});
		} else {
			const message = errors.join("\n");
			window.toast.show('error', message);
		}
	}

	return (
		<>
			<BodyHeader active="Обратная связь" />

			<section>
				<div className="grid grid-cols-12">
					<div className="col-start-2 col-span-10">
						<form onSubmit={handleSend}>
							<div className='text-lg uppercase hover:text-primary'>
								<a href={route('home')}>Главная</a> / Обратная связь
							</div>
							<h1 className='mb-11'>Обратная связь</h1>

							<div className="flex xs:flex-col lg:flex-row items-center justify-between xs:gap-y-9 sm:gap-x-9">
								<div className="lg:block mt-1.5 xs:max-lg:w-full lg:w-2/5">
									<div className="mb-9">
										<FloatingLabelInput type='text' name='fio' children='Имя и фамилия *' />
									</div>
									<div className="mb-9">
										<FloatingLabelInput type='text' name='email' children='Электронная почта *' />
									</div>
									<div className="mb-9">
										<FloatingTextArea name='message' children='Сообщение *' />
									</div>
								</div>
								<div className="hidden lg:block lg:w-3/5">
									<img src="/assets/images/envelope4.png" className='float-right' alt="" />
								</div>
							</div>

							{/*footer*/}
							<div className="flex items-center justify-start">
								<button
									className="px-11 py-3.5 bg-primary text-white text-lg font-bold rounded-xl shadow-lg"
									type="submit"
								>
									Отправить
								</button>
							</div>
						</form>
					</div>
				</div>
			</section >

			<Toast />

			<BodyFooter active="Обратная связь" />
		</>
	);
}

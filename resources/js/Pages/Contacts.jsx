import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect, useRef, useCallback } from 'react';
import Toast from '@/Components/Toast';
import FloatingLabelInput from '@/Components/FloatingLabelInput';
import FloatingTextArea from '@/Components/FloatingTextArea';

// Import Swiper styles
import 'swiper/css';

export default function Contacts() {

	const handleSend = () => {
		// Валидировать форму
		let errors = [];
		let inputs = [];

		const fio = document.getElementById('fio');
		const email = document.getElementById('email');

		if (!fio.value) inputs.push('Имя и фамилия - <strong>не заполнено</strong>');
		if (email.value) {
			if (!String(email.value)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)) inputs.push('Электронная почта - <strong>заполнено, некорректное значение</strong>');
		} else inputs.push('Электронная почта - <strong>не заполнено</strong>');
		let valid = inputs.length == 0;
		if (!valid) {
			errors.push('Необходимо корректно заполнить поля:');
			errors.push('<ul class="list-disc list-inside">');
			inputs.map(error => { errors.push(`<li class="pl-4">${error}</li>`) });
			errors.push("</ul>\n");
		}

		//
		if (valid) {
			//
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
						<div className='text-lg uppercase hover:text-primary'>
							<a href={route('home')}>Главная</a> / Обратная связь
						</div>
						<h1 className='mb-11'>Обратная связь</h1>

						<div className="flex xs:flex-col lg:flex-row items-start justify-between xs:gap-y-9 sm:gap-x-9">
							<div className="hidden xs:max-lg:block">
								<div className="mb-4 mx-auto">
									<label htmlFor="fio">Имя и фамилия</label>
									<input type="text" name="fio" id='fio'
										className="mt-2 w-full outline-none rounded bg-transparent text-base p-2 focus:border-primary" />
								</div>
								<div className="mb-4 mx-auto">
									<label htmlFor="email">Электронная почта</label>
									<input type="email" name="email" id='email'
										className="mt-2 w-full outline-none rounded bg-transparent text-base p-2 focus:border-primary" />
								</div>
							</div>
							<div className="hidden lg:block mt-1.5 w-2/5">
								<div className="mb-9">
									<FloatingLabelInput type='text' name='fio' children='Имя и фамилия' />
								</div>
								<div className="mb-9">
									<FloatingLabelInput type='email' name='email' children='Электронная почта' />
								</div>
								{/* <div class="relative">
									<input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none
									focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
									<label for="floating_outlined" class="absolute text-sm text-primary font-semibold text-opacity-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:font-semibold
									peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
								</div>
								<div class="relative">
									<textarea id="floating_outlined2" rows={8} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none
									focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
									<label for="floating_outlined2" class="absolute text-sm text-primary font-semibold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600
									peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
								</div> */}
								<div className="mb-9">
									<FloatingTextArea name='message' children='Сообщение' />
								</div>
							</div>
							<div className="lg:w-3/5">
							</div>
						</div>

						{/*footer*/}
						<div className="flex items-center justify-start">
							<button
								className="px-11 py-3.5 bg-primary text-white text-lg font-bold rounded-xl shadow-lg"
								type="button"
								onClick={handleSend}
							>
								Отправить
							</button>
						</div>
					</div>
				</div>
			</section >

			<Toast />

			<BodyFooter active="Обратная связь" />
		</>
	);
}

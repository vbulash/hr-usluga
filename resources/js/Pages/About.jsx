import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import { useState, useEffect, useRef, useCallback } from 'react';
import Toast from '@/Components/Toast';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {
// 	Ripple,
// 	initTE,
// } from "tw-elements";

// Import Swiper styles
import 'swiper/css';

export default function About() {
	// const [posts, setPosts] = useState([]);
	// const [first, setFirst] = useState({});

	// const getPosts = () => {
	// 	fetch('/api/posts', {
	// 		method: 'POST'
	// 	}).then(response => {
	// 		return response.json();
	// 	}).then(posts => {
	// 		setPosts(posts);
	// 		setFirst(posts[0]);
	// 	});
	// }

	useEffect(() => {
		// getPosts();
		// initTE({ Ripple });
	}, []);

	return (
		<>
			<BodyHeader active="Обо мне" />

			<div className="grid grid-cols-12">
				<div className="col-start-2 col-span-10">
					<div className='text-lg uppercase hover:text-primary'>
						<a href={route('home')}>Главная</a> / Обо мне
					</div>
					<h1 className='mb-11'>Обо мне</h1>

					{/* Фотография и образование */}
					<section>
						<div className="flex xs:flex-col md:flex-row items-start gap-16 mb-14 md:mb-24 lg:mb-36">
							<img src="/assets/images/natalya-bulash-about.png" alt=""
								className='xs:w-[50%] md:w-[30%] shadow-xl p-0 rounded-xl' />
							<div className="xs:w-full md:w-[70%]">
								<div className="mb-6 text-primary text-xl md:text-2xl lg:text-4xl font-bold uppercase">
									Образование
								</div>
								<div className='flex flex-col grow-0 items-start mb-5'>
									<div className='bg-primary text-lg md:text-xl lg:text-2xl text-white rounded-lg px-7 py-3'>Высшее</div>
								</div>
								<div className='mb-9'>
									<span className='me-4 text-xl md:text-2xl lg:text-4xl text-primary font-bold'>2001</span>
									<span className="text-md md:text-lg lg:text-xl">Высшее педагогическое образование (МГПУ им. М.А. Шолохова, учитель химии и экологии)</span>
								</div>
								<div className='flex flex-col grow-0 items-start mb-5'>
									<div className='bg-primary text-lg md:text-xl lg:text-2xl text-white rounded-lg px-7 py-3'>Дополнительное</div>
								</div>
								<div>
									<span className='me-4 text-xl md:text-2xl lg:text-4xl text-primary font-bold'>2004</span>
									<span className="text-md md:text-lg lg:text-xl">
										Дополнительное образование в сфере управления персоналом (2004г. Межотраслевой институт Повышения Квалификации и Переподготовки Руководящих Кадров и Специалистов РЭА им. Г.В. Плеханова, профессиональная переподготовка 537 часов по курсу «Менеджмент персонала»).
									</span>
								</div>
							</div>
						</div>
					</section>

					{/* Таймлайн */}
					<section className='mb-14 md:mb-24 lg:mb-36'>
						<div className="flex flex-row gap-4">
							<div className="xs:max-sm:ml-4 xs:w-full lg:w-3/5">
								{
									[
										{ 'id': 1, 'text': 'Прошла <span class="text-primary font-bold">повышение квалификации</span> по курсу «Карьерный консультант. Специалист по развитию карьеры» (2018г. Институт менеджмента, инноваций и бизнес-анализа, 72 часа)' },
										{ 'id': 2, 'text': 'Имею <span class="text-primary font-bold">международную сертификацию</span> уровня CDS (CareerDevelopment – Специалист по развитию карьеры) по стандарту NCDAв Европейском центре аудита и сертификации (ERCA)' },
										{ 'id': 3, 'text': '<span class="text-primary font-bold">Более 16 лет работы</span> в сфере HR, из них <span class="text-primary font-bold">12 лет на руководящих позициях</span> (HRD/ HRBP) в крупнейших федеральных и региональных компаниях (7 Континент, франшиза РосинтерРесторантс, Белый ветер Цифровой, Московский банк Сбербанк России, франшиза TELE2 и т.д.)' },
									].map(item => (
										<div className="flex flex-col pb-5 border-l-2 border-primary" key={item.id}>
											<img src={"/assets/images/timeline-" + item.id + ".png"} alt="" className='-ml-[28px] w-14 h-14 bg-white' />
											<div className="ml-6 md:text-xl lg:text-2xl text-black"
												dangerouslySetInnerHTML={{ __html: item.text }} />
										</div>
									))
								}
							</div>
							<div className="xs:max-lg:hidden lg:w-2/5 flex justify-end content-center">
								<div>
									<img src="/assets/images/background-timeline.png" alt="" className='right-0' />
								</div>
							</div>
						</div>
					</section>

					{/* В настоящее время */}
					<section className='mb-14 md:mb-24 lg:mb-36'>
						<div className='mb-10 text-center font-bold text-xl md:text-2xl lg:text-4xl text-primary'>В настоящее время:</div>
						<div className="mt-5 flex flex-row justify-evenly flex-wrap gap-14">
							{
								[
									{ 'id': 1, 'text': 'Основатель и руководитель проекта «HR-Услуга»' },
									{ 'id': 2, 'text': 'Партнер «Мастерской карьерного менеджмента»' },
									{ 'id': 3, 'text': 'Консультант по карьерному развитию и управлению персоналом' },
									{ 'id': 4, 'text': 'Эксперт журналов и интернет-изданий: «Директор по персоналу», «PRO-Personal», «Деловой мир», E-xecutive' },
									{ 'id': 5, 'text': 'Член Национального союза кадровиков с 2006 года' },
								].map(item => (
									<div className='xs:max-w-[300px] sm:max-w-[350px] min-h-[210px] px-5 py-8 rounded-xl shadow-xl grow-0 flex items-center' key={item.id}>
										<div className='text-lg md:text-xl lg:text-2xl font-bold text-primary text-center'>
											{item.text}
										</div>
									</div>
								))
							}
						</div>
					</section>

					{/* Автор обучающих курсов */}
					<section className='mb-14 md:mb-24 lg:mb-36'>
						<div className='mb-10 text-center font-bold text-xl md:text-2xl lg:text-4xl text-primary'>Автор обучающих курсов и вебинаров по направлениям:</div>
						<div>
							<div className='flex flex-col grow-0 items-start mb-5'>
								<div className='bg-primary text-lg md:text-xl lg:text-2xl text-white rounded-lg px-7 py-3'>Управление персоналом</div>
							</div>
							<div className='flex flex-col grow-0 items-start mb-5'>
								<ul className='list-disc pl-4 text-md md:text-lg lg:text-xl'>
									<li>Международный институт менеджмента объединений предпринимателей при Торгово-Промышленной палате</li>
									<li>Проект онлайн обучения для HR интеграционного портала Hredu «Просто HR.HR-это просто!»</li>
									<li>Журнал «Директор по персоналу»</li>
								</ul>
							</div>
							<div className='flex flex-col grow-0 items-start mb-5'>
								<div className='bg-primary text-lg md:text-xl lg:text-2xl text-white rounded-lg px-7 py-3'>Карьерный менеджмент</div>
							</div>
							<div className='flex flex-col grow-0 items-start mb-5'>
								<ul className='list-disc pl-4 text-md md:text-lg lg:text-xl'>
									<li>Институт практической психологии ВШЭ</li>
									<li>Национальный исследовательский институт дополнительного профессионального образования (lomonosov.online)</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Мои сертификаты */}
					<section>
						<div className='mb-10 text-center font-bold text-xl md:text-2xl lg:text-4xl text-primary'>Мои сертификаты:</div>
						<div className='grid xs:max-xl:grid-cols-1 xl:grid-cols-2 gap-10'>
							{
								[
									{ id: 1, pic: '/assets/images/certifcates/Диплом-2-1.jpeg', title: 'Диплом профессионального психолога' },
									{ id: 2, pic: '/assets/images/certifcates/Удостоверение.jpg', title: 'Удостоверение о повышении квалификации' },
									{ id: 3, pic: '/assets/images/certifcates/АППК.jpg', title: 'Членство в ассоциации практических психологов и коучей' },
									{ id: 4, pic: '/assets/images/certifcates/ERCA.jpg', title: 'Сертификат ERCA: Career Development' },
								].map(certificate => (
									<div key={certificate.id} className='px-9 py-9 rounded-xl shadow-xl flex flex-col items-center'>
										<img src={certificate.pic} alt={certificate.title} className='max-h-[435px] pb-5'
										/>
										<div className='text-primary font-bold text-md md:text-lg lg:text-xl'>{certificate.title}</div>
									</div>
								))
							}
						</div>
					</section>
				</div>
			</div>

			<Toast />

			<BodyFooter active='Обо мне' />
		</>
	)
}

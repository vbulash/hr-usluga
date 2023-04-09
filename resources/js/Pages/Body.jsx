import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import Socials from '@/Components/Socials';
import WaveSeparator from '@/Components/WaveSeparator';
import ServiceCard from '@/Components/ServiceCard';
import { useState, useEffect } from 'react';
import Toast from '@/Components/Toast';
import ServiceSection from '@/Components/ServiceSection';
import PostSection from '@/Components/PostSection';

export default function Body(props) {
	const [services, setServices] = useState([]);

	const getServices = () => {
		fetch('/api/services', {
			method: 'POST'
		}).then(response => {
			return response.json();
		}).then(services => {
			setServices(services);
		});
	}

	useEffect(() => {
		getServices();
	}, []);

	return (
		<>
			<BodyHeader active="Главная" />

			{/* Секция HR-Услуга */}
			<section className='bg-none sm:bg-[url("/assets/images/backgroud1.png")] sm:bg-contain sm:bg-no-repeat'
				style={{
					backgroundPosition: "right top 20px",
					backgroundSize: "48%"
				}}
			>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-start-2 col-span-10">
						<h1>HR-Услуга</h1>
						<div className="grid grid-cols-10">
							<div className="col-span-5">
								<h2>Профессиональный и личностный рост</h2>
							</div>
						</div>
						<ul className='intro text-xl space-y-5 mt-2 mb-11'>
							{
								[
									'Построй карьеру своей мечты',
									'Прокачай карьеру в группе',
									'Получи опытное мнение эксперта',
									'Найди свой путь в жизни',
									'Cоставь эффективное резюме за 3 дня',
								].map((item) => (
									<li key={item}><span className='ml-3'>{item}</span></li>
								)
								)
							}
						</ul>
						<button className='px-7 py-3.5 mb-11 rounded-xl bg-primary text-white text-lg font-bold'>Узнать больше</button>
						<Socials />
					</div>
				</div>
			</section>
			{/* Секция Услуги */}
			<section>
				<WaveSeparator />
				<div className="grid grid-cols-12 gap-4">
					<div className="col-start-2 col-span-9">
						<h1 className='mb-12'>Услуги</h1>
						<ServiceSection />
					</div>
				</div>
			</section>
			{/* Секция Новости и публикации */}
			<section>
				<WaveSeparator />
				<div className="grid grid-cols-12 gap-4">
					<div className="col-start-2 col-span-9">
						<h1 className='mb-12'>Новости и публикации</h1>
						<PostSection />
					</div>
				</div>
			</section>

			<Toast />
			<BodyFooter active="Главная" />
		</>
	);
}

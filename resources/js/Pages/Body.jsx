import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import Socials from '@/Components/Socials';
import WaveSeparator from '@/Components/WaveSeparator';
import ServiceCard from '@/Components/ServiceCard';
import { useState, useEffect } from 'react';
import Toast from '@/Components/Toast';
import ServiceSection from '@/Components/ServiceSection';
import PostSection from '@/Components/PostSection';
import TestimonialSection from '@/Components/TestimonialSection';

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
						{/* <button className='px-7 py-3.5 mb-11 rounded-xl bg-primary text-white text-lg font-bold'>Узнать больше</button>
						<Socials /> */}
					</div>
				</div>
			</section>

			{/* Секция Услуги */}
			<section className='mb-32'>
				<WaveSeparator />
				<div className="grid grid-cols-12 gap-4">
					<div className="col-start-2 col-span-10">
						<h1 className='mb-12'>Услуги</h1>
						<ServiceSection />
					</div>
				</div>
			</section>

			{/* Секция Афиша */}
			<section className='mb-32'>
				<div className='skew-y-[-3deg]
					bg-[linear-gradient(180deg,_rgba(208,_205,_225,_0.5)_-14.24%,_rgba(255,_255,_255,_0.5)_124.1%),_linear-gradient(180deg,_rgba(208,_205,_225,_0.5)_-14.24%,_rgba(255,_255,_255,_0.5)_124.1%)]'>
					<div className="skew-y-[3deg] py-40 grid grid-cols-12 gap-4">
						<div className="col-start-2 col-span-10">
							<h1 className='mb-12'>Афиша</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra ut massa ac malesuada. Suspendisse a ante iaculis, bibendum eros vitae, malesuada nisl. Vivamus a sollicitudin lectus. Sed suscipit erat mi, eget ullamcorper est varius non. Pellentesque imperdiet accumsan ante, vitae ultrices erat tincidunt at. Suspendisse vehicula ante nec pellentesque ultrices. Praesent fermentum ultricies ultricies. Duis dignissim aliquam est, a faucibus lorem congue eu. Vestibulum ullamcorper enim mauris, eu venenatis turpis varius in. Proin semper ante est, id semper lacus egestas ut. Quisque id mi neque. Suspendisse hendrerit fermentum massa, a pretium eros mollis et.</p>
							<p>Aenean ac malesuada dolor. Mauris hendrerit mauris in mollis tristique. Cras vulputate ante lacus, in venenatis enim mattis vel. Praesent dictum libero nisl, vitae lacinia sem condimentum quis. Vestibulum eu mattis metus. Suspendisse eget aliquam nunc. Vivamus eu risus at lacus placerat egestas eu sed ligula. Integer sed dui lacus. Curabitur congue urna sit amet rutrum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi luctus, tellus eget rutrum efficitur, nunc odio congue urna, id auctor nisl quam et elit. Donec sodales elit vel felis consectetur, vitae tincidunt odio fermentum.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция Новости и публикации */}
			<section className='mb-32'>
				{/* <WaveSeparator /> */}
				<div className="grid grid-cols-12 gap-4">
					<div className="col-start-2 col-span-10">
						<h1 className='mb-12'>Новости и публикации</h1>
						<PostSection />
					</div>
				</div>
			</section>

			{/* Секция Отзывы */}
			<section>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-start-2 col-span-10">
						<h1 className='mb-12'>Отзывы</h1>
						<TestimonialSection />
					</div>
				</div>
			</section>

			<Toast />
			<BodyFooter active="Главная" />
		</>
	);
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Socials from './Socials';
import WaveSeparator from './WaveSeparator';
import MenuItems from './MenuItems';

export default function BodyFooter({ active }) {
	return (
		<>
			<WaveSeparator />

			<div className="grid grid-cols-12 mb-9">
				<div className="col-start-2 col-span-10 mb-8">
					<img src="/assets/images/logo_desktop.png" alt="" />
				</div>
				<div className="col-start-2 col-span-10 flex flex-row flex-wrap gap-x-4 gap-y-8">
					<div className="md:w-[70%] lg:w-[48%]">
						<p><strong>Наталья Булаш</strong><br />Консультант по управлению персоналом и карьерному развитию.</p>
						<p>Отсканируйте QR-код <span className='lg:hidden'>снизу</span><span className='xs:max-lg:hidden'>справа</span> и вы сможете импортировать мою электронную визитку.</p>
						<p>Реквизиты и ссылки на важные документы здесь.</p>
					</div>
					<div className="md:w-[30%] lg:w-[18%]">
						<img src={'/assets/images/qr_natalya_bulash.png'} alt="" />
						<div className="flex flex-col space-y-1.5 text-sm ml-2">
							<a href="tel:+79031009633" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faPhone} /> +7 (903) 100-96-33</a>
							<a href="mailto:info@hr-usluga.ru" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faEnvelope} /> info@hr-usluga.ru</a>
						</div>
					</div>
					<div className="md:w-[50%] lg:w-[28%]">
						<nav className="flex flex-wrap ml-4 mb-5">
							{
								MenuItems.map(([title, url]) => (
									<a href={url} className={"pb-3 pr-4 text-lg text-black " +
										(title === active ? 'font-bold' : 'font-normal') + " " +
										"hover:text-primary hover:underline hover:underline-offset-4"}
										key={title}
									>
										{title}
									</a>
								)
								)
							}
						</nav>
						<Socials classes='ml-4' />
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 bg-primary">
				<div className="col-start-2 col-span-10">
					<footer className='my-6 flex xs:max-md:flex-col md:flex-row md:justify-between gap-x-4 gap-y-8'>
						<p className='text-lg font-bold text-white'>&copy; 2023 HR-Услуга. Все права защищены. | Сайт создан студией <a href="https://bulash.ru" className='underline underline-offset-4'>Bulash.ru</a></p>
						<p className='text-lg font-normal text-white underline underline-offset-4'><a href={route('persdata')}>Политика обработки персональных данных</a></p>
					</footer>
				</div>
			</div>
		</>
	);
}

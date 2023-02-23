import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Socials from './Socials';
import WaveSeparator from './WaveSeparator';

export default function BodyFooter({ active }) {
    return (
        <>
            <WaveSeparator />

            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10 mb-8">
                    <img src="/assets/images/logo_desktop.png" alt="" />
                </div>
                <div className="col-start-2 col-span-5 mb-8 space-y-4">
                    <p><strong>Наталья Булаш</strong><br />Консультант по управлению персоналом и карьерному развитию.</p>
                    <p>Отсканируйте QR-код справа и вы сможете импортировать мою электронную визитку.</p>
                    <p>Реквизиты и ссылки на важные документы здесь.</p>
                </div>
                <div className="col-start-7 col-span-2 mb-6">
                    <a href="http://qrcoder.ru" target="_blank">
                        <img src="http://qrcoder.ru/code/?BEGIN%3AVCARD%0AN%3A%C1%F3%EB%E0%F8%3B%CD%E0%F2%E0%EB%FC%FF%0ATEL%3A%2B79031009633%0AURL%3Ahttps%3A%2F%2Fhr-usluga.ru%0AEMAIL%3Ainfo%40hr-usluga.ru%0ANOTE%3A%CA%EE%ED%F1%F3%EB%FC%F2%E0%ED%F2+%EF%EE+%F3%EF%F0%E0%E2%EB%E5%ED%E8%FE+%EF%E5%F0%F1%EE%ED%E0%EB%EE%EC+%E8+%EA%E0%F0%FC%E5%F0%ED%EE%EC%F3+%F0%E0%E7%E2%E8%F2%E8%FE%0AEND%3AVCARD&3&0" width="207" height="207" border="0" title="QR код" />
                    </a>
                    <div className="flex flex-col space-y-1.5 text-sm ml-2">
                        <a href="tel:+79031009633" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faPhone} /> +7 (903) 100-96-33</a>
                        <a href="mailto:info@hr-usluga.ru" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faEnvelope} /> info@hr-usluga.ru</a>
                    </div>
                </div>
                <div className="col-start-9 col-span-3">
                    <nav className="flex flex-wrap ml-4 mb-5">
                        {
                            [
                                ['Главная', '/'],
                                ['Услуги', '/services'],
                                ['Новости', '/news'],
                                ['События', '/events'],
                                ['Обо мне', '/about'],
                                ['Партнёры', '/partners'],
                                ['Обратная связь', '/contact'],
                            ].map(([title, url]) => (
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
            <div className="grid grid-cols-12 bg-primary">
                <div className="col-start-2 col-span-10">
                    <footer className='my-6 flex justify-between'>
                        <p className='text-lg font-bold text-white'>&copy; 2023 HR-Услуга. Все права защищены. | Сайт создан студией <a href="https://bulash.ru" className='underline underline-offset-4'>Bulash.ru</a></p>
                        <p className='text-lg font-normal text-white underline underline-offset-4'><a href='/persdata'>Политика обработки персональных данных</a></p>
                    </footer>
                </div>
            </div>
        </>
    );
}

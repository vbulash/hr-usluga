import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import MobileMenu from './MobileMenu';
import MenuItems from './MenuItems';

export default function BodyHeader({ active }) {
    return (
        <>
            <div className="hidden xs:max-xl:block">
                <div className='flex justify-between px-5 py-8'>
                    <img src="/assets/images/logo_desktop.png" alt="" className="" />
                    <MobileMenu active={active} />
                </div>
            </div>
            <div className="hidden xl:block">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-2 col-span-10">
                        <div className="pb-2.5 flex justify-between">
                            <img src="/assets/images/logo_desktop.png" alt="" className="pt-7" />
                            <nav className="flex justify-center space-x-4">
                                {
                                    MenuItems.map(([title, url]) => (
                                        <a href={url} className={"rounded-b-xl px-3 pt-10 pb-4 text-lg " +
                                            (title === active ? 'text-white bg-primary font-bold' : 'text-black bg-white font-normal') + " " +
                                            "hover:bg-primary hover:text-white"}
                                            key={title}
                                        >
                                            {title}
                                        </a>
                                    )
                                    )
                                }
                            </nav>
                        </div>
                        <div className="flex flex-row-reverse">
                            <div className="flex flex-col space-y-1.5">
                                <a href="tel:+79031009633" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faPhone} /> +7 (903) 100-96-33</a>
                                <a href="mailto:info@hr-usluga.ru" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faEnvelope} /> info@hr-usluga.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


export default function ServiceSection() {
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
            <section>
                <div>
                    <p className="font-normal mb-5">
                        Вы можете прокрутить список услуг мышью или с клавиатуры (клик мышью внутри области карточек услуг + клавиши &laquo;влево&raquo; и &laquo;вправо&raquo;).<br />
                        Кнопка &laquo;Подробнее об услуге&raquo; открывает страницу услуги с более подробным описанием.<br />
                        Кнопка &laquo;Заказать&raquo; приведет вас на форму анкеты для заказа услуги.
                    </p>
                    <div className="flex flex-row flex-nowrap space-x-5 overflow-x-scroll"
                        onScroll={(event) => { console.log(event); }}>
                        {
                            services.map(service => (
                                <ServiceCard card={service} short={true} key={service.slug} />
                            ))
                        }
                    </div>

                    <a href='/services' className='px-7 py-3.5 mt-14 rounded-xl bg-primary text-white text-lg font-bold'>
                        Посмотреть все услуги
                    </a>
                </div>
            </section>
        </>
    );
}

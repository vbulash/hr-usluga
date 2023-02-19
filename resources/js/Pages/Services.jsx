import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import ServiceCard from '@/Components/ServiceCard';
import { useState, useEffect } from 'react';

export default function Services(props) {
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
            <BodyHeader active="Услуги"> </BodyHeader>

            <section>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-2 col-span-10">
                        <div className='text-lg uppercase hover:text-primary'>
                            <a href="/">Главная</a> / Услуги
                        </div>
                        <h1>Услуги</h1>
                    </div>
                    <div className="col-start-2 col-span-10 gap-5 flex flex-row flex-wrap grow-0 shrink-0 mb-12">
                        {
                            services.map(service => (
                                <ServiceCard card={service} />
                            ))
                        }
                    </div>
                </div >
            </section >

            <BodyFooter active="Услуги" />
        </>
    );
}

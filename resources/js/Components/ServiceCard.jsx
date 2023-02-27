import ServiceOrder from "./ServiceOrder";

export default function ServiceCard({ card, short = false }) {
    return (
        <div className="w-[360px] min-w-[360px] shadow-lg rounded-xl mb-11 flex flex-col justify-between">
            <div>
                <div className="card-header
                                    flex justify-center items-center
                                            rounded-xl bg-primary shadow-md h-[128px] grow-0
                                            text-white text-3xl font-black text-center uppercase leading-10" key={card.id}>
                    {card.title}
                </div>
                <div className='flex flex-col items-center mt-3.5 mb-6 grow-0'>
                    {
                        card.tags.map(tag => (
                            <div className='basis-0 bg-tag mt-2.5 px-5 py-1 text-xs leading-6 rounded'>
                                {tag}
                            </div>
                        ))
                    }
                </div>
                {short ? null :
                    (
                        <div className='card-body mr-4 mb-5 grow-1'
                            dangerouslySetInnerHTML={{ __html: card.description }} />
                    )
                }
            </div>
            <div className='flex flex-col items-start grow-0'>
                {short ?
                    (
                        <a href={'/service/' + card.slug} className='px-7 py-3.5 mb-11 rounded-r-xl bg-primary text-white text-lg font-bold'>
                            Подробнее об услуге
                        </a>
                    ) : null
                }
                <div className='basis-0 px-6 py-1.5 mb-6 text-primary border-2 border-primary rounded-r-xl'>
                    <span className='text-3xl font-black'>{card.price}</span>&nbsp;
                    <span className='text-2xl'>&#8381;</span>
                </div>
                <ServiceOrder slug={card.slug} />
            </div>
        </div>

    );
}

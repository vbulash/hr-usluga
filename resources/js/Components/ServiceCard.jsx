import ServiceOrder from "./ServiceOrder";

export default function ServiceCard(props) {
    return (
        <div className="w-[360px] shadow-lg rounded-xl mb-11 flex flex-col justify-between">
            <div>
                <div className="card-header
                                    flex justify-center items-center
                                            rounded-xl bg-primary shadow-md h-[128px] grow-0
                                            text-white text-3xl font-black text-center uppercase leading-10" key={props.card.id}>
                    {props.card.title}
                </div>
                <div className='flex flex-col items-center mt-3.5 mb-6 grow-0'>
                    {
                        props.card.tags.map(tag => (
                            <div className='basis-0 bg-tag mt-2.5 px-5 py-1 text-xs leading-6 rounded'>
                                {tag}
                            </div>
                        ))
                    }
                </div>
                <div className='card-body mr-4 mb-5 grow-1'
                    dangerouslySetInnerHTML={{ __html: props.card.description }}></div>
            </div>
            <div className='flex flex-col items-start grow-0'>
                <div className='basis-0 px-6 py-1.5 mb-6 bg-primary text-white rounded-r-xl'>
                    <span className='text-3xl font-black'>{props.card.price}</span>&nbsp;
                    <span className='text-2xl'>&#8381;</span>
                </div>
                {/* <a href={"/card/" + props.card.slug}
                    className='bg-primary w-52 h-14 flex justify-center items-center font-bold text-white text-lg rounded-bl-xl rounded-tr-xl'>
                    Заказать
                </a> */}
                <ServiceOrder service={props.card.slug} />
            </div>
        </div>

    );
}

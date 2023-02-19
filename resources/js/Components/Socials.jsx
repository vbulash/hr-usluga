export default function Socials({ classes = '' }) {
    return (
        <div className={"flex flex-row " + classes}>
            {
                [
                    ['vk', 'https://vk.com/public144278074'],
                    ['whatsapp', 'https://api.whatsapp.com/send?phone=79031009633'],
                    ['telegram', 'https://t.me/hrusluga'],
                ].map(([social, url]) => (
                    <a href={url} key={social} className='h3' target='_blank'>
                        <img src={"/assets/images/socials/" + social + ".png"} alt="" className='h-9 w-9 mr-4' />
                    </a>
                )
                )
            }
        </div>
    );
}

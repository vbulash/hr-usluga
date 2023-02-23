import BodyHeader from '@/Components/BodyHeader';
import BodyFooter from '@/Components/BodyFooter';
import Toast from '@/Components/Toast';

export default function Document(title, body) {
    return (
        <>
            <BodyHeader active=""> </BodyHeader>

            <section>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-2 col-span-10">
                        <h1 className='mb-12'>{title}</h1>
                        <div className='document' dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                </div>
            </section>

            <Toast />
            <BodyFooter active="" />
        </>
    );
}
//}

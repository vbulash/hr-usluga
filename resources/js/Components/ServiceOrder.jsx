import React, { useState } from "react";

export default function ServiceOrder({ service }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button type="button" onClick={() => setShowModal(true)}
                className='bg-primary w-52 h-14 flex justify-center items-center font-bold text-white text-lg rounded-bl-xl rounded-tr-xl'>
                Заказать
            </button>

            {showModal ? (
                <>
                    <p>Типа модал</p>
                    <button type="button" onClick={() => setShowModal(false)}>
                        Закрыть диалог
                    </button>
                </>
            ) : null}
        </>
    );
}

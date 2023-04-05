import React from "react";
import { createPortal } from "react-dom";
import FloatingLabelInput from "./FloatingLabelInput";

export default class ServiceOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.button = props.button;
        this.service = '';
        // Получить this.service по слагу this.props.slug
        fetch('/api/services.slug/' + this.props.slug, {
            method: 'POST',
        }).then(response => {
            return response.json();
        }).then(service => {
            this.service = service.title;
        });
    }

    show = () => {
        this.setState({ show: true });
    }

    hide = () => {
        this.setState({ show: false });
    }

    handleSendOrder() {
        // Валидировать форму
        let errors = [];
        let inputs = [];
        let checks = [];

        const fio = document.getElementById('fio');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const promo = document.getElementById('promo');
        const checkPdd = document.getElementById('checkPdd');
        const checkConfidential = document.getElementById('checkConfidential');
        const checkAgreement = document.getElementById('checkAgreement');
        const resume = document.getElementById('resume');

        if (!fio.value) inputs.push('Имя и фамилия - <strong>не заполнено</strong>');
        if (email.value) {
            if (!String(email.value)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) inputs.push('Электронная почта - <strong>заполнено, некорректное значение</strong>');
        } else inputs.push('Электронная почта - <strong>не заполнено</strong>');
        if (!phone.value) inputs.push('Телефон для связи - <strong>не заполнено</strong>');
        let valid = inputs.length == 0;
        if (!valid) {
            errors.push('Необходимо корректно заполнить поля:');
            errors.push('<ul class="list-disc list-inside">');
            inputs.map(error => { errors.push(`<li class="pl-4">${error}</li>`) });
            errors.push("</ul>\n");
        }

        if (!checkPdd.checked) checks.push('Согласие на обработку персональных данных');
        if (!checkConfidential.checked) checks.push('Ознакомление с Политикой обеспечения конфиденциальности информации');
        if (!checkAgreement.checked) checks.push('Обязательство соблюдения Пользовательского соглашения');
        if (checks.length != 0) {
            if (!valid) errors.push('<br/>');
            errors.push('Необходимо потвердить:');
            errors.push('<ul class="list-disc list-inside">');
            checks.map(error => { errors.push(`<li class="pl-4">${error}</li>`) });
            errors.push("</ul>\n");
        }
        valid = valid && (checks.length == 0);

        //
        if (valid) {
            const order = new FormData();
            order.append('service', this.service);
            order.append('fio', fio.value);
            order.append('email', email.value);
            order.append('phone', phone.value);
            order.append('promo', promo.value);
            if (resume.files.length > 0) {
                let index = 0;
                for (const file of resume.files)
                    order.append('resume_' + index++, file);
            }

            fetch('/api/services.order', {
                method: 'POST',
                body: order,
            }).then(response => {
                if (response.ok) {
                    window.toast.show('success',
                        `
                            Письмо-заказ услуги &laquo;${this.service}&raquo; отправлено.<br/>
                            Мы свяжемся с вами по указанным в форме заказа контактным данным.
                        `
                    );
                    this.hide();
                } else {
                    window.toast.show('error',
                        `
                        Ошибка отправки письма с заказом услуги &laquo;${this.service}&raquo;:
                        <ul class="list-disc list-inside">
                            <li class="pl-4">Код ошибки: ${response.status}</li>
                            <li class="pl-4">Текст ошибки: ${response.statusText}</li>
                        </ul>
                        `
                    );
                }
            });
        } else {
            const message = errors.join("\n");
            window.toast.show('error', message);
        }
    }

    render() {
        return (
            <>
                <button type="button" onClick={() => this.show()}
                    className={
                        this.button ? this.button :
                            'bg-primary w-52 h-14 flex justify-center items-center font-bold text-white text-lg rounded-bl-xl rounded-tr-xl'
                    }
                >
                    Заказать
                </button>

                {this.state.show ? createPortal(
                    <>
                        <div
                            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none grid grid-cols-12 bg-primary bg-opacity-40">
                            <div className="relative xs:my-3 sm:my-6 xs:max-sm:mx-3 sm:mx-auto xs:max-sm:col-start-1 xs:max-sm:col-end-12 sm:col-start-2 sm:col-end-11">
                                {/*content*/}
                                <div className="xs:p-3 sm:p-9 md:p-14 relative bg-white rounded-xl shadow-xl flex flex-col">
                                    {/*header*/}
                                    <div className="flex items-start justify-between gap-5 pb-9">
                                        <div className="xs:text-3xl sm:text-4xl font-bold text-primary">
                                            Анкета-запрос по услуге &laquo;{this.service}&raquo;
                                        </div>
                                        <button
                                            className="p-0 bg-transparent border-0 text-black xs:text-4xl sm:text-6xl leading-none outline-none focus:outline-none hover:text-primary"
                                            onClick={() => this.hide()}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="flex xs:flex-col lg:flex-row items-start justify-between xs:gap-y-9 sm:gap-x-9">
                                        <div className="hidden xs:max-lg:block">
                                            <div className="mb-4 mx-auto">
                                                <label htmlFor="fio">Имя и фамилия</label>
                                                <input type="text" name="fio" id='fio'
                                                    className="mt-2 w-full outline-none rounded bg-transparent text-base p-2 focus:border-primary" />
                                            </div>
                                            <div className="mb-4 mx-auto">
                                                <label htmlFor="email">Электронная почта</label>
                                                <input type="email" name="email" id='email'
                                                    className="mt-2 w-full outline-none rounded bg-transparent text-base p-2 focus:border-primary" />
                                            </div>
                                            <div className="mb-9 mx-auto">
                                                <label htmlFor="phone">Телефон для связи</label>
                                                <input type="text" name="phone" id='phone'
                                                    className="mt-2 w-full outline-none rounded bg-transparent text-base p-2 focus:border-primary" />
                                            </div>
                                            <div className="mx-auto">
                                                <label htmlFor="promo">Промокод для скидки</label>
                                                <input type="text" name="promo" id='promo'
                                                    className="mt-2 w-full outline-none rounded bg-transparent text-base p-2 focus:border-primary" />
                                            </div>
                                        </div>
                                        <div className="hidden lg:block mt-1.5 w-2/5">
                                            <div className="mb-9">
                                                <FloatingLabelInput type='text' name='fio' children='Имя и фамилия' />
                                            </div>
                                            <div className="mb-9">
                                                <FloatingLabelInput type='email' name='email' children='Электронная почта' />
                                            </div>
                                            <div className="mb-12">
                                                <FloatingLabelInput type='text' name='phone' children='Телефон для связи' />
                                            </div>
                                            <FloatingLabelInput type='text' name='promo' children='Промокод для скидки' />
                                        </div>
                                        <div className="lg:w-3/5">
                                            <p className="mb-4 text-lg font-bold text-black">Чтобы заполнить анкету для заказа услуги и выполнить её оплату, отметьте все пункты ниже:</p>

                                            {
                                                [
                                                    ['checkPdd', 'Я даю согласие на обработку моих персональных данных в соответствии с действующим законодательством Российской Федерации и <a href="/persdata" target="_blank" class="text-primary underline">Политикой обработки персональных данных</a>'],
                                                    ['checkConfidential', 'Я подтверждаю ознакомление с <a href="/privacy.policy" target="_blank" class="text-primary underline">Политикой обеспечения конфиденциальности информации</a>'],
                                                    ['checkAgreement', 'Я ознакомлен(а) с и обязуюсь соблюдать <a href="/terms.of.use" target="_blank" class="text-primary underline">Пользовательское соглашение</a>']
                                                ].map(([id, title]) => (
                                                    <div className="form-check flex flex-row flex-nowrap gap-x-2 mb-4 items-start">
                                                        <input className="form-check-input appearance-none mt-1 h-4 w-4 rounded-sm bg-white text-black checked:bg-primary focus:outline-none" type="checkbox" value="" id={id} name={id} />
                                                        <label className="form-check-label inline-block text-black" for={id} dangerouslySetInnerHTML={{ __html: title }} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="my-6 text-lg font-bold">
                                        Вышлите своё резюме, если оно есть, для предварительного ознакомления (можно вложить 1 файл размером не более 5 MB)
                                    </div>
                                    <div className="mb-8 text-primary text-lg font-bold">
                                        <input type="file" name="resume" id="resume" className="outline-0 focus:outline-0" multiple />
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-start">
                                        <button
                                            className="px-11 py-3.5 bg-primary text-white text-lg font-bold rounded-xl shadow-lg"
                                            type="button"
                                            onClick={() => this.handleSendOrder()}
                                        >
                                            Отправить запрос
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>,
                    document.body
                ) : null
                }
            </>
        )
    }
}

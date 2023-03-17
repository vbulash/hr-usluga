import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import MenuItems from "./MenuItems";

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    show = () => {
        this.setState({ show: true });
    }

    hide = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <>
                {/* Гамбургер */}
                <div>
                    <img src="/assets/images/hamburger.png" alt="" className="mt-2" width="25px" height="20px" onClick={this.show} style={{ cursor: "pointer" }} />
                </div>
                {/* Мобильное меню */}
                {
                    this.state.show ? (
                        <>
                            <div
                                className="flex justify-end items-start overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none grid grid-cols-12 bg-primary bg-opacity-40">
                                <div className="relative my-6 w-80 col-start-2 col-end-11">
                                    {/*content*/}
                                    <div className="p-14 relative bg-white rounded-xl shadow-xl flex flex-col">
                                        {/*header*/}
                                        <div className="flex items-start justify-between items-center gap-5 pb-9">
                                            <div className="text-4xl font-bold text-primary">
                                                Меню
                                            </div>
                                            <button
                                                className="p-0 bg-transparent border-0 text-black text-6xl leading-none outline-none focus:outline-none hover:text-primary"
                                                onClick={() => this.hide()}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="flex flex-col items-start justify-between mb-5">
                                            {
                                                MenuItems.map(([title, url]) => (
                                                    <a href={url} className={
                                                        "mb-4 text-2xl hover:text-primary " +
                                                        (title === this.props.active ? 'text-black font-bold' : 'text-black font-normal')
                                                    }
                                                        key={title}
                                                    >
                                                        {title}
                                                    </a>
                                                )
                                                )}
                                        </div>
                                        <div className="flex flex-col mb-5 text-lg">
                                            <a href="tel:+79031009633" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faPhone} /> +7 (903) 100-96-33</a>
                                            <a href="mailto:info@hr-usluga.ru" className='hover:text-primary hover:underline hover:underline-offset-4'><FontAwesomeIcon icon={faEnvelope} /> info@hr-usluga.ru</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null
                }
            </>
        );
    }
}

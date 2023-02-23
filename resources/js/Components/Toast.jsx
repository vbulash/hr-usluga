import React from "react";

export default class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.type = null;
        this.message = null;
        this.state = { show: false };
        window.toast = this;
    }

    show = (type, message) => {
        this.type = type;
        this.message = message;
        this.setState({ show: true });
    }

    hide = () => {
        this.setState({ show: false });
    }

    render() {
        let background = 'bg-success';
        switch (this.type) {
            case 'success':
                background = 'bg-success';
                break;
            case 'info':
                background = 'bg-info';
                break;
            case 'error':
                background = 'bg-error';
                break;
            default:
                background = 'bg-success';
        }

        return (
            <>
                {
                    this.state.show ? (
                        <div className="overflow-x-hidden overflow-y-auto fixed inset-0  bg-primary bg-opacity-40"
                            style={{ zIndex: 200 }}>
                            <div
                                className={
                                    "fixed w-96 px-8 py-6 rounded-xl shadow-lg bottom-6 right-6 text-white text-semibold " +
                                    background +
                                    " flex flex-row items-start justify-between gap-4"
                                }
                            >
                                <div dangerouslySetInnerHTML={{ __html: this.message }} />
                                <button
                                    className="p-0 bg-transparent border-0 text-xl leading-none outline-none focus:outline-none"
                                    onClick={() => this.hide()}
                                >
                                    &times;
                                </button>
                            </div >
                        </div>
                    ) : null
                }
            </>
        );
    }
}

import React, { useState } from "react";

export default function FloatingTextArea({ name, children }) {
	return (
		<div className="relative">
			<textarea rows={8} id={name} name={name} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none
									focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
			<label htmlFor={name} className="absolute text-sm text-primary font-semibold text-opacity-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:font-semibold
									peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{children}</label>
		</div>
	);
}

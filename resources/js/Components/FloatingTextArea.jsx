import React, { useState } from "react";

export default function FloatingTextArea({ name, children }) {
	const [active, setActive] = React.useState(false);

	function handleActivation(e) {
		setActive(!!e.target.value);
	}

	return (
		<div className="relative border rounded mb-2 bg-gray-600 text-black border-white border-opacity-25">
			<textarea
				className={[
					"outline-none w-full rounded bg-transparent text-base transition-all duration-200 ease-in-out p-2 focus:border-primary",
					active ? "pt-6" : ""
				].join(" ")}
				rows={10}
				id={name}
				name={name}
				onChange={handleActivation}
			/>
			<label
				className={[
					"absolute top-0 left-0 flex items-center font-semibold text-opacity-50 p-2 transition-all duration-200 ease-in-out",
					active ? "text-gray-500 text-xs" : "text-primary text-sm"
				].join(" ")}
				htmlFor={name}
			>
				{children}
			</label>
		</div>
	);
}

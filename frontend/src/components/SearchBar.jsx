import React, { useState } from "react";

function SearchBar({ onApplyManualQuery }) {
	const [manualQuery, setManualQuery] = useState("");

	const handleManualQueryChange = (event) => {
		setManualQuery(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			onApplyManualQuery(manualQuery);
		}
	};

	const applyManualQuery = () => {
		onApplyManualQuery(manualQuery);
	};

	return (
		<div className="flex gap-2 items-center">
			<input
				type="text"
				placeholder="Enter query string..."
				className="input input-bordered w-full max-w-xs h-[3rem] text-sm rounded-sm"
				value={manualQuery}
				onChange={handleManualQueryChange}
				onKeyDown={handleKeyDown}
			/>
			<button className="h-[2rem] btn" onClick={applyManualQuery}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;

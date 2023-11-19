import React, { useState } from "react";

function SearchBar({ onApplyFullTextSearch }) {
	const [fullTextSearch, setFullTextSearch] = useState("");

	const handleFullTextSearchChange = (event) => {
		setFullTextSearch(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			onApplyFullTextSearch(fullTextSearch);
		}
	};

	const applyFullTextSearch = () => {
		onApplyFullTextSearch(fullTextSearch);
	};

	return (
		<div className="flex gap-2 items-center">
			<input
				type="text"
				placeholder="Full-text Search..."
				className="input input-bordered w-full max-w-xs h-[3rem] text-sm rounded-sm"
				value={fullTextSearch}
				onChange={handleFullTextSearchChange}
				onKeyDown={handleKeyDown}
			/>
			<button className="h-[2rem] btn" onClick={applyFullTextSearch}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;

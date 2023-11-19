import React, { useState } from "react";

function FilterSide({ setFilters, setManualQuery }) {
	const [filters, setLocalFilters] = useState({
		level: "",
		message: "",
		resourceId: "",
		timestamp: "",
		traceId: "",
		spanId: "",
		commit: "",
		"metadata.parentResourceId": "",
	});

	const handleInputChange = (filterKey, value) => {
		setLocalFilters((prevFilters) => ({
			...prevFilters,
			[filterKey]: value,
		}));
	};

	const applyFilters = () => {
		setFilters(filters);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			applyFilters();
		}
	};

	return (
		<div className="h-[620px] py-4 px-6 flex flex-col gap-0.5 rounded-md bg-[#1c212b]">
			<div className="font-bold text-xl mb-2 flex justify-between">
				<div>Filters</div>
				<button className="h-[2rem] btn" onClick={applyFilters}>
					Filter
				</button>
			</div>
			{Object.keys(filters).map((filterKey) => (
				<div key={filterKey} className="form-control w-full max-w-xs">
					<label className="label p-1 text-xs">
						<span className="label-text">{filterKey}</span>
					</label>
					<input
						type="text"
						placeholder={`Enter ${filterKey}...`}
						className="input input-bordered w-full max-w-xs h-[2rem] text-sm rounded-sm"
						value={filters[filterKey]}
						onChange={(e) => handleInputChange(filterKey, e.target.value)}
						onKeyDown={handleKeyDown}
					/>
				</div>
			))}
		</div>
	);
}

export default FilterSide;

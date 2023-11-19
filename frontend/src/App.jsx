import { useState } from "react";
import Card from "./components/Card";
import FilterSide from "./components/FilterSide";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
	const [filters, setFilters] = useState({
		level: "",
		message: "",
		resourceId: "",
		timestamp: "",
		traceId: "",
		spanId: "",
		commit: "",
		"metadata.parentResourceId": "",
		startTime: "",
		endTime: "",
		fullTextSearch: "",
	});

	const handleApplyFullTextSearch = (fullTextSearch) => {
		setFilters({ ...filters, fullTextSearch });
	};

	return (
		<div className="flex flex-col w-screen h-screen justify-start">
			<Navbar />

			<main className="w-[1024px] flex flex-col grow mx-auto my-4 gap-4">
				<SearchBar onApplyFullTextSearch={handleApplyFullTextSearch} />
				<div className="flex flex-row gap-4">
					<FilterSide filters={filters} setFilters={setFilters} />
					<Card filters={filters} />
				</div>
			</main>
		</div>
	);
}

export default App;

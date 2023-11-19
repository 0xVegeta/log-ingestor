import { useEffect, useState } from "react";
import axios from "axios";
import JsonFormatter from "react-json-formatter";
import qs from "qs";

function Card({ filters }) {
	const [responseData, setResponseData] = useState([]);
	const [loading, setLoading] = useState(true);
	const jsonStyle = {
		propertyStyle: { color: "#bbb" },
		stringStyle: { color: "rgb(125 211 252)" },
		numberStyle: { color: "darkorange" },
	};

	useEffect(() => {
		let manualQuery = filters.manualQuery;
		const queryString = manualQuery
			? manualQuery
			: qs.stringify(filters, { encode: false });
		filters.manualQuery = ''
			
		axios
			.get(`http://localhost:3000/query/?${queryString}`)
			.then((response) => {
				setResponseData(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [filters]);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="h-[1024px] overflow-auto my-1 rounded-md w-full">
			{responseData.map((item, index) => (
				<div
					key={index}
					className="mockup-code shadow  text-sm text-green-300 mb-4"
				>
					<div className="px-6">
						<JsonFormatter json={item} tabWith={4} jsonStyle={jsonStyle} />
					</div>
				</div>
			))}
		</div>
	);
}

export default Card;

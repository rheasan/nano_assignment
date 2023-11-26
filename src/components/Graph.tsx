import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Graph = (props: {data: Data | undefined, type: "number" | "ratio", shape_type: crystal_shape | undefined}) => {
	const {data, type, shape_type} = props;
	return (
		shape_type !== undefined && data !== undefined &&
		<ResponsiveContainer className="my-4 py-2">
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="index" label={{
					value: "Number of atoms",
					position: "bottom"
				}} />
				<YAxis label={{value: type === "number" ? "No of atoms in bulk vs surface" : "Ratio of bulk atoms vs surface atoms",
					angle: -90,
					position: "left"
					}}
				/>
				<Tooltip />
				<Legend />
				{
					type === "number" &&
					<>
						<Line type="monotone" dataKey="surface" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="bulk" stroke="#82ca9d" />
					</>
				}
				{
					type === "ratio" &&
					<>
						<Line type="monotone" dataKey="ratio" stroke="#8884d8" activeDot={{ r: 8 }} />
					</>
				}
			</LineChart>
		</ResponsiveContainer>
	)
};

export default Graph;
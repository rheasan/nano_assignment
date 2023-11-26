import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

const Columns: ColumnDef<Data[number]>[] = [
	{
		accessorKey : "index",
		header: "N",
	},
	{
		accessorKey : "bulk",
		header: "Bulk Atoms",
	},
	{
		accessorKey : "surface",
		header: "Surface Atoms",
	},
	{
		accessorKey : "total",
		header: "Total Atoms",
	},
]

const Table = (props: {data: Data | undefined}) => {
	const {data} = props;
	
	return (
		<div>
			{
				data !== undefined && <DataTable columns={Columns} data={data} />
			}
		</div>
	)
}

export default Table;
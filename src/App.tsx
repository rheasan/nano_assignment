import { useState, useEffect } from 'react';
import './App.css'
import Table from './components/Table';
import Graph from './components/Graph';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from './components/ui/label';
import { generateData } from './utils/helper';

function App() {
	const [shape, setShape] = useState<crystal_shape | undefined>();
	const [application, setApplication] = useState<application | undefined>();
	const [data, setData] = useState<Data | undefined>();

	useEffect(() => {
		if(shape !== undefined && application !== undefined){
			setData(generateData(shape!, application!));
		}
	}, [shape, application]);

	return (
		<div className="h-full w-full p-8 overflow-y-scroll text-white bg-background">
			<div className='border-slate-800 border-2 rounded-lg p-2 flex flex-col gap-4 my-8'>
				<h1 className='text-3xl font-bold'>Nanomaterial Properties</h1>
				<div className='flex flex-row gap-2 items-center w-fit'>
					<Label htmlFor="shape_type">Select shape of the crystal: </Label>
					<Select onValueChange={(val) => setShape(val as crystal_shape)}>
						<SelectTrigger>
							<SelectValue placeholder="Select Shape Type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="cuboctahedral">Cuboctahedral</SelectItem>
							<SelectItem value="spherical">Spherical</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className='flex flex-row gap-2 items-center w-fit'>
					<Label htmlFor="application">Select application: </Label>
					<Select onValueChange={(val) => setApplication(val as application)}>
						<SelectTrigger>
							<SelectValue placeholder="Select Application" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="none">Default (1 - 100)</SelectItem>
							<SelectItem value="optical">Optical (40 - 100)</SelectItem>
							<SelectItem value="electrical">Electrical (10 - 20)</SelectItem>
							<SelectItem value="magnetic">Magnetic (1 - 10)</SelectItem>
							<SelectItem value="strength">Strength (1 - 50)</SelectItem>
						</SelectContent>
					</Select>
					
				</div>
			</div>
			<hr />
			<Table data={data} />
			<hr />
			<Graph data={data} shape_type={shape} type="number"/>
			<hr />	
			<Graph data={data} shape_type={shape} type="ratio"/>	
		</div>	
	);
}

export default App

export const cuboctahedral = (layer: number) : {total: number, surface: number} => {
	return {
		total: Math.floor((10*Math.pow(layer, 3) + 15*Math.pow(layer, 2) + 11*layer + 3)/3),
		surface: 10*Math.pow(layer, 2) + 2,
	}
}

export const spherical = (layer: number) : {total: number, surface: number} => {
	return {
		total: Math.floor((10*Math.pow(layer, 3) - 15*Math.pow(layer, 2) + 11*layer - 3)/3),
		surface: 10*Math.pow(layer, 2) - 20*layer + 12,
	}
}


export const calcRange = (application: application) => {
		switch (application) {
			case 'none':
				return {
					min: 1,
					max: 100
				}
			case 'optical':
				return {
					min: 40,
					max: 100
				}
			case 'electrical':
				return {
					min: 10,
					max: 20
				}
			case 'magnetic':
				return {
					min: 1,
					max: 10
				}
			case 'strength':
				return {
					min: 1,
					max: 50
				}
		}
	}



export const generateData = (shape: crystal_shape, application: application) => {
	console.log(shape, application);
	const {min, max} = calcRange(application);
	if(shape === "cuboctahedral") {
		const new_data : Data = [];
		for(let i = min; i <= max; i++) {
			const cube = cuboctahedral(i);
			new_data.push({
				index: i,
				bulk: cube.total - cube.surface,
				surface: cube.surface,
				total: cube.total,
				ratio: (cube.total - cube.surface) * 100 / cube.surface
			});
		}
		return new_data;
	}
	else if(shape === "spherical") {
		const new_data : Data = [];
		for(let i = min; i <= max; i++) {
			const sphere = spherical(i);
			new_data.push({
				index: i,
				bulk: sphere.total - sphere.surface,	
				surface: sphere.surface,
				total: sphere.total,
				ratio: (sphere.total - sphere.surface) * 100 / sphere.surface
			});
		}
		return new_data;
	}
}


type crystal_shape = 'cuboctahedral' | 'spherical';
type application = 'optical' | 'electrical' | 'magnetic' | 'strength' | 'none';

type Data = {
	index: number,
	bulk: number,
	surface: number,
	total: number,
	ratio: number
}[];
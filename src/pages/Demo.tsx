import Table  from '../components/Demo/Table';
import  Text from '../components/Demo/Text';
import Grid from '../components/Demo/Grid';

import Link from 'next/link';

import {
	Header,
	SubHeader,
	SubSubHeader,
	SubHeaderH,
	HeaderTitle
} from '../components/Headers';

const links = {
	text: 'text-98',
	box: 'box-98',
	grid: 'grid-98'
};

export default function Home({ isConnected }) {
	return (
		<div className={'grid-h grid-wrap h-full'}>
			<div className={'w-full w-sm-main h-8'}>
				<HeaderTitle tag={'css-fabric'} description={'desc'} />
			</div>
			<div className={'w-16 grid-v'}>
				{Object.keys(links).map((key, index) => {
					return (
						<Link href={`/demo_component/${key}`}>
							<a>{`${key}`}</a>
						</Link>
					);
				})}

				<div className={'w-16 grid-main'}>456456</div>
				<div>456456</div>
				<div>456456</div>
			</div>
			<div className={'grid-main pad-all-1'}>
				<Text />
				<Grid />
				<Table />
			</div>
		</div>
	);
}

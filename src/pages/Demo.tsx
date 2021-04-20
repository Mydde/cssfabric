import { DemoTable } from '../components/Demo/DemoTable';
import { DemoText } from '../components/Demo/DemoText';
import { DemoGrid } from '../components/Demo/DemoGrid';

import {
	Header,
	SubHeader,
	SubSubHeader,
	SubHeaderH,
	HeaderTitle
} from '../components/Headers';

export default function Home({ isConnected }) {

	return (
		<div className={'grid-h grid-wrap h-full'}>
			<div className={'w-full w-sm-main h-8'}>
				<HeaderTitle tag={'css-fabric'} description={'desc'} />
			</div>
			<div className={'w-16 grid-v'}>
				<div className={'w-16 grid-main'}>456456</div>
				<div>456456</div>
				<div>456456</div>
			</div>
			<div className={'grid-main pad-all-1'}>
				<DemoText />
				<DemoGrid />
				<DemoTable />
			</div>
		</div>
	);
}

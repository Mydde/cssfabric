import { DemoTable } from '../components/Demo/DemoTable';
import { DemoText } from '../components/Demo/DemoText';
import { DemoGrid } from '../components/Demo/DemoGrid';

export default function Home({ isConnected }) {
	const tblNames = [
		'tbl-border tbl-head',
		'tbl-h-line tbl-sticky',
		'tbl-v-line',
		'tbl-h-line tbl-v-line',
		'tbl-sticky',
		'tbl-bg-strip-2',
		'tbl-bg-strip-5',
		'tbl-bg-strip-5 tbl-h-line',
		'tbl-shad'
	];

	return (
		<div className={'h-full'}>
			<div className={'h-8'}>header</div>
			<div className={'noir grid-h'}>
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
		</div>
	);
}

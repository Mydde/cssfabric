import { DemoTable } from '../../components/Demo/Table';
import { DemoText } from '../../components/Demo/Text';
import { DemoGrid } from '../../components/Demo/Grid';

import { useRouter } from 'next/router';
import Link from 'next/link';

import {
	Header,
	SubHeader,
	SubSubHeader,
	SubHeaderH,
	HeaderTitle
} from '../../components/Headers';

const links = {
	text: 'text-98',
	box: 'box-98',
	grid: 'grid-98',
	table: 'grid-98',
	scale: 'grid-98',
	input: 'grid-98',
	overflow: 'grid-98',
	zindex: 'grid-98',
	menu: 'grid-98',
};

const modules = { 
	table: <DemoTable />,
	text: <DemoText />,
	grid: <DemoGrid />
};

export default function Home({ isConnected }) {
	const router = useRouter();
	const { module } = router.query;
 
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
			</div>
			<div className={'grid-main pad-all-1'}>
      <Header title={module} description={"red"} >
        
        </Header>	{modules[module]}			
			</div>
		</div>
	);
}

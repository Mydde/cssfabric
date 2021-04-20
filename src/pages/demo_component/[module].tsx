import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';

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
	menu: 'grid-98'
};

// const DynamicComponent = dynamic((node) => import('../../components/Demo/'))

const Modulo =()=> {

	const router = useRouter();

	const {module} = router.query;

	 console.log(  router);
	// @ts-ignore
	const moduleTag = module?.charAt(0)?.toUpperCase() + module?.slice(1) || 'Demo';

	// const Fuse = import('components/Demo/Box');
	/* const DynamicComponent = dynamic(
		import('../../components/Demo/' + moduleTag)
	); */
	//

	return ( 
		<div className={'grid-h grid-wrap h-full'}>
			<div className={'w-full w-sm-main h-8'}>
				<HeaderTitle tag={'css-fabric'} description={'desc'} />
			</div>
			<div className={'w-16 grid-v'}>
				{Object.keys(links).map((key, index) => {
					return (
						<Link key={key} href={`/demo_component/${key}`}>
							<a>{`${key}`}</a>
						</Link>
					);
				})}
			</div> 
			<div className={'grid-main pad-all-1'}>
				module : {module}
				<br />
				moduleTag : {moduleTag}
				<Header  description={'red'} />
				{/* <DynamicComponent /> */}
			</div>
		</div>
	);
}

export default Modulo;
module.exports = Modulo



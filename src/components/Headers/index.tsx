import React from 'react';

interface Props {
	tag: string;
	description: string;
	orientation?: string;
	children?: any;
}

export const Header = (props: Props) => {
	return (
		<div className={'pad-all'}>
			<div className={'grid-h items-center pad-l-16 brd-b'}>
				<span className={'txt-h1 pad-all '}>{props.tag}</span>
				<span className={'txt-h4 pad-all '}>
					css-fabric.{props.tag}
				</span>
			</div>
			<div className={'pad-all'}>
				{props.description}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</div>
	);
};

export const SubHeader = (props: Props) => {
	return (
		<div className={'pad-all grid-main'}>
			<div className={'grid-h items-center'}>
				<div className={'w-4 brd-r txt-center'} style={{textAlign:'center'}}>[sub]</div>
				<div className={'pad-l-4'}>
					<span className={'txt-h3 pad-all '}>{props.tag}</span>
					<div className={'pad-all'}>{props.description}</div>
				</div>
			</div>
			<div className={'pad-l-7'}>
				<div className={'marg-l-8'}>{props.children}</div>
			</div>
		</div>
	);
};

export const SubHeaderH = (props: Props) => {
	return (
		<div className={'grid-h grid-wrap'}>{props.children}</div>
	);
};

export const SubSubHeader = (props: Props) => {

	const orientation = props.orientation || 'h'
	const clk = orientation==='v' ? '' : ''

	return (
		<div className={'pad-all'}>
			<div className={'grid-h items-center'}>
				<span className={'w-4 txt-center'} style={{textAlign:'center'}}>[ssub]</span>
				<div className={'pad-l-4'}>
					<span className={'txt-h4 pad-all '}>{props.tag}</span>
					<div className={'pad-all'}>{props.description}</div>
				</div>
			</div>
			<div className={'pad-l-7'}>
				<div className={'marg-l-8'}>{props.children}</div>
			</div>
		</div>
	);
};

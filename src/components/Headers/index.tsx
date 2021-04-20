import React from 'react';

interface Props {
	tag?: string;
	title?: string;
	title_tag?: string;
	description: string;
	orientation?: string;
	children?: any;
}
interface HeaderProps {
	title: string; 
	tag?: string;
	description?: string; 
	children?: any;
}


export const HeaderTitle = (props: Props) => {
	return (
		<div className={'pad-all  brd-b'}>
			<div className={'grid-h items-center pad-l-16'}>
				<span className={'txt-h1 pad-all '}>{props.tag}</span>
				<span className={'txt-h4 pad-all '}>
					{props.tag}
				</span>
			</div>
			<div className={'pad-all'}>
				{props.description}
			</div>
		</div>
	);
};

export const Header = (props: HeaderProps) => {
	return (
		<div className={'pad-all'}>
			<div className={'grid-h items-center pad-l-16 brd-b'}>
				<span className={'txt-h2 pad-all '}>{props.title}</span>
				<span className={'txt-h4 pad-all '}>
					{props.tag}
				</span>
			</div>
			<div className={'pad-all'}>
				{props.description}
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

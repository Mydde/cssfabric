import React from 'react';

import { Header, SubHeader, SubSubHeader, SubHeaderH } from '../../Headers';

interface Props {}

export const DemoText = (props: Props) => {
	return (
		<div>
			<Header tag={'text'} description={'red'} />
			<SubHeaderH tag="" description="">
				<SubHeader
					tag={'text alignments'}
					description={'voilou voilou voilou voilou'}
				/>
				<SubHeader
					tag={'text transforms'}
					description={'voilou voilou voilou voilou'}
				/>
				<SubHeader tag={'text weights'} description={'voilou voilou voilou voilou'} />
			</SubHeaderH>
			<SubHeader tag={'text title H'} description={'voilou voilou'}>
				<SubSubHeader tag={'H text'} description={'voilou voilou'}>
					<div className="grid-h grid-wrap pad-all items-start">
						{[ ...Array(5) ].map((name, val) => (
							<div className={`grid-main grid-v`}>
								<div>.{`txt-h${val + 1}`}</div>
								<div
									className={`txt-h${val +
										1} grid-main grid-v`}>
									<div>title</div>
								</div>
							</div>
						))}
					</div>
				</SubSubHeader>
				<SubSubHeader
					tag={'H text borders sticked to bottom'}
					description={'voilou voilou'}>
					<div className="grid-h grid-wrap pad-all items-end">
						{[ ...Array(5) ].map((name, val) => (
							<div className={`grid-main brd-b pad-all`}>
								<span
									className={`txt-h${val + 1}`}>{`txt-h${val +
									1}`}</span>
							</div>
						))}
					</div>
				</SubSubHeader>
				<SubSubHeader
					tag={'H text vertically aligned with sized borders'}
					description={'voilou voilou'}>
					<div className="grid-h grid-wrap pad-all items-end">
						{[ ...Array(5) ].map((name, val) => (
							<div className={`grid-main  pad-all`}>
								<span
									className={`brd-b txt-h${val +
										1}`}>{`txt-h${val + 1}`}</span>
							</div>
						))}
					</div>
				</SubSubHeader>
			</SubHeader>
		</div>
	);
};

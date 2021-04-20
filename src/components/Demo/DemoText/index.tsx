import React from 'react';

import { Header, SubHeader, SubSubHeader, SubHeaderH } from '../../Headers';
import conf from 'css-fabric/_config/text.json';
import conf_fabric from 'css-fabric/_config/_css-fabric-conf.json';
import { cssProperties } from 'src/utils/cssProperties';

interface Props {}

export const DemoText = (props: Props) => {
	const fabricModule = 'text';
	let conf_text = conf.text;

	let conf_text_meta = conf_text._metadata;
	let conf_text_data = conf_text._data;
	let conf_text_docs = conf_text._docs;

	const tag = conf_fabric['_css-fabric-conf']._data.text_class_name;
	const tag_shorthand =
		conf_fabric['_css-fabric-conf']._data.text_class_name_short;

	const { font_weights } = conf_text_data;

	console.log(cssProperties.red({ module: 'text' }));
	const tagProperties = cssProperties.red({ module: 'text' });

	return (
		<div>
			<Header
				tag={tagProperties.tag}
				description={conf_text_meta.description}
			/>
			<pre>{JSON.stringify(conf_text, null, '\t')}</pre>
			<SubHeaderH tag="" description="">
				<SubHeader
					tag={'text alignments'}
					description={conf_text_meta.title}
				/>
				<SubHeader
					tag={'text transforms'}
					description={'voilou voilou voilou voilou'}
				/>
				<SubHeader
					tag={'text weights'}
					description={'voilou voilou voilou voilou'}>
					{Object.keys(font_weights).map((key) => {
						const font_weight = font_weights[key];
						const cssProperty = tag_shorthand + '-' + key;

						return (
							<div className={'grid-h'}>
								<span className={'pad-l w-tiers'}>
									{font_weight}
								</span>
								<span className={cssProperty}>
									{' '}
									this text is {font_weight}
								</span>
							</div>
						);
					})}
				</SubHeader>
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

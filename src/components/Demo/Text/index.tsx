import React from 'react';
import { useRouter } from 'next/router'
import { Header, SubHeader, SubSubHeader, SubHeaderH } from '../../Headers';
 
import conf_fabric from '../../../../css-fabric/_config/_css-fabric-conf.json';
import { cssProperties } from 'utils/cssProperties';
import { CssFabricProperties } from 'components/CssFabricProperties';

interface Props {}

const  Text =  (props: Props)=> {
	
	const router = useRouter()
	const { pid } = router.query

	const fabricModule = 'text';
	const tagProperties = cssProperties.red({ module: fabricModule });

	let conf_text_meta = tagProperties.meta;
	let conf_text_data = tagProperties.data;
	let conf_text_docs = tagProperties.docs;

	const tag_shorthand =
		conf_fabric['_css-fabric-conf']._data.text_class_name_short;

	const { font_weights, text_transform, text_align } = conf_text_data;


	return (
		<div>
			<Header
				title={tagProperties.title}
				title_tag={tagProperties.title_tag}
				description={conf_text_meta.description}
			/>
			{/* <pre>{JSON.stringify(conf_text, null, '\t')}</pre> */}
			<SubHeaderH tag="" description="">
				<SubHeader
					tag={'text alignments'}
					description={tagProperties.docs['text_align']}>
					<CssFabricProperties property={text_align} />
				</SubHeader>
				<SubHeader
					tag={'text transforms'}
					description={tagProperties.docs['text_transform']}>
					<CssFabricProperties property={text_transform} />
				</SubHeader>
				<SubHeader
					tag={'text weights'}
					description={tagProperties.docs['font_weights']}>
					<CssFabricProperties property={font_weights} />
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

export default Text;
module.exports = Text
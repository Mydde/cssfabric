import React from 'react';

interface Props {
    property: string
}

export const CssFabricProperties = (props: Props) => {
    const {property} = props
 
    return (<React.Fragment> 
        {Object.keys(property).map((key) => {
						const font_weight = property[key];
						const cssProperty = 'txt-' + key;

						return (<div key={key} className={'grid-h items-center'}>
								<span className={'pad-l w-quarter'}>
                                {font_weight}
								</span>
                                <span className={'pad-all'}>:</span>
								<span className={cssProperty}>
								this text is {font_weight}
								</span>
							</div>)
					})}
    </React.Fragment>);
};

export default CssFabricProperties;

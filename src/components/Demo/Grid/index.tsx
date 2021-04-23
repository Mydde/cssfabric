import React from 'react';

import { Header, SubHeader } from '../../Headers';

interface Props {}

const Grid = (props: Props) => {
	return (
		<div>
			<Header title={'Grid'} description={'red'} />
			<div className={``}>
				{[ 8, 24 ].map((value, idx) => {
					let grid_sizes = [ ...Array(value) ];

					return (
						<div className={`pad-all`}>
							<SubHeader tag={`${value}`} description={'this is grid system'}>
								{grid_sizes.map((name, nidx) => {
									let grid_size = nidx + 1;
									return (
										<div
											className={`w-${grid_size}-${value} brd-u  pad-all`}>
											<span className={``}>
												txt-{`${grid_size}-${value} `}
											</span>
										</div>
									);
								})}
							</SubHeader>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Grid;
module.exports = Grid
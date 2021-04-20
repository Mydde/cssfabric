import React from 'react';
import { Header } from '../../Headers';

interface Props {}

export const DemoTable = (props: Props) => {
	
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
		<div className={'grid-h grid-wrap relative'}>
			{tblNames.map((nameClass) => (
				<div
					className={
						'h-16 grid_main w-lg-mid w-xl-tiers w-xxl-quarter pad-all'
					}>
					<div className={'h-full overflow-auto'}>
						<div className={'pad-all brd-b-1'}>{nameClass}</div>
						<table
							className={'table tbl-layout  w-full ' + nameClass}>
							<thead>
								<tr>
									<th>
										nada <br />
										nada
									</th>
									<th>nada</th>
									<th>nada</th>
								</tr>
							</thead>
							<tbody>
								{[ ...Array(10) ].map((name, val) => (
									<tr key={val}>
										<td>{val + 1}</td>
										<td>{val}</td>
										<td>{val}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			))}
		</div>
	);
};

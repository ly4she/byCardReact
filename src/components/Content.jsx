import React from 'react';

import Films from './Films.jsx';

export default function Content() {
	return(
		<div className="content">
		<div className="content__logo">
			<h2>Узнай первым о появлении билетов в продаже</h2>
		</div>

		<Films />
	</div>
	)
}
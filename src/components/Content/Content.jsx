import React from 'react';

import Films from '../Films/Films.jsx';
//import './Content.css';

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
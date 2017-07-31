import React, {Component} from 'react';

import Menu from '../Menu/Menu.jsx';

export default class Header extends Component {
	

	render() {
		return (
			<header className="header">
				<Menu />
				<div className="header__logo">
					<h1>Bycard оповещения</h1>
				</div>
			</header>
		)
	}
}

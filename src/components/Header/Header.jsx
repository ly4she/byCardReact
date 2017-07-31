import React, {Component} from 'react';

import Menu from '../Menu/Menu.jsx';

export default class Header extends Component {
	state = {
		isHide: false
	}
	
	toggleMenu = () => {
		this.setState({
			isHide: (!this.state.isHide)
		})
	}

	render() {
		return (
			<header className="header">
				<div className="header__menu">
					<div className="header__menuBtn" onClick={this.toggleMenu}>
					</div>
					<Menu hideMenu={this.toggleMenu} isHide={this.state.isHide}/>
				</div>
			<div className="header__logo">
				<h1>Bycard оповещения</h1>
			</div>
		</header>
		)
	}
}

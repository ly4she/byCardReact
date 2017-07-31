import React, {Component} from 'react';

export default class Menu extends Component {
	toggleMenu = () => {
		var el = document.querySelector('.header__menuBtn');
		document.querySelector('.header__hiddenMenu').classList.toggle('header__menu--hideMenu');
		document.addEventListener('click', outsideEvtListener);
			function outsideEvtListener(evt) {
				if (evt.target === el || el.contains(evt.target)) {
					return;
				} else document.querySelector('.header__hiddenMenu').classList.toggle('header__menu--hideMenu');
	    document.removeEventListener('click', outsideEvtListener);
		}
	}
	render(){
	return (
		<div>
			<div className="header__menu">
					<div className="header__menuBtn" onClick={this.toggleMenu}>
				</div>
					
				</div>
			<ul className="header__hiddenMenu header__menu--hideMenu">
				<li><a href="">Link 1</a></li>  
				<li><a href="">Link 2</a></li>
				<li><a href="">Link 3</a></li>  
			</ul>
		</div>
		)
	}
}
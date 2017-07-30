import React from 'react';

export default function Header() {
	return (
		<header className="header">
		<div className="header__menu">
			<input type="checkbox" id="menuBtn" className="header__menuToggle" />
			<label className="header__menuBtn" htmlFor="menuBtn">
				<span className="header__burgerFirstLine"></span>
				<span className="header__burgerSecondLine"></span>
				<span className="header__burgerThirdLine"></span>
			</label>
			<ul className="header__hiddenMenu">
				<li><a href="">Link 1</a></li>  
				<li><a href="">Link 2</a></li>
				<li><a href="">Link 3</a></li>  
			</ul>
		</div>
		<div className="header__logo">
			<h1>Bycard оповещения</h1>
		</div>
	</header>
	)
}

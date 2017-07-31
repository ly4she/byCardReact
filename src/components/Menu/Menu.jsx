import React from 'react';

export default function Menu (props) {
	console.log(props);
	return !props.isHide ? <div></div> :
		<div>
			<ul className="header__hiddenMenu">
				<li><a href="">Link 1</a></li>  
				<li><a href="">Link 2</a></li>
				<li><a href="">Link 3</a></li>  
			</ul>
			<div className="header__overlay" onClick={props.hideMenu}></div>
		</div>
}
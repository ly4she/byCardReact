import React from 'react';

export default function Film(props) {
	
	const {dateStart, title, image} = props.film;
	
	return (
		<div className="films__item">
			<div className="films__date">
				{dateStart}
			</div>
			<div className="films__title">
				{title}
			</div>
			<img className="films__image" src={image} alt="" />
			<button className="films__subscribe">подписаться</button>
		</div>
		)
}
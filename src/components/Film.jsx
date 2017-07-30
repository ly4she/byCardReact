import React from 'react';

export default function Film({film, key}) {
	
	const {dateStart, title, image} = film;
	
	console.log({key});
	return (
		<div key={key} className="films__item">
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
import React from 'react';

export default function Film(props) {

  const {dateStart, title, image} = props.film;

  let date = dateStart.match(/\d\d\d\d-\d\d-\d\d/);

	return (
		<div className="films__item">
			<div className="films__date">
				{date}
			</div>
			<div className="films__title">
				{title}
			</div>
			<img className="films__image" src={image} alt="" />
			<button className="films__subscribe">подписаться</button>
		</div>
		)
}

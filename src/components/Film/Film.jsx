import React from 'react';
import { Button } from 'react-mdc-web';
export default function Film(props) {

  const {dateStart, title, image} = props.film;

  let date = new Date(dateStart);
  let dateToView = date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })


	return (
		<div className="films__item">
			<div className="films__date">
				{dateToView}
			</div>
			<div className="films__title">
				{title}
			</div>
			<img className="films__image" src={image} alt="" />
			<Button rased primary className="films__subscribe">подписаться</Button>
		</div>
		)
}

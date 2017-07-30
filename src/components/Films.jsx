import React from 'react';

let films = '';

function getFilms() {
	
	fetch('https://gist.githubusercontent.com/Kirit0s/53a9820793c1cdf22a9bfb1b71dbc84d/raw/14c5ee2ff6f9fef5e5dbd19b93c28ec45be32791/db')
	.then(response => response.json())
	.then(data => {
		data.forEach((element) => {
			let blockToAdd = `<div class="films__item">
			<div class="films__date">
			${element.dateStart}
			</div>
			<div class="films__title">
			${element.title}
			</div>
			<img class="films__image" src="${element.image}" alt="">
			<button class="films__subscribe">подписаться</button>
			</div>`;
			films = blockToAdd;
		});
		
	});
	console.log(1);
}

export default function Films() {
	//const fm = ;
	console.log(films + "riba");
	return(
		<div className="films">
			
		</div>
	)
}
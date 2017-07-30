import React, { Component } from 'react';

export default class Films extends Component {
	state = {
		films: []
	}

	componentDidMount() {
		this.getFilms();
	}

	getFilms = () => {
	fetch('https://gist.githubusercontent.com/Kirit0s/53a9820793c1cdf22a9bfb1b71dbc84d/raw/14c5ee2ff6f9fef5e5dbd19b93c28ec45be32791/db')
	.then(response => response.json())
	.then(data => {
		const films = [];
		data.forEach((element, i) => {
			
			let blockToAdd = <div key={i} className="films__item">
			<div className="films__date">
			{element.dateStart}
			</div>
			<div className="films__title">
			{element.title}
			</div>
			<img className="films__image" src={element.image} alt="" />
			<button className="films__subscribe">подписаться</button>
			</div>
			films.push(blockToAdd);
		});
		this.setState({
				films
			})
	});
}



	
	render (){
		const { films } = this.state;
		return(
		<div className="films">
			{films}
		</div>
		);
	}
}
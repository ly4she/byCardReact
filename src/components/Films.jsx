import React, { Component } from 'react';

import Film from './Film.jsx';

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
		this.setState({
				films: data
			})
	});
}

	render (){
		const { films } = this.state;
		return(
		<div className="films">
			{films.map((element, i) => { return <Film film = {element} key = {i} />})}
		</div>
		);
	}
}
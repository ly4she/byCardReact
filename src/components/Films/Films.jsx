import React, { Component } from 'react';

import Film from '../Film/Film.jsx';

export default class Films extends Component {
	state = {
		films: []
	}

	componentDidMount() {
		this.getFilms();
	}

	getFilms = () => {
	fetch('https://green-meadow.tk/api/bycard')
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
			{films.map((element, i) => <Film film = {element} key = {i} />)}
		</div>
		);
	}
}

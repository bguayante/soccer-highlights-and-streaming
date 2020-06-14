import React, { Component } from 'react';
import MoviePlayer from './components/MoviePlayer';
import FullMatchList from './components/FullMatchList';
import Filters from './components/Filters';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			matches: [],
			embed: '',
			dropdown: []
		};
	}

	// API CALL TO LOAD MATCHES AND DROPDOWN VALUES ON INITIAL PAGE LOAD //
	loadHandler = () => {
		const url = 'https://www.scorebat.com/video-api/v1/';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ matches: data }, () => {
					this.dropdownHandler()
				})
			})
	};

	dropdownHandler = () => {
		const competitions = [];
		for (let i = 0; i < this.state.matches.length; i++) {
			competitions.push(this.state.matches[i].competition.name);
		}
		const uniqueCompetitions = [...new Set(competitions)].sort();
		this.setState({ dropdown: uniqueCompetitions})
	};

	// ENSURES MATCHES ARE DISPLAYED ON PAGE LOAD //
	componentDidMount(){
		this.loadHandler();
	}
	
	render() {
		return (
			<>
				<MoviePlayer embed={this.state.embed} />
				<Filters
					dropdownHandler={this.dropdownHandler}
					matches={this.state.matches}
					dropdownValues={this.state.dropdown}
				/>
				<FullMatchList matches={this.state.matches} />
			</>
		);
	}
}

export default App;

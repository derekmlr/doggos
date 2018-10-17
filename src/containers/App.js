import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import doggos from '../doggos';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			doggos: [],
			searchValue: ''
		}
	}
	
	componentDidMount() {
		// Set dog data into state.
		this.setState({ doggos });
	}

	onSearchChange = (event) => {
		// Grab search value from event, set to state.
		this.setState({ searchValue: event.target.value });
	}

	render() {
		const { doggos, searchValue } = this.state;
		
		// Filter dogs list via search term entered.
		const filteredDoggos = doggos.filter(doggo => {
			return doggo.name.toLowerCase().includes(searchValue.toLowerCase());
		});
		
		return !doggos.length ? 
			<h1>Loading...</h1> :
			(
				<div className="tc">
					<header id="header">
						<h1 className="f1">Doggos</h1>
						<SearchBox searchChange={this.onSearchChange} />
					</header>
					<Scroll>
						<ErrorBoundary>
							<CardList doggos={filteredDoggos} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

import { setSearchValue, fetchDogData } from '../actions';



class App extends Component {
	
	componentDidMount() {
		// Set dog data into state.
		this.props.fetchDogs();
	}

	render() {
		const { searchValue, onSearchChange, doggos } = this.props;
		
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
						<SearchBox searchChange={onSearchChange} />
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

// Add Redux state into component props
const mapStateToProps = (state) => {
	return {
		searchValue: state.searchDogs.searchValue,
		doggos: state.dogsData.doggos
	}
}

// Add Redux actions into component props
const mapDispatchToProps = (dispatch) => ({
	onSearchChange: (event) => dispatch(setSearchValue(event.target.value)),
	fetchDogs: () => dispatch(fetchDogData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

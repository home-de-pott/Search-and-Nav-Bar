import React, { Component } from 'react';
import NavBar from './NavBar.js'
import Header from './Header.js'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentItem: {
				id: 205594063,
				name: '20 oz. Hammer'
			},
			itemList: []
		}
	}

	onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
	};
	
	onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() => {
    this.setState({
      suggestions: []
    });
  };
	
	render() {
		return (
			<div>
				<Header />
				<NavBar item = {this.state.currentItem} />
			</div>
		)
	}
}

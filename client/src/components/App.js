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
			itemList: ['hammer', 'wrench', 'big hammer', 'tent'],
			itemHovered: false,
			inputValue: '',
			inputList: [],
			showSuggest: false
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
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
	};
	
	handleShadeIn() {
		this.setState({itemHovered: true})
	}
	handleShadeOut() {
		this.setState({itemHovered: false})
	}

	handleInputChange(e) {
		let currentList = [];
		let {itemList, inputValue} = this.state;
		for (let i = 0; i < itemList.length; i++){
			if (itemList[i].includes(e.target.value)){
				currentList.push(itemList[i]);
			}
		}
		this.setState({inputValue: e.target.value, inputList: currentList});
	}

	handleNewItem() {
		//set window to new item
		this.setState({inputValue: ''});
	}

	searchClick(e) {
		this.setState({showSuggest: true});
	}
	
	render() {
		const shadeStyle = {
			position: 'absolute',
			height: '2000px',
			width: '2000px',
			'backgroundColor': 'black',
			opacity: '.3'
		}
		return (
			<div>
				<Header inputValue = {this.state.inputValue}
								inputList = {this.state.inputList}
								itemList = {this.state.itemList}
								handleInputChange = {this.handleInputChange.bind(this)} 
								handleNewItem = {this.handleNewItem.bind(this)} 
								searchClick = {this.searchClick.bind(this)}
								showSuggest = {this.state.showSuggest}/>
				<NavBar itemHoveredName = {this.state.itemHoveredName} item = {this.state.currentItem} 
								handleShadeIn = {this.handleShadeIn.bind(this)} 
								handleShadeOut = {this.handleShadeOut.bind(this)}
								/>
				{this.state.itemHovered === true ? (<div style = {shadeStyle}></div>) : (<></>)}
				<div>Test products with stuff</div>
				<img src="./assets/images/home-depot-logo.png" height = "100" width = "100"/>
			</div>
		)
	}
}

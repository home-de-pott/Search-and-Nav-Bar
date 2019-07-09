import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import axios from 'axios'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentItem: {
				id: 205594063,
				name: '20 oz. Hammer'
			},
			itemList: [],
			itemHovered: false,
			inputValue: '',
			suggestList: [],
			showSuggest: false
		}
	}

	componentDidMount() {
		axios.get('/allItems')
		.then((results) => {
			let itemList = [];
			results.data.map(item => {
				if (item.name.length > 30){
					itemList.push(item.name.substring(0, 30) + "...");
				} else {
				itemList.push(item.name)}
			});
			this.setState({itemList: itemList});
		})
	}
	
	onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
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
			if (itemList[i].toLowerCase().includes(e.target.value.toLowerCase())){
				currentList.push(itemList[i]);
			}
		}
		this.setState({inputValue: e.target.value, suggestList: currentList});
	}

	handleNewItem() {
		//set window to new item
		this.setState({inputValue: ''});
	}

	searchClick(e) {
		this.setState({showSuggest: true});
	}

	clearSuggest() {
		this.setState({showSuggest: false})
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
								suggestList = {this.state.suggestList}
								itemList = {this.state.itemList}
								handleInputChange = {this.handleInputChange.bind(this)} 
								handleNewItem = {this.handleNewItem.bind(this)} 
								searchClick = {this.searchClick.bind(this)}
								showSuggest = {this.state.showSuggest}
								clearSuggest = {this.clearSuggest.bind(this)}/>
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

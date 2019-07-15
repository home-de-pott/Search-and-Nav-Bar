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
			dropDownImage: '',
			itemHovered: false,
			inputValue: '',
			suggestList: [],
			showSuggest: false,
			cart: {
				itemList: [],
				cartClicked: false,
				numberOfItems: 2,
				totalPrice: 57.45
			}
		}
	}

	componentDidMount() {
		window.addEventListener('addToCart', (e) => {
			let newCart = this.state.cart;
			newCart.numberOfItems++;
			for (let i = 0; i < this.state.itemList; i++){
				if (this.state.itemList[i].id === e.detail.id){
					newCart.totalPrice += this.state.itemList[i].price;
					newCart.itemList.push(this.state.itemList[i].name);
					break;
				}
			}
			this.setState({cart: newCart});
		})
		axios.get('/allItems')
		.then((results) => {
			console.log(results)
			let itemList = [];
			results.data.map(item => {
				if (item.name.length > 40){
					itemList.push({name: item.name.substring(0, 40) + "...", id: item.id, price: item.price});
				} else {
				itemList.push({name: item.name, id: item.id, price: item.price})}
			});
			this.setState({itemList: itemList});
		})
	}
	
	handleShadeIn(e) {
		this.setState({itemHovered: true})
	}
	handleShadeOut(e) {
		this.setState({itemHovered: false})
	}

	handleInputChange(e) {
		if (e.target.value === ''){
		 this.setState({showSuggest: false})
		} else {
		let currentList = [];
		let {itemList, inputValue} = this.state;
		for (let i = 0; i < itemList.length; i++){
			if (itemList[i].name.toLowerCase().includes(e.target.value.toLowerCase())){
				currentList.push(itemList[i]);
			}
		}
		this.setState({inputValue: e.target.value, suggestList: currentList, showSuggest: true});
	}
	}

	handleNewItem() {
		//set window to new item
		this.setState({inputValue: ''});
	}

	renderNewItem(e) {
		window.dispatchEvent(
			new CustomEvent('getProduct', {
				detail: {id: e.target.id},
			})
		)
		let curItem = this.state.currentItem;
		this.setState({showSuggest: false})
	}

	setDropImg(img) {
		this.setState({dropDownImage: img})
	}

	cartClick() {
		let newCart = this.state.cart;
		if (this.state.cart.cartClicked) {
			newCart.cartClicked = false;
			this.setState({itemHovered: false, cart: newCart});
		} else {
		newCart.cartClicked = true;
		this.setState({itemHovered: true, cart: newCart})
		}
	}

	handleCheckout() {
		let newCart = {
			itemList: [],
			cartClicked: false,
			numberOfItems: 0,
			totalPrice: 0
		}
		this.setState({itemHovered: false, cart: newCart})
	}
	
	render() {
		const shadeStyle = {
			position: 'absolute',
			height: '2000px',
			width: '2000px',
			'backgroundColor': 'black',
			top: '163px',
			opacity: '.3'
		}
		return (
			<div>
				<Header inputValue = {this.state.inputValue}
								suggestList = {this.state.suggestList}
								itemList = {this.state.itemList}
								handleInputChange = {this.handleInputChange.bind(this)} 
								handleNewItem = {this.handleNewItem.bind(this)}
								renderNewItem = {this.renderNewItem.bind(this)}
								showSuggest = {this.state.showSuggest}
								itemHoverd = {this.state.itemHovered}
								cartClick = {this.cartClick.bind(this)}
								cart = {this.state.cart}
								handleCheckout = {this.handleCheckout.bind(this)}/>
				<NavBar item = {this.state.currentItem} 
								handleShadeIn = {this.handleShadeIn.bind(this)} 
								handleShadeOut = {this.handleShadeOut.bind(this)}
								dropDownImage = {this.state.dropDownImage}
								setDropImg = {this.setDropImg.bind(this)}
								/>
				{this.state.itemHovered === true ? (<div style = {shadeStyle}></div>) : (<></>)}
				<div>Test products with stuff</div>
				<img src="./assets/images/home-depot-logo.png" height = "100" width = "100"/>
			</div>
		)
	}
}
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
				cartList: [],
				cartClicked: false,
				numberOfItems: 0,
				totalPrice: 0
			}
		}
	}

	componentDidMount() {
		this.appendScript("https://code.jquery.com/jquery-3.3.1.slim.min.js");
		this.appendScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js");
		this.appendScript("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js");
		window.addEventListener('addToCart', (e) => {
			let newCart = this.state.cart;
			let tempCart = {}
			newCart.numberOfItems++;
			for (let i = 0; i < this.state.itemList.length; i++){
				if (parseInt(this.state.itemList[i].id) == e.detail.id){
					tempCart.name = this.state.itemList[i].name;
					tempCart.id = e.detail.id;
					tempCart.price = this.state.itemList[i].price;
					newCart.totalPrice += this.state.itemList[i].price;
					newCart.cartList.push({id: this.state.itemList[i].id, name: this.state.itemList[i].name, price: this.state.itemList[i].price});
					break;
				}
			}
			this.setState({cart: newCart});
			axios.post('http://ec2-18-217-166-165.us-east-2.compute.amazonaws.com/addToCart', {tempCart})
			.then((res)=>console.log('item posted'))
		})
	
		axios.get('http://ec2-18-217-166-165.us-east-2.compute.amazonaws.com/allItems')
		.then((results) => {
			let itemList = [];
			results.data.data.map(item => {
				if (item.name.length > 40){
					itemList.push({name: item.name.substring(0, 40) + "...", id: item.id, price: item.price, category: item.category});
				} else {
				itemList.push({name: item.name, id: item.id, price: item.price})}
			});
			this.setState({itemList: itemList});
			if (results.data.cart){
				let newCart = this.state.cart;
				results.data.cart.map((item => {
					newCart.cartList.push({id: item.id, price: item.price, name: item.name})
					newCart.totalPrice += item.price;
				}))
				newCart.numberOfItems = newCart.cartList.length;
				this.setState({cart: newCart});
			}
		})
	}
	
	appendScript(url) {
		const script = document.createElement('script');
		script.src = url;
		script.async = true;
		document.body.appendChild(script);
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

	loseFocusSearch(){
		this.setState({showSuggest: false})
	}

	loseFocusCart(){
		let newCart = this.state.cart;
		newCart.cartClicked = false;
		this.setState({itemHovered: false, cart: newCart})
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
		this.setState({showSuggest: false})
	}

	deleteCartItem(index) {
		let newCart = this.state.cart;
		newCart.numberOfItems--;
		newCart.totalPrice -= newCart.cartList[index].price;
		newCart.cartList.splice(index, 1);
		this.setState({cart: newCart})
	}

	setDropImg(img) {
		let tempImage = [];
		if (img !== ''){
			this.state.itemList.map((item) => {
				if (item.category === img){
					tempImage.push(item.id);
				}
			})
		}
		this.setState({dropDownImage: tempImage})
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
		axios.get('http://ec2-18-217-166-165.us-east-2.compute.amazonaws.com/checkout')
		.then((res) => {console.log(res)
			let newCart = {
				cartList: [],
				cartClicked: false,
				numberOfItems: 0,
				totalPrice: 0
			}
			this.setState({itemHovered: false, cart: newCart})
		});
	}
	
	render() {
		const shadeStyle = {
			position: 'absolute',
			height: '2000px',
			width: '100%',
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
								deleteCartItem = {this.deleteCartItem.bind(this)}
								loseFocusCart = {this.loseFocusCart.bind(this)}
								loseFocusSearch = {this.loseFocusSearch.bind(this)}
								handleCheckout = {this.handleCheckout.bind(this)}/>
				<NavBar item = {this.state.currentItem} 
								handleShadeIn = {this.handleShadeIn.bind(this)} 
								handleShadeOut = {this.handleShadeOut.bind(this)}
								dropDownImage = {this.state.dropDownImage}
								setDropImg = {this.setDropImg.bind(this)}
								/>
				{this.state.itemHovered === true ? (<div style = {shadeStyle}></div>) : (<></>)}
			</div>
		)
	}
}
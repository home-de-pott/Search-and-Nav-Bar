import React from 'react';
import TopNavBar from './TopNavBar.js';
import Cart from './Cart.js'

const Header = (props) => {
  const inputStyle = {
    width: "600px",
    height: '35px',
    border: '1px solid black'
  }
  const imgStyle = {
    position: 'relative',
    display: 'inline',
    width: '36px',
    height: '35px',
    top: '-2px'
  }
  const listStyle = {
    position: 'absolute',
    left: '275px',
    top: '35px',
    width: '600px',
    'backgroundColor': 'white',
    'opacity': 1,
    'zIndex': 1
  }
  const headerStyle = {
    position: 'relative',
    top: '-25px',
    display: 'inline'
  }

  return (
    <div>
      <div className = "row">
        <TopNavBar />
      </div>
      <div style={headerStyle} className = "container-fluid row">
          <img src="./assets/images/home-depot-logo.png" height = "100px" width = "100px"/>
          <img src="./assets/images/location.png" height = "59px" width = "158px" />
          <div style={{display: 'inline'}}>
            <span style={{display: 'inline'}} className = "input-group mb-3">
              <input style = {inputStyle} type = "text" placeholder = "Search"
                onChange = {props.handleInputChange}/>
              <img className="input-group-addon img-fluid p-0 m-0" style = {imgStyle} onClick = {props.renderNewItem} 
                src="./assets/images/button.png" />
            </span>
          </div>
            {props.showSuggest === true ? (
              <div style = {listStyle} className = "border border-dark">
                {props.suggestList.map((item) => <li key = {Math.random()} className = "dropdown-item" 
                                                onClick = {(e) => props.renderNewItem(e)}>{item}</li>)}
              </div>
            ) : (<></>)}
          <span style = {{padding: '30px'}}></span>
          <img src="./assets/images/myAccount.png" height = "40px" />
          <span style = {{padding: '30px'}}></span>
          <Cart cart = {props.cart} itemHoverd = {props.itemHovered} 
                cartClick = {props.cartClick}
                handleCheckout = {props.handleCheckout}/>
       </div>
    </div>
  );
}
 
export default Header;
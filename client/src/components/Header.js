import React from 'react';
import TopNavBar from './TopNavBar.js';

const Header = (props) => {
  const inputStyle = {
    display: 'inline',
    width: "500px"
  }
  const imgStyle = {
    display: 'inline',
    width: '36px',
    height: '31px'
  }
  const listStyle = {
    position: 'relative',
    display: 'inline',
    width: '100%'
  }
  const containerStyle = {
    
  }

  return (
    <div className = "container-fluid">
      <TopNavBar />
        <img src="./assets/images/home-depot-logo.png" height = "100px" width = "100px"/>
        <img src="./assets/images/location.png" height = "59px" width = "158px" />
          <input style = {inputStyle} type = "text" placeholder = "Search"
            onChange = {props.handleInputChange} 
            onClick = {(e) => props.searchClick(e)}
            />
          <img style = {imgStyle} src="./assets/images/button.png" height = "31px" width = "36px"/>
          {props.showSuggest === true ? (
            <div style = {listStyle} className = "dropdown-menu border border-dark">
              {props.inputList.map((item) => <li key = {item} className = "dropdown-item">{item}</li>)}
            </div>
          ) : (<></>)}
    </div>
  );
}
 
export default Header;
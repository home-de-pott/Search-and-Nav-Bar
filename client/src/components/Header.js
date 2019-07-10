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
    height: '31px',
    padding: '0px',
    margin: '0px'
  }
  const listStyle = {
    position: 'absolute',
    left: '275px',
    top: '75px',
    width: '500px',
    'backgroundColor': 'white',
    'opacity': 1,
    'zIndex': 1
  }
  const headingStyle = {
   
  }

  return (
    <div>
      <TopNavBar />
      <div style={{display: 'inline'}} className = "container-fluid row">
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
       </div>
    </div>
  );
}
 
export default Header;
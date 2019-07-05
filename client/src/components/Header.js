import React from 'react';
import TopNavBar from './TopNavBar.js';
import AutoSuggest from 'react-autosuggest'

const Header = (props) => {
  const buttonStyle = {
    height: "31px",
    width: "36px"
  }
  const languages = [
    {
      name: 'C',
      year: 1972
    },
    {
      name: 'Elm',
      year: 2012
    },
  ];

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : languages.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const getSuggestionValue = suggestion => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
);

  return (
    <div className = "container-fluid">
      <TopNavBar />
      <img src="./assets/images/home-depot-logo.png" height = "100" width = "100"/>
      <img src="./assets/images/location.png" height="15%" width = "15%" />
      <input type="text" placeholder = "Search" className = "form-control mdb-autocomplete" />
      <button style = {buttonStyle} className = "mdb-autocomplete-clear">
        <img src="./assets/images/button.png" height = "31" width = "36"/>
      </button>
    </div>
  );
}
 
export default Header;
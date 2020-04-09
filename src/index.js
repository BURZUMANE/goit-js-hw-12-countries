'use strict'
import './styles.css';
// import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './js/fetchCountries'

// const pnotify = require('@pnotify/core/dist/PNotify');

  
const debounce = require('lodash.debounce');

const refs = {
    serachInput: document.querySelector('input[data-input="text"]'),
    countryList: document.querySelector('.country-list__item'),

}


// GET SEARCH INPUT VALUE

refs.serachInput.addEventListener('input', debounce(handleSearch,500));

function handleSearch(e){
    const searchInput = e.target.value;
    if(searchInput.length === 0){
        document.querySelector('.country-list').innerHTML = '';
        return
    }
    fetchCountries(searchInput);
}

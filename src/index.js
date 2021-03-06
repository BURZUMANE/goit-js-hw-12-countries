'use strict'
import './styles.css';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import fetchCountries from './js/fetchCountries'
import debounce from 'lodash.debounce';

const refs = {
    serachInput: document.querySelector('input[data-input="text"]'),
    countryList: document.querySelector('.country-list__item'),

}


// GET SEARCH INPUT VALUE

refs.serachInput.addEventListener('input', debounce(handleSearch,500));

function handleSearch(e){
    const searchInput = e.target.value;
    document.querySelector('.country-list').innerHTML = ''
    fetchCountries(searchInput);

}


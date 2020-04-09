import countryLi from '../templates/countries.hbs'
import '@pnotify/core/dist/BrightTheme.css';
const pnotify = require('@pnotify/core/dist/PNotify');

export default function fetchCountries(searchQuery) {
    const baseUrl = 'https://restcountries.eu/rest/v2/name/';
    const list = document.querySelector('.country-list');
    const name = searchQuery;
    fetch(baseUrl + name)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        }).then(data => {
            if(data.length > 10){
                pnotify.error({
                    title: 'Too many matches found, be more specific!',
                  });
                
            }else if(data.length === 1) {
                const country = data[0];
                const li = countryLi(country)
                list.innerHTML = li;

            }else{
                    const countries = data.reduce((acc, element) => {
                        acc += `
                    <li class="country-list__item">
                        ${element.name}              
                    </li>
                    `;
                        return acc
                    }, '');
                    list.innerHTML = countries;
            }
        }).catch(error =>{
            console.log(error);
        })
}
import countryLi from '../templates/countries.hbs'
import '@pnotify/core/dist/BrightTheme.css';
const pnotify = require('@pnotify/core/dist/PNotify');
const list = document.querySelector('.country-list');
export default function fetchCountries(searchQuery) {
    const baseUrl = 'https://restcountries.eu/rest/v2/name/';
    const list = document.querySelector('.country-list');
    const name = searchQuery;
    fetch(baseUrl + name)
        .then(response => {
            return checkFetch(response);
        
        }).then(data => {
            // console.log(data);
            checkData(data ,name);
        }).catch(error =>{
            console.log(error);
        })
}

const checkFetch = (response)=>{
    if (!response.ok){
        pnotify.error({
            text: '😱Something terrible happened. A fetch error '
          });
        // throw new Error("Error fetching data");
    }else{
        
        return response.json();
    };
}

const checkData = (data ,name)=> {
    if(data.length > 10){
        pnotify.error({
            text: 'Too many matches like that, try to be more specific 🎯',
            animateSpeed: 'fast',
            modules: {
                Animate: {
                  animate: true,
                  inClass: 'bounceInLeft',
                  outClass: 'bounceOutRight'
                }
              }
          });
        }
    // }
    else if(data.length === 2){
        console.log(name);
        data.forEach(element => {
            if(element.name.toLowerCase() === name.toLowerCase()){
                console.log(element.name,'+' ,name);
                list.innerHTML = countryLi(element);
            }
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
}

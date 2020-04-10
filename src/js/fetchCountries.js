import countryLi from '../templates/countries.hbs'
import '@pnotify/core/dist/BrightTheme.css';
const pnotify = require('@pnotify/core/dist/PNotify');
export default function fetchCountries(searchQuery) {
    const baseUrl = 'https://restcountries.eu/rest/v2/name/';
    const list = document.querySelector('.country-list');
    const name = searchQuery;
    fetch(baseUrl + name)
        .then(response => {
            if (!response.ok){
                pnotify.error({
                    text: '😱Something terrible happened. A fetch error '
                  });
                // throw new Error("Error fetching data");
            }else{
                
                return response.json();
            };
        }).then(data => {
            if(data.length > 10){
                pnotify.error({
                    text: 'Too many matches like that, try to be more specific 🎯',
                    animateSpeed: 'fast',
                    modules: {
                        Animate: {
                          animate: false,
                          inClass: 'bounceInLeft',
                          outClass: 'bounceOutRight'
                        }
                      }
                  });
                
            }else if(data.length === 2){
                data.forEach(element => {
                    if(element.name.toLowerCase() === name.toLowerCase()){
                        // console.log(element.name,'+' ,name);
                        list.innerHTML = countryLi(element);
                    }
                });
                // const newData = [...data];

                // newData.forEach(elem => console.log(elem.name.toLowerCase() === name));
                // const filtered = newData.filter(elem =>{
                //     elem.name.toLowerCase() === name.toLowerCase();
                // });
                // console.log(filtered);

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
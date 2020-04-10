import countryLi from '../templates/countries.hbs'
import PNotify from '../../node_modules/pnotify/dist/es/PNotify'
import PNotifyButtons from '../../node_modules/pnotify/dist/es/PNotifyButtons.js';


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
        const notice = PNotify.error({
            text: '😱Something terrible happened. A fetch error ',
            modules: {
              Buttons: {
                closer: false,
                sticker: false
              }
            }
          });
          notice.on('click', function() {
            notice.close();
          });
         
        // throw new Error("Error fetching data");
    }else{
        PNotify.closeAll();
        return response.json();
    };
}

const checkData = (data ,name)=> {
    if(data.length > 10){
        const notice = PNotify.error({
            text: 'Too many matches like that, try to be more specific 🎯',
            modules: {
              Buttons: {
                closer: false,
                sticker: false
              }
            }
          });
          notice.on('click', function() {
            notice.close();
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

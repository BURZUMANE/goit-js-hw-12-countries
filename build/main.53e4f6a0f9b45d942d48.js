(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO");var l=t("aE9I"),a=t.n(l);t("zrP5");const o=t("QJ3N"),s=document.querySelector(".country-list");const c=n=>{if(n.ok)return n.json();o.error({text:"😱Something terrible happened. A fetch error "})},r=(n,e)=>{if(n.length>10)o.error({text:"Too many matches like that, try to be more specific 🎯",animateSpeed:"fast",modules:{Animate:{animate:!0,inClass:"bounceInLeft",outClass:"bounceOutRight"}}});else if(2===n.length)console.log(e),n.forEach(n=>{n.name.toLowerCase()===e.toLowerCase()&&(console.log(n.name,"+",e),s.innerHTML=a()(n))});else if(1===n.length){const e=n[0],t=a()(e);s.innerHTML=t}else{const e=n.reduce((n,e)=>n+=`\n            <li class="country-list__item">\n                ${e.name}              \n            </li>\n            `,"");s.innerHTML=e}};var u=t("jffb"),i=t.n(u);({serachInput:document.querySelector('input[data-input="text"]'),countryList:document.querySelector(".country-list__item")}).serachInput.addEventListener("input",i()((function(n){const e=n.target.value;document.querySelector(".country-list").innerHTML="",function(n){document.querySelector(".country-list");const e=n;fetch("https://restcountries.eu/rest/v2/name/"+e).then(n=>c(n)).then(n=>{r(n,e)}).catch(n=>{console.log(n)})}(e)}),500))},aE9I:function(n,e,t){var l=t("mp5j");n.exports=(l.default||l).template({1:function(n,e,t,l,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"            <li>"+n.escapeExpression(n.lambda(null!=e?o(e,"name"):e,e))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,a){var o,s,c=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,u=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="country-list__item">\n    <div class="country-list__item-content">\n            <p class="country-name"><span class="list-span">Name: </span>'+u("function"==typeof(s=null!=(s=i(t,"name")||(null!=e?i(e,"name"):e))?s:r)?s.call(c,{name:"name",hash:{},data:a,loc:{start:{line:3,column:73},end:{line:3,column:81}}}):s)+'</p>\n    <p class="country-name"><span class="list-span">Population: </span>'+u("function"==typeof(s=null!=(s=i(t,"population")||(null!=e?i(e,"population"):e))?s:r)?s.call(c,{name:"population",hash:{},data:a,loc:{start:{line:4,column:71},end:{line:4,column:85}}}):s)+'</p>\n    <p class="country-name"><span class="list-span">Languages: </span></p>\n    <ul class="languages">\n'+(null!=(o=i(t,"each").call(c,null!=e?i(e,"languages"):e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:7,column:8},end:{line:9,column:17}}}))?o:"")+'    </ul>\n    </div>\n    <img class="flag-img" src="'+u("function"==typeof(s=null!=(s=i(t,"flag")||(null!=e?i(e,"flag"):e))?s:r)?s.call(c,{name:"flag",hash:{},data:a,loc:{start:{line:12,column:31},end:{line:12,column:39}}}):s)+'" alt="'+u("function"==typeof(s=null!=(s=i(t,"name")||(null!=e?i(e,"name"):e))?s:r)?s.call(c,{name:"name",hash:{},data:a,loc:{start:{line:12,column:46},end:{line:12,column:54}}}):s)+'">\n\n</li>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.53e4f6a0f9b45d942d48.js.map
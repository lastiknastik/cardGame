(()=>{"use strict";function t(e){if(null==e||!1===e)return document.createTextNode("");if("string"==typeof e||"number"==typeof e||!0===e)return document.createTextNode(e);if(Array.isArray(e)){const a=document.createDocumentFragment();return e.forEach((e=>{a.appendChild(t(e))})),a}const a=document.createElement(e.tag);return e.cls&&[].concat(e.cls).forEach((t=>{a.classList.add(t)})),e.attrs&&Object.keys(e.attrs).forEach((t=>{a.setAttribute(t,e.attrs[t])})),a.appendChild(t(e.content)),a}const e=[{type:"diamonds",rank:"6",uri:"./static/img/cards/6 бубны.svg"},{type:"clubs",rank:"6",uri:"./static/img/cards/6 крести.svg"},{type:"spades",rank:"6",uri:"./static/img/cards/6 пики.svg"},{type:"hearts",rank:"6",uri:"./static/img/cards/6 черви.svg"},{type:"diamonds",rank:"7",uri:"./static/img/cards/7 бубны.svg"},{type:"clubs",rank:"7",uri:"./static/img/cards/7 крести.svg"},{type:"spades",rank:"7",uri:"./static/img/cards/7 пики.svg"},{type:"hearts",rank:"7",uri:"./static/img/cards/7 черви.svg"},{type:"diamonds",rank:"8",uri:"./static/img/cards/8 бубны.svg"},{type:"clubs",rank:"8",uri:"./static/img/cards/8 крести.svg"},{type:"spades",rank:"8",uri:"./static/img/cards/8 пики.svg"},{type:"hearts",rank:"8",uri:"./static/img/cards/8 черви.svg"},{type:"diamonds",rank:"9",uri:"./static/img/cards/9 бубны.svg"},{type:"clubs",rank:"9",uri:"./static/img/cards/9 крести.svg"},{type:"spades",rank:"9",uri:"./static/img/cards/9 пики.svg"},{type:"hearts",rank:"9",uri:"./static/img/cards/9 черви.svg"},{type:"diamonds",rank:"6",uri:"./static/img/cards/10 бубны.svg"},{type:"clubs",rank:"6",uri:"./static/img/cards/10 крести.svg"},{type:"spades",rank:"10",uri:"./static/img/cards/10 пики.svg"},{type:"hearts",rank:"10",uri:"./static/img/cards/10 черви.svg"},{type:"diamonds",rank:"jack",uri:"./static/img/cards/валет бубны.svg"},{type:"clubs",rank:"jack",uri:"./static/img/cards/валет крести.svg"},{type:"spades",rank:"jack",uri:"./static/img/cards/валет пики.svg"},{type:"hearts",rank:"jack",uri:"./static/img/cards/валет черви.svg"},{type:"diamonds",rank:"queen",uri:"./static/img/cards/дама бубны.svg"},{type:"clubs",rank:"queen",uri:"./static/img/cards/дама крести.svg"},{type:"spades",rank:"queen",uri:"./static/img/cards/дама пики.svg"},{type:"hearts",rank:"queen",uri:"./static/img/cards/дама черви.svg"},{type:"diamonds",rank:"king",uri:"./static/img/cards/король бубны.svg"},{type:"clubs",rank:"king",uri:"./static/img/cards/король крести.svg"},{type:"spades",rank:"king",uri:"./static/img/cards/король пики.svg"},{type:"hearts",rank:"king",uri:"./static/img/cards/король черви.svg"},{type:"diamonds",rank:"ace",uri:"./static/img/cards/туз бубны.svg"},{type:"clubs",rank:"ace",uri:"./static/img/cards/туз крести.svg"},{type:"spades",rank:"ace",uri:"./static/img/cards/туз пики.svg"},{type:"hearts",rank:"ace",uri:"./static/img/cards/туз черви.svg"}];document.addEventListener("DOMContentLoaded",(function(){window.app=function(){const a={state:{showedCards:[]},screens:{mainMenu:function(){const e=document.querySelector(".app");e.appendChild(t({tag:"div",cls:"main-menu-title",content:"Выбери сложность"})),e.appendChild(t({tag:"form",content:[{tag:"div",cls:"main-menu-levels",content:[{tag:"div",cls:["main-menu-levels-item","main-menu-levels-item-regular"],content:[{tag:"input",attrs:{type:"radio",name:"diff_levels",value:1}},{tag:"label",content:1,attrs:{for:"diff_levels"}}]},{tag:"div",cls:["main-menu-levels-item","main-menu-levels-item-regular"],content:[{tag:"input",attrs:{type:"radio",name:"diff_levels",value:2}},{tag:"label",content:2,attrs:{for:"diff_levels"}}]},{tag:"div",cls:["main-menu-levels-item","main-menu-levels-item-regular"],content:[{tag:"input",attrs:{type:"radio",name:"diff_levels",value:3}},{tag:"label",content:3,attrs:{for:"diff_levels"}}]}]},{tag:"button",cls:"main-menu-submit",content:"Старт"}]})),e.querySelector(".main-menu-levels").addEventListener("click",(function(t){if("INPUT"===t.target.tagName){t.stopPropagation();const a=e.querySelectorAll(".main-menu-levels-item input");for(const t of a){const e=t.parentElement;t.checked?(e.classList.remove("main-menu-levels-item-regular"),e.classList.add("main-menu-levels-item-checked")):(e.classList.remove("main-menu-levels-item-checked"),e.classList.add("main-menu-levels-item-regular"))}}})),e.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const s=e.querySelectorAll(".main-menu-levels-item input");let r=0;for(const t of s)if(t.checked){r=t.value;break}a.state.diffLevel=r,a.renderNextScreen()}))},game:function(){const s=document.querySelector(".app"),r=Number(a.state.diffLevel);s.appendChild(t({tag:"div",cls:"game-header",content:[{tag:"div",cls:"game-timer",content:[{tag:"div",cls:"game-timer-min",content:"00"},{tag:"div",content:"."},{tag:"div",cls:"game-timer-sec",content:"00"}]},{tag:"div",cls:"game-header-actions",content:[{tag:"button",cls:"game-header-actions-submit",content:"Начать заново"}]}]}));const n=s.appendChild(t({tag:"div",cls:["game-content",`game-content-grid-${r}`]})),i=t=>{t.classList.contains("card-front")&&t.parentElement.classList.add("game-content-card-show")},c=t=>{t.classList.contains("card-front")&&t.parentElement.classList.remove("game-content-card-show")};n.addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("card-front")){i(e);const t={rank:e.parentElement.dataset.cardRank,type:e.parentElement.dataset.cardType};1===a.state.showedCards.length?setTimeout((()=>{if(a.state.showedCards[0].rank===t.rank)alert("well done!");else{alert("oh noooo"),c(e);const t=document.querySelector(`.game-content-card[data-card-rank="${a.state.showedCards[0].rank}"][data-card-type="${a.state.showedCards[0].type}"] .card-front`);c(t)}a.state.showedCards=[]}),500):a.state.showedCards.push(t)}}));let d=0;switch(r){case 1:d=8;break;case 2:d=18;break;case 3:d=36}const m=e.sort((()=>Math.random()-.5));for(let e=0;e<d;e++)n.appendChild(t({tag:"div",cls:"game-content-card",attrs:{"data-card-type":m[e].type,"data-card-rank":m[e].rank},content:[{tag:"div",cls:"card-front"},{tag:"img",cls:"card-back",attrs:{src:m[e].uri}}]}));setTimeout((()=>{n.querySelectorAll(".card-front").forEach((t=>{i(t),setTimeout((()=>{c(t)}),5e3)}))}),0)}},renderScreen:function(t){if(!t)throw new Error("Требуется передать наименование экрана");if(!this.screens[t])throw new Error(`Экрана ${t} не существует`);this.state.stage=t;const e=document.querySelector(".app");e.dataset.specialClass&&e.classList.remove(e.dataset.specialClass);let a="";a="mainMenu"===t?"main-menu":t,e.classList.add(a),e.dataset.specialClass=a,e.textContent="",this.screens[t]()},renderNextScreen:function(){"mainMenu"===this.state.stage&&this.renderScreen("game")}};return a.screens.mainMenu.bind(a),a.screens.game.bind(a),a}(),window.app.renderScreen("mainMenu")}))})();
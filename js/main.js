import * as data from './data.js';
import displayUserCard from './displayUserCard.js';

const userCardElem = document.querySelector('.userCard');
const titleElem = document.querySelector('title');
const h1Elem = document.querySelector('h1');

userCardElem.innerHTML = displayUserCard(data.user); 
titleElem.innerHTML = data.pageTitle; 
h1Elem.innerHTML = data.pageTitle; 
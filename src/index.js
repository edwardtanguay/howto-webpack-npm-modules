import * as data from './data.js';
import displayUserCard from './displayUserCard.js';
import _ from 'lodash';
import '../css/main.scss';

const userCardElem = document.querySelector('.userCard');
const titleElem = document.querySelector('title');
const h1Elem = document.querySelector('h1');
const lodashExampleElem = document.querySelector('.lodashExample');

userCardElem.innerHTML = displayUserCard(data.user); 
titleElem.innerHTML = data.pageTitle; 
h1Elem.innerHTML = data.pageTitle; 
lodashExampleElem.innerHTML = `This is version ${_.VERSION} and this is ${_.camelCase('camel case')}.`;
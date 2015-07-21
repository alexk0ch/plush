'use strict';

const Handlebars = require('handlebars');
const data = require('./data');
let source = document.querySelector('#discussion-tempalate').innerHTML;
let template = Handlebars.compile(source);

let rightBox = document.querySelector('.right-box');

rightBox.innerHTML = template(data);

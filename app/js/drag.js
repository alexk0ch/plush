'use strict';

const on = require('./events');

let els = document.querySelectorAll('.move-item'),
    dragSrcEl = null;

let dragStart = function (e) {
    e = e || window.e;
    console.log('start');
  
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
};

let dragLeave = function (e) {
    e = e || window.e;
    console.log('leave');
    this.classList.remove('over');
};

let dragOver = function (e) {
    e = e || window.e;
  
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false; 
};

let dragDrop = function (e) {
    e = e || window.e;
 
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
   	
    return false;
};

let dragEnter = function (e) {
    e = e || window.e;
    console.log('enter');
    this.classList.add('over');
    console.log(this);
};

let dragEnd = function (e) {
    e = e || window.e;
    [].forEach.call(els, function (el) {
      el.classList.remove('over');
    });
};

[].forEach.call(els, function (el) {
   on(el, 'dragstart', dragStart);
   on(el, 'dragleave', dragLeave);
   on(el, 'dragover', dragOver);
   on(el, 'dragenter', dragEnter);
   on(el, 'dragend', dragEnd);
   on(el, 'drop', dragDrop);
});

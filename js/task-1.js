'use strict';

const numberEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberEl.length}`);

numberEl.forEach(el => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelectorAll('ul li').length}`);
});

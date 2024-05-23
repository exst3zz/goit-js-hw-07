function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type=number]');
const createEl = document.querySelector('[data-create]');
const containEl = document.querySelector('#boxes');
const destroyEl = document.querySelector('[data-destroy]');

createEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyEl.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let collection = '';
  let size = 30;
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      collection += `<div style="width: ${size}px; height: ${size}px;background-color: ${getRandomHexColor()}; border: 2px solid black; border-radius: 7px; margin-bottom: 10px;"></div>\n`;
      size += 10;
    }
  } else {
    alert('Enter the number from 1-100');
    inputEl.value = ``;
    return;
  }
  containEl.innerHTML = collection;
}

function destroyBoxes() {
  containEl.innerHTML = ``;
}

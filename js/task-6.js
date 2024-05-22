function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input[type=number]');
const boxesEl = document.querySelector('#boxes');

createEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyEl.addEventListener('click', () => {
  clearBoxes();
  inputEl.value = '';
});

const createBoxes = amount => {
  clearBoxes();
  let size = 30;

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxesEl.appendChild(box);
      size += 10;
    }
  } else {
    alert('Provide value in range from 1 to 100');
  }
};

const clearBoxes = () => {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
};

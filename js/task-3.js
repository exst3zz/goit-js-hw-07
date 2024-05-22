const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  spanEl.textContent = inputEl.value.trim()
    ? inputEl.value.trim()
    : 'Anonymous';
});

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }

  const obj = { email: email.value.trim(), password: password.value.trim() };
  console.log(obj);

  formEl.reset();
});

// pop-up window
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const promo = document.querySelector('#promo');
const closeMenu = document.querySelector('#close');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  promo.classList.toggle('opacity');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
  promo.classList.remove('opacity');
});

//form validation
const contactForm = document.querySelector('#contactForm');

function validateForm() {
  document.querySelector('#name-error').innerText = '';
  document.querySelector('#email-error').innerText = '';
  document.querySelector('#message-error').innerText = '';

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  let isValid = true;

  if (name === '') {
    document.querySelector('#name-error').innerText =
      'Пожалуйста, введите ваше имя.';
    isValid = false;
  }

  if (email === '') {
    document.querySelector('#email-error').innerText =
      'Пожалуйста, введите вашу почту.';
    isValid = false;
  }

  if (message === '') {
    document.querySelector('#message-error').innerText =
      'Пожалуйста, введите ваше сообщение.';
    isValid = false;
  }

  return isValid;
}

function sendFormData() {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  const formData = {
    name: name,
    email: email,
    message: message,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#success-message').innerText =
        'Сообщение успешно отправлено!';
      document.querySelector('#contactForm').reset();
    })
    .catch((error) => {
      document.querySelector('#success-message').innerText =
        'Произошла ошибка при отправке сообщения.';
      console.error('Ошибка:', error);
    });
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    sendFormData();
  }
});

// Task

function nthFibo(n) {
  if (n <= 0) {
    return;
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  let a = 0,
    b = 1,
    temp;

  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(nthFibo(4));

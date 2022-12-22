import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

let LOCALSTORAGE_KEY = 'feedback-form-state';

let feedbackFormState = {};

inputData();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = { email: email.value, message: message.value };

  if (email.value || message.value != '') {
    console.log('user feedback', elements);
  }

  feedbackFormState = {};

  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(event) {
  feedbackFormState[event.target.name] = event.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
}

function inputData() {
  let existingData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (existingData) {
    existingData = JSON.parse(existingData);
    Object.entries(existingData).forEach(([name, value]) => {
      feedbackFormState[name] = value;
      form.elements[name].value = value;
    });
  } else {
    email.value = '';
    message.value = '';
  }
}

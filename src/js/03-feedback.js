const _ = require('lodash');
const feedbackForm = document.querySelector('.feedback-form');
const refs = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', _.throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedForms = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedForms) {
    refs.input.value = savedForms.email;
    refs.textarea.value = savedForms.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

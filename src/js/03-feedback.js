const _ = require('lodash');
const feedbackForm = document.querySelector('.feedback-form');
const refs = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

feedbackForm.addEventListener('input', _.throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const savedForms = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedForms) {
    refs.input.value = savedForms.email;
    refs.textarea.value = savedForms.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

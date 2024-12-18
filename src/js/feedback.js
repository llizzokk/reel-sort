'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const submitButton = document.getElementById('submitButton');
  const inputs = document.querySelectorAll('.feedback-input');

  if (!form || !submitButton) {
    console.error('Форма или кнопка не найдены!');
    return;
  }

  const checkFormValidity = () => {
    const allFieldsFilled = Array.from(inputs).every(
      input => input.value.trim() !== ''
    );
    submitButton.disabled = !allFieldsFilled;
  };

  inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    iziToast.success({
      message: 'Feedback was successfully sent!',
      messageColor: '#dfe0e2',
      backgroundColor: '#37302c',
      position: 'topRight',
    });

    form.reset();

    submitButton.disabled = true;
  });

  checkFormValidity();
});

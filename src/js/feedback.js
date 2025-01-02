'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const submitButton = document.getElementById('submitButton');
  const inputs = document.querySelectorAll('.feedback-input');

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
    if (window.currentLanguage === 'uk') {
      iziToast.success({
        message: 'Відгук успішно надіслано!',
        messageColor: '#dfe0e2',
        backgroundColor: '#37302c',
        position: 'topRight',
      });
    } else {
      iziToast.success({
        message: 'Feedback was successfully sent!',
        messageColor: '#dfe0e2',
        backgroundColor: '#37302c',
        position: 'topRight',
      });
    }

    form.reset();

    submitButton.disabled = true;
  });

  checkFormValidity();
});

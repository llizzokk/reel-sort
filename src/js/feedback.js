'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const text = 'Leave a review...';
  const typingElement = document.querySelector('.feedback-title');
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent = text.slice(0, index + 1);
      index++;
      setTimeout(type, 150);
    } else {
      setTimeout(() => {
        index = 0;
        typingElement.textContent = '';
        type();
      }, 2000);
    }
  }

  type();

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

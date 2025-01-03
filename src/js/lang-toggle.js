'use strict';

const langSelect = document.querySelector('.checkbox');
const textElements = document.querySelectorAll('.lang');

window.currentLanguage = localStorage.getItem('lang') || 'en';

langSelect.checked = window.currentLanguage === 'uk';

langSelect.addEventListener('change', handleChange);

async function loadTranslations() {
  const response = await fetch('lang.json');
  return await response.json();
}

async function handleChange() {
  const isChecked = langSelect.checked;
  window.currentLanguage = isChecked ? 'uk' : 'en';

  localStorage.setItem('lang', window.currentLanguage);

  const translations = await loadTranslations();

  textElements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (
      translations[window.currentLanguage] &&
      translations[window.currentLanguage][key]
    ) {
      element.textContent = translations[window.currentLanguage][key];
    }
  });

  const langChangeEvent = new Event('languageChange');
  window.dispatchEvent(langChangeEvent);
}

handleChange();

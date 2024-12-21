'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const topLink = document.querySelector('.top-link-hidden');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          topLink.classList.add('top-link-hidden');
        } else {
          topLink.classList.remove('top-link-hidden');
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  observer.observe(document.querySelector('.header'));
});

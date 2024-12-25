'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.genres-item');

  function startAnimation() {
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = `translateX(0)`;
      }, index * 300);
    });
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(document.querySelector('.genres-section'));
});

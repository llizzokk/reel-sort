'use strict';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('#ac-list', {
    closeOther: true,
  });
  accordion.open(0);
});

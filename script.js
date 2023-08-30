'use strict';

const codes = document.querySelectorAll('.code');

// auto focus on first input
codes[0].focus();

codes.forEach((code, indx) => {
  code.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
      codes[indx].value = '';
      // setTimeout - allows to input number - without = 0
      setTimeout(
        () => codes[indx + 1 < codes.length ? indx + 1 : indx].focus(),
        10
      );
    } else {
      if (e.key === 'Backspace') {
        setTimeout(() => codes[indx - 1 > 0 ? indx - 1 : 0].focus(), 10);
      }
    }
  });
});

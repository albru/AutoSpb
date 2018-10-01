document.addEventListener("DOMContentLoaded", function (event) {

const slider = (function() {
    const left = document.querySelector('.js-slider-left');
    const right = document.querySelector('.js-slider-right');
    const items = document.querySelector('.js-slider-items');

    const minRight = 0;
    const maxRight = 1400;
    const step = 700;
    let currentRight = 0;

    items.style.right = currentRight;
    
    right.onclick = () => {
      if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = currentRight + 'px';
        left.style.opacity = 1;
        left.style.cursor = 'pointer';
      }
      if (currentRight === maxRight) {
        right.style.opacity = .2;
        right.style.cursor = 'initial';
      }
    }
    left.onclick = () => {
      if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = currentRight + 'px';
        right.style.opacity = 1;
        right.style.cursor = 'pointer';
      }
      if (currentRight === minRight) {
        left.style.opacity = .2;
        left.style.cursor = 'initial';
      }
    }
  })();
  
});






document.addEventListener("DOMContentLoaded", function (event) {

const slider = (function() {
    const left = document.querySelector('.js-slider-left');
    const right = document.querySelector('.js-slider-right');
    const items = document.querySelector('.js-slider-items');
    const slides = Array.from(document.querySelectorAll('.ourcustomers-item'));
    const itemWidth = document.querySelector('.ourcustomers-slider__wrap').offsetWidth;
    const minRight = 0;
    let maxRight = itemWidth * 2;
    let step = itemWidth;
    console.log(slides)

    slides.forEach(item => {
      item.style.width = itemWidth + 'px';
    })



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






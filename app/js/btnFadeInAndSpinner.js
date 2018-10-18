function BODY_BEFORE_START(state) {
  const bodyBeforeStart = document.body;
  bodyBeforeStart.style.overflow = state;
}
BODY_BEFORE_START('hidden');

window.onload = () => {
  const hideSpinner = (function name() {
    const spinner = document.querySelector('.spinner');
    const spinnerBg = document.querySelector('.spinner-bg');
    function spinnerFadeOut() {
      const spinnerAnimate = new Promise(function (resolve) {
        spinner.style.opacity = 0;
        spinnerBg.style.opacity = 0;
        setTimeout(() => {
          BODY_BEFORE_START('initial');
          spinner.style.display = 'none';
          spinnerBg.style.display = 'none';
          resolve();
        }, 300);
      })
      return spinnerAnimate;
    }
    spinnerFadeOut()
  })();

  const showBnts = (function() {
    const items = document.querySelectorAll('.header-second__btn-cont')
    const itemsArr = Array.from(items);

    function itemsAnimate(index) {
      const animate = new Promise(function (resolve) {
        setTimeout(() => {
          itemsArr[index].style.opacity = "1";
          resolve();
        }, 300);
      })
      return animate;
    }

    itemsAnimate(0)
    .then(() => itemsAnimate(1))
    .then(() => itemsAnimate(2))
    .then(() => itemsAnimate(3))
    .then(() => itemsAnimate(4))
    .then(() => itemsAnimate(5))
  })()
};
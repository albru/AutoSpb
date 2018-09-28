const features = (function() {
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
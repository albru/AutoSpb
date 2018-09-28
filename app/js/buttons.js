const buttons = (function name(params) {
  let buttons = document.querySelectorAll('.ourworks-btn');
  let buttonsArr = Array.from(buttons);
  
  buttonsArr.forEach(el => {
    el.addEventListener('mouseover', function(e) {
      let text = e.target.innerHTML;
      e.target.innerHTML = 'Заказать';
      el.addEventListener('mouseout', function (e) {
        e.target.innerHTML = text;
      })
    })
  });
})()
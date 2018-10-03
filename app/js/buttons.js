document.addEventListener("DOMContentLoaded", function (event) {
  const priceBtn = (function (params) {
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
  })();

  const greetingsPrivacy = document.querySelector('.header-second__form-privacy');
  const greetingsPrivacyText = document.querySelector('.privacy-cont');
  const popupPrivacy = document.querySelector('.popup__form-privacy');
  const popupPrivacyText = document.querySelector('.popup-privacy-cont');

  function showPrivacy (mouseOveElem, elem) {
    mouseOveElem.addEventListener('mouseover', function () {
      elem.style.opacity = 1;
    })

    mouseOveElem.addEventListener('mouseleave', function () {
      elem.style.opacity = 0;
    })
}

showPrivacy(greetingsPrivacy, greetingsPrivacyText)
showPrivacy(popupPrivacy, popupPrivacyText)






  const popupButtons = (function (params) {
    const popupBtns = document.querySelectorAll('.js-popup-btn');
    const popupBtnsArr = Array.from(popupBtns);
    const popupCont = document.querySelector('.popup-cont');
    const popupWrap = document.querySelector('.popup-wrap');
    const popupExitBtn = document.querySelector('.popup-exit');
    const body = document.querySelector('.body');
    let popupActive = false;

    function formExit(elem) {
      elem.addEventListener('click', function (e) {
        e.stopPropagation();
        if (popupActive = true) {
          popupCont.style.display = 'none';
          popupWrap.style.display = 'none';
          body.style.overflow = 'initial';
        }
      })
    }

    formExit(popupCont)
    formExit(popupExitBtn)

    popupBtnsArr.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const clientHeight = document.body.getBoundingClientRect().top;
        const top = - clientHeight;
        popupCont.style.display = 'block';
        popupCont.style.top = top + 'px';
        popupWrap.style.display = 'block';
        popupWrap.style.top = top + 'px';
        body.style.overflow = 'hidden';
        popupActive = !popupActive;
      })
    })
  })()
});
let tabs = (function () {
  const buttons = document.querySelectorAll('.howitworks-right__tab');
  const lines = document.querySelectorAll('.howitworks-right__line');
  const textDisplay = document.querySelector('.howitworks-left__desc-text');
  const buttonsArr = [];
  const linesArr = [];

  const desc = [
    { id: 'jsDocs', text: 'jsDocs' },
    { id: 'jsBody', text: 'jsBody' },
    { id: 'jsEngine', text: 'jsEngine' },
    { id: 'jsWheel', text: 'jsWheel' },
    { id: 'jsBrake', text: 'jsBrake' }
  ]

  textDisplay.innerHTML = desc[0].text;

  function createArr (elem, num, target) {
    let arr = Array.from(elem)
    for(let i = 0; i <= num; i++) {
      target.push(arr[i])
    }
  } 

  createArr(buttons, desc.length - 1, buttonsArr)
  createArr(lines, desc.length - 1, linesArr)

  buttonsArr.forEach(elem => {
    elem.addEventListener('click', function (e) {
      let id = e.target.getAttribute('id');
      let objId = [...desc].filter(val => val.id === id)
      let lineId = [...linesArr].filter(val => val.classList.contains(id))

      for (let key in buttonsArr) {
        buttonsArr[key].classList.remove('js-tab-active')
      }

      for (let key in linesArr) {
        linesArr[key].classList.remove('js-line-active')
      }

      textDisplay.innerHTML = objId[0].text

      e.target.classList.contains('js-tab-active') ? (
        null
      ) : (
        e.target.classList.add('js-tab-active'),
        lineId[0].classList.add('js-line-active')
      );
      
    })
  })
})()
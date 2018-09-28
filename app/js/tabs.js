let tabs = (function () {
  const buttons = document.querySelectorAll('.howitworks-right__tab');
  const lines = document.querySelectorAll('.howitworks-right__line');
  const textDisplay = document.querySelector('.howitworks-left__desc-text');
  const buttonsArr = [];
  const linesArr = [];

  const desc = [
    { id: jsDocs, text: 'jsDocs' },
    { id: jsBody, text: 'jsBody' },
    { id: jsEngine, text: 'jsEngine' },
    { id: jsWheel, text: 'jsWheel' },
    { id: jsBrake, text: 'jsBrake' }
  ]

  function createArr (elem, num, target) {
    let arr = Array.from(elem)
    for(let i = 0; i <= num; i++) {
      target.push(arr[i])
    }
  } 

  createArr(buttons, desc.length - 1, buttonsArr)
  createArr(lines, desc.length - 1, linesArr)

  console.log(buttonsArr)

  buttonsArr.forEach(elem => {
    elem.addEventListener('click', function (e) {
      console.log(e.target.getAttribute('id'))
    })
  })
})()
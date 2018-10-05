document.addEventListener("DOMContentLoaded", function (event) {

  const tabs = (function () {
    const buttons = document.querySelectorAll('.howitworks-right__tab');
    const lines = document.querySelectorAll('.howitworks-right__line');
    const textDisplay = document.querySelector('.howitworks-left__desc-text');
    const buttonsArr = [];
    const linesArr = [];

    const desc = [
      { id: 'jsDocs', text: 'Мы пробиваем автомобиль по всем возможным базам РФ. Специалист выполняет проверку идентификационных номеров на кузове, VIN номера в блоках управления, подтверждение сервисной истории и пробега, расшифровку кодов комплектации и сопоставление их с реальной крегистрационные действия и т.д.' },
      { id: 'jsBody', text: 'Полностью проверяем силовую часть кузова (крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д.) Эталоном считается кузов нового автомобиля, и все толщиномер - прибор для замера толщины краски. Он покажет, перекрашена ли машина, есть ли шпаклевка под краской и т.п.' },
      { id: 'jsEngine', text: 'Специалист выполняет общий осмотр двигателя, заводит и слушает его. Если подозрений не возникает, то следует тест-драйв. Если ничего не выявилось во время тест-драйва – автомобиль отправляется на сервис для детальной проверки.' },
      { id: 'jsWheel', text: 'Большинство неисправностей подвески опытный специалист легко выявит во время внимательного осмотра и тест-драйва. Выполняется осмотр резиновых пыльников и чехлов, диагностика амортизаторов, проверка утечек масла, проверка на люфт опор стабилизаторов, подшипников ' },
      { id: 'jsBrake', text: 'Мы уделяем особое внимание проверке тормозной системы автомобиля, ведь ее состояние - это вопрос вашей безопасности. Специалист проверяет общий износ расходных частей танизмов, а также электронных систем (антиблокировка, антипробуксовка, антизанос).' }
    ]

    textDisplay.innerHTML = `<p>${desc[0].text}</p>`;
    

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

        textDisplay.innerHTML;

        e.target.classList.contains('js-tab-active') ? (
          null
        ) : (
          e.target.classList.add('js-tab-active'),
          lineId[0].classList.add('js-line-active'),
            textDisplay.innerHTML = `<p>${objId[0].text}</p>`
        );
      })
    })
  })();

});

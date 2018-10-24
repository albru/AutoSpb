
const popupElem = $('.popup__DoneJS');
const formElem = $("#submit-form");
const popupElem1 = $('.popup__DoneJS1');
const formElem1 = $("#submit-form1");
const speedometer = $('.gauge-loader-cont');
let speedometerNumber = 0;

function submitForm(form, pop, speedometerNumber) {
  $(document).ready(function () {
    const popup = pop;
    const popupFunc = function () {
      popup.fadeTo("slow", 0, function () {
        $(this).fadeTo('slow', 1).after(function () {
          setTimeout(() => {
            $(this).fadeTo('slow', 0)
          }, 7000);
        })
      });
    };

    form.submit(function (e) { //Change
      e.preventDefault();
      speedometer[speedometerNumber].style.opacity = 1;
      speedometer[speedometerNumber].style.display = 'initial';
      const th = $(this);
      $.ajax({
        type: "POST",
        url: "server.php", //Change
        data: th.serialize()
      }).done(function () {
        speedometer[speedometerNumber].style.opacity = 0;
        speedometer[speedometerNumber].style.display = 'none';
        popupFunc();
        setTimeout(function () {
          th.trigger("reset");
        }, 1000);
      }).catch((error) => {
        error.statusText ? console.log(error.statusText) : null;
      });
      return false;
    });
  });
};

submitForm(formElem, popupElem, 1);
submitForm(formElem1, popupElem1, 0);
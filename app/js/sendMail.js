
const popupElem = $('.popup__DoneJS');
const formElem = $("#submit-form");
const popupElem1 = $('.popup__DoneJS1');
const formElem1 = $("#submit-form1");

function submitForm(form, pop) {
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
    }

    form.submit(function () { //Change
      const th = $(this);
      $.ajax({
        type: "POST",
        url: "server.php", //Change
        data: th.serialize()
      }).done(function () {
        popupFunc();
        setTimeout(function () {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  });
}

submitForm(formElem, popupElem)
submitForm(formElem1, popupElem1)
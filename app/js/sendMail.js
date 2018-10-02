
$(document).ready(function () {
  let popup = $('.popup__DoneJS');
  const popupFunc = function () {
    popup.fadeTo("slow", 0, function () {
      $(this).fadeTo('slow', 1).after(function () {
        setTimeout(() => {
          $(this).fadeTo('slow', 0)
        }, 7000);
      })
    });
  }

  $("#submit-form").submit(function () { //Change
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


$(document).ready(function () {
  let popup = $('.popup__DoneJS1');
  const popupFunc = function () {
    popup.fadeTo("slow", 0, function () {
      $(this).fadeTo('slow', 1).after(function () {
        setTimeout(() => {
          $(this).fadeTo('slow', 0)
        }, 7000);
      })
    });
  }

  $("#submit-form1").submit(function () { //Change
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
  
  



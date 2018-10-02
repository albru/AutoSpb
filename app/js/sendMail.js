
  //E-mail Ajax Send
  $("#submit-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "server.php", //Change
      data: th.serialize()
    }).done(function () {
      // popupFunc();
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

$("#submit-form1").submit(function () { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "server.php", //Change
    data: th.serialize()
  }).done(function () {
    // popupFunc();
    setTimeout(function () {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});


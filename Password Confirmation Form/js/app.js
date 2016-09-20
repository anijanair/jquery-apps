// To show password hint if pw<9
// to hide password hint if pw>8

$("#form span").hide();

function passwordEvent(){
  if(($this).val().length >8) ; {
    (this).next().hide();
  }else {
    $(this).next().show();
  }
}

function confirmPasswordEvent(){
  $("#password").val()===$("#confirm_password").val(){
    (this).next().hide();
  }else {
    $(this).next().show();
  }

  }
};
$("#password").focus(passwordEvent).keyup(passwordEvent);
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

$(function() {

  $("#loginForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var username = $("input#username").val();
      var password = $("input#password").val();

      if (username === password) {
        $("header.masthead").addClass('d-none');
        $("section#login").addClass('d-none');
        $("section#bot").removeClass('d-none');
        $("a#loginuser").html('Hi, ' + username);
      } else {
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry your login details are incorrect!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
    }

    },
  });
});
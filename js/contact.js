$(function () {
  $('#contactForm').submit(function (event) {
    var submitFormButton = $('#submitFormButton');
    submitFormButton.prop('disabled', true); // Disable submit button until AJAX call is complete to prevent duplicate messages

    var name = $('input#name').val();
    var category = $('#categoryInput option:selected').text();
    var email = $('input#email').val();
    var message = $('textarea#message').val();
    var recipient = "admin@kalenga.me";


    $.ajax({
      url: '../php/contact.php',
      type: 'POST',
      data: {
        name: name,
        category: category,
        email: email,
        message: message,
        recipient: recipient
      },
      cache: false,
      success: function () {
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success')
          .html(
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
          )
          .append('</button>');
        $('#success > .alert-success').append(
          '<strong>Your message has been sent. </strong>'
        );
        $('#success > .alert-success').append('</div>');
        //clear all fields
        $('#contactForm').trigger('reset');
      },
      error: function () {
        // Fail message
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger')
          .html(
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
          )
          .append('</button>');
        $('#success > .alert-danger').append(
          $('<strong>').text(
            'Sorry ' +
            name +
            ', it seems that my mail server is not responding. Please try again later!'
          )
        );
        $('#success > .alert-danger').append('</div>');
        //clear all fields
        $('#contactForm').trigger('reset');
      },
      complete: function () {
        setTimeout(function () {
          submitFormButton.prop('disabled', false); // Re-enable submit button when AJAX call is complete
        }, 1000);
      }
    });

    event.preventDefault();
  });
});

/*When clicking on full name input filed, hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});

$('#submitButton').on('click', function(event) {
  event.preventDefault();
  // Gather user inputs
  var userInput = {
    name: $('#name-input').val().trim(),
    photo: $('#photo-input').val().trim(),
    scores:[
      $('#answer1').val().trim(),
      $('#answer2').val().trim(),
      $('#answer3').val().trim(),
      $('#answer4').val().trim(),
      $('#answer5').val().trim(),
      $('#answer6').val().trim(),
      $('#answer7').val().trim(),
      $('#answer8').val().trim(),
      $('#answer9').val().trim(),
      $('#answer10').val().trim()
    ]
  };
    // Add user inputs to friends list
  $.post('../data/friends.js', userInput)
      .done(function(data) {
                // Set the name and image values of friend match
        $('#userMatch').html(data.matchName);
      $("#userMatchImage").attr("src", data.matchImage);
      // Pop open the modal dialog
        $('#modal').modal('open');
      });
});
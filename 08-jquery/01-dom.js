//watched solution video
// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$('document').ready(() => {
  $('#copy').on('click', (event) => {
    console.log('Click event', event);

    $('#output1').text($('#userInput1').val());
  })
});

$('document').ready(() => {
  $('#userInput2').on('input', () => {

    $('#output2').text($('#userInput2').val());

  })
});

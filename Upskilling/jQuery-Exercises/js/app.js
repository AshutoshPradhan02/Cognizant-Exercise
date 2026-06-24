$(document).ready(function () {
  console.log($('#helloWorld').text());

  $('#pageHeading').text('jQuery $() Function Demo');

  $('#hideParagraphBtn').click(function () {
    $('#secondParagraph').hide();
  });

  $('#hideBoxes').click(function () {
    $('.box').hide();
  });

  $('#showBoxes').click(function () {
    $('.box').show();
  });

  $('#fadeOutBoxes').click(function () {
    $('.box').fadeOut();
  });

  $('#fadeInBoxes').click(function () {
    $('.box').fadeIn();
  });

  $('#toggleBoxes').click(function () {
    $('.box').toggle();
  });

  $('#chainBoxes').click(function () {
    $('.box').slideUp().delay(1000).slideDown();
  });

  $('#itemForm').submit(function (event) {
    event.preventDefault();
    var value = $('#itemInput').val().trim();
    if (value) {
      $('<li></li>').text(value).appendTo('#itemList');
      $('#itemInput').val('');
    }
  });

  $('#removeAll').click(function () {
    $('#itemList').empty();
  });

  $('#colorBtn').click(function () {
    $('#colorBox').css('background-color', 'red').css('color', 'white');
  });

  $('#colorBox').dblclick(function () {
    $(this).css('background-color', 'white').css('color', '#243042');
  });

  $('#eventHelperBox')
    .click(function () {
      $('#helperStatus').text('Box clicked.');
      $(this).css('background-color', '#d9f2e3');
    })
    .dblclick(function () {
      $('#helperStatus').text('Box double-clicked.');
      $(this).css('background-color', '#ffe7ba');
    })
    .mouseenter(function () {
      $('#helperStatus').text('Mouse entered the box.');
      $(this).css('border-color', '#17663a');
    })
    .mouseleave(function () {
      $('#helperStatus').text('Mouse left the box.');
      $(this).css('border-color', '#b8c7d9');
    });

  $('#keypressInput').keypress(function (event) {
    $('#helperStatus').text('Key pressed: ' + event.key);
  });
});

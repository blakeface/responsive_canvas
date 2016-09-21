'use strict';

(function () {
  console.log('on like donkey kong');
  var count = 0;
  var words = [];
  $('.prompt').submit(function (e) {
    e.preventDefault();
    var num = $(".prompt input:first").val();
    if (num.length > 0 && $('.inputs').children().length === 0) {
      count = Number(num);
      for (var i = 0; i <= count; i++) {
        if (i === count) $('.inputs').append('<input type="submit" class="button-primary" value="create word🌥">');else $('.inputs').append('<input type="text" id="' + i + '" class="word-input" placeholder="Random Word #' + (i + 1) + '">');
      }
    }
  });
  $('.inputs').submit(function (e) {
    e.preventDefault();
    for (var i = 0; i < count; i++) {
      words.push($('#' + i).val());
    }
    console.log(words);
  });
})();

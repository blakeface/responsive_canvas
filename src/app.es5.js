'use strict';

(function () {
  console.log('on like donkey kong');
  $('.prompt').submit(function (e) {
    e.preventDefault();
    var inputNum = Number($("input:first").val());
    for (var i = 0; i <= inputNum; i++) {
      if (i === inputNum) $('.inputs').append('<input type="submit" class="button-primary" value="create word🌥">');else $('.inputs').append('<input type="text" id="' + i + '" placeholder="Random Word #' + (i + 1) + '">');
    }
  });
})();

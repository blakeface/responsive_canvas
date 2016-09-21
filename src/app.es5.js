'use strict';

(function () {
  console.log('on like donkey kong');
  var width = $(window).width();
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
    words = words.map(function (d) {
      return { text: d, size: 10 + Math.random() * 90 };
    });
    d3.layout.cloud().size([width, 500]).words(words).padding(5).rotate(function () {
      return ~~(Math.random() * 2) * 90;
    }).font("Impact").fontSize(function (d) {
      return d.size;
    }).on("end", end).start();

    function end(words) {
      console.log(JSON.stringify(words));
    }
  });
})();

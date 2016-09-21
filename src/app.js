(function () {
  console.log('on like donkey kong');
  let count = 0;
  let words = [];
  $('.prompt').submit((e) => {
    e.preventDefault();
    let num = $(".prompt input:first").val();
    if ( num.length > 0 && $('.inputs').children().length === 0 ) {
      count = Number( num );
      for (let i = 0; i <= count; i++) {
        if (i === count) $('.inputs').append(
          `<input type="submit" class="button-primary" value="create word🌥">`
        );
        else $('.inputs').append(
          `<input type="text" id="${i}" class="word-input" placeholder="Random Word #${i+1}">`
        );
      }
    }
  });
  $('.inputs').submit((e) => {
    e.preventDefault();
    for (let i = 0; i < count; i++) {
      words.push( $(`#${i}`).val() );
    }
    console.log(words);
  });
})();

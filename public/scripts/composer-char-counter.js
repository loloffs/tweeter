$(document).ready(function() {
  $("#tweet-text").on("input", function () {
    let tweetLength = $(this).val().length;
    let counter = $(this).parent().find(".counter");
    counter.text(140 - tweetLength);

    if (tweetLength > 140) {
      counter.addClass("counterRed");
      // counter.removeClass("counter");
    } else if (tweetLength <= 140){
      // counter.addClass("counter");
      counter.removeClass("counterRed");
    }
  });
});


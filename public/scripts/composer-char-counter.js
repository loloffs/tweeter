$(document).ready(function() {
  // updates counter in real time
  $("#tweet-text").on("input", function () {
    let tweetLength = $(this).val().length;
    let counter = $(this).parent().find(".counter");
    counter.text(140 - tweetLength);
    // counter goes red if character exceed 140
    if (tweetLength > 140) {
      counter.addClass("counterRed");
    } else if (tweetLength <= 140){
      counter.removeClass("counterRed");
    }
  });
});


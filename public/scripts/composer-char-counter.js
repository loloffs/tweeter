$(document).ready(function() {
  $("#tweet-text").on("input", function () {
    let tweetLength = $(this).val().length;
    let counter = $(this).parent().find(".counter");
    counter.text(140 - tweetLength);

    if (tweetLength > 140) {
      counter.value() = "test";
    }

    console.log(tweetLength);
    // make counter RED if below 0
  });
});


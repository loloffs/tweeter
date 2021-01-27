$(document).ready(function() {
  
  
  
  console.log("test");



  $("#tweet-text").on("input", function () {
    let tweetLength = $(this).val().length;
    let counter = $(this).parent().find(".counter");


    counter.text(140 - tweetLength);

    // make counter RED if below 0


  });


});


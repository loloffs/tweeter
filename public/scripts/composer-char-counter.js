$(document).ready(function() {
  
  
  
  console.log("test");



  $("#tweet-text").on("input", function () {
    let tweetLength = $(this).val().length;
    let counter = $(this).parent().find(".counter").text();

    
    console.log("count: ", counter -= tweetLength);
    
    counter -= tweetLength;
    

  });


});


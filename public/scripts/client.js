/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

const tweetExample = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]





const createTweetElement = function(tweetObj) {

  const tweet = $("<article>").addClass("tweetBox");

  const markup = `
  <header class="tweetHeader">
    <div class="usernameAvatar">
      <img class="avatar"src="${tweetObj.user.avatars}" width="50px" height="50px"> 
  <h4 class="username">${tweetObj.user.name}</h4>
    </div>
  <h5 class="handle">${tweetObj.user.handle}</h5>
  </header>
    <div class="tweetContent">
  <h5 class="words">${tweetObj.content.text}</h3>
      </div>
    <footer class="bottomTweetBox">
  <h6 class="timeStamp">${tweetObj.created_at}</h6>
      <div class="reactions">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="retweet"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
      </div>
  </footer>`;

  return tweet.append(markup);

};




const renderTweets = function(tweetExample) {
  const tweetsContainer = $(".tweetsContainer");
  for (const x of tweetExample) {
    let tweetArticle = createTweetElement(x);

    tweetsContainer.prepend(tweetArticle);

    // $(".tweetBox").append(tweetArticle);

  }

}



renderTweets(tweetExample);


  


});



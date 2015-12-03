var nextPage = 2;

$('.more-sprouts').on('click', function(event) {
  event.preventDefault();

  // request more tweets

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json?page="+ nextPage
  });

  request.success(function(nextTweets) {
    nextTweets.forEach(function(tweet) {

      var $newItem = $('<li class="tweet" />');
      var $bodyDiv = $('<div class="body" />');
      var $userDiv = $('<div class="user" />');

      $bodyDiv.text(tweet["text"]);
      $userDiv.text(tweet["username"]);

      $newItem.append($bodyDiv, $userDiv);

      $( ".tweets" ).append($newItem);

    })

    nextPage = nextPage + 1;

  });

});

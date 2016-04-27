//Thank you:
//   Original quotes dataset by The Web Miner (http://thewebminer.com/download)
//   Animate.css: https://github.com/daneden/animate.css

$("document").ready(function() {
  "use strict";

  var jsonQuotes = new Object();

  function generateQuote() {
    //Pick a random whole number between 0 (inclusive) and 
    //the number of quotes available (exclusive)
    var randomNumber = Math.floor(Math.random() * jsonQuotes.quoteCollection.length);

    //Update HTML for quote and author
    $("blockquote p").text(jsonQuotes.quoteCollection[randomNumber].quote);
    $("article cite").text(jsonQuotes.quoteCollection[randomNumber].author);

    //Animation for quotes (from https://github.com/daneden/animate.css)
    $.fn.extend({
      animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });
    $("blockquote").animateCss("pulse");

    //Update Twitter button    
    var tweetString = "https://twitter.com/intent/tweet?text=";
    tweetString += ('"' + jsonQuotes.quoteCollection[randomNumber].quote + '"' + ' - ' + jsonQuotes.quoteCollection[randomNumber].author);
    $(".twitter-share-button").attr("href", tweetString);
  }

  //Get collection of quotes
  $.getJSON("json/joeQuotes.json", function(data) {
    jsonQuotes = data;
    generateQuote();
  });

  $("button").click(function() {
    generateQuote();
  });

});

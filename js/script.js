//Test JSON hosted here: https://api.myjson.com/bins/1r49a
//Same domain location: json/joeQuotes.json
//Original quotes dataset by The Web Miner (http://thewebminer.com/download)

$("document").ready(function() {
  "use strict";

  var jsonQuotes = new Object();

  function generateQuote() {
    //Pick a random whole number between 0 (inclusive) and 
    //the number of quotes available (exclusive)
    var randomNumber = Math.floor(Math.random() * jsonQuotes.quoteCollection.length);

    //Update HTML for quote and author
    $("article>blockquote p").text(jsonQuotes.quoteCollection[randomNumber].quote);
    $("article cite").text(jsonQuotes.quoteCollection[randomNumber].author);

    //Update Twitter button    
    var tweetString = "https://twitter.com/intent/tweet?text=";
    tweetString += ('"' + jsonQuotes.quoteCollection[randomNumber].quote + '" \u2014 ' + jsonQuotes.quoteCollection[randomNumber].author);
    $(".twitter-share-button").attr("href", tweetString);
  }

  //Get collection of quotes
  $.getJSON("https://api.myjson.com/bins/1r49a", function(data) {
    jsonQuotes = data;
    generateQuote();
  });

  $("button").click(function() {
    generateQuote();
  });

});
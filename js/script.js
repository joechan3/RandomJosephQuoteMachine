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
  }

  //Get collection of quotes
  $.getJSON("https://api.myjson.com/bins/1r49a", function(data) {
    jsonQuotes = data;
    generateQuote();
  });

  //Display new quote when New Joseph Quote button is clicked
  $("button:first-of-type").click(function() {
    generateQuote();
  });
});

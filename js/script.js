//Test JSON hosted here: https://api.myjson.com/bins/3pqdy
//Same domain location: json/joeQuotes.json

$("document").ready(function() {
  function getNewQuote() {
    $.getJSON("https://api.myjson.com/bins/3pqdy", function(data) {

      //Pick a random whole number between 0 (inclusive) and 
      //the number of quotes available (exclusive)
      var randomNumber = Math.floor(Math.random() * ((data.quoteCollection.length - 1) - 0 + 1)) + 0;

      //Placeholder: Update HTML for quote and author

    });
  }

  //Placeholder: click event function
  getNewQuote();

});

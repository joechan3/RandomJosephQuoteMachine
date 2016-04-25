//Test JSON hosted here: https://api.myjson.com/bins/2xkni
//Same domain location: json/joeQuotes.json
//Original quotes dataset courtesy of http://thewebminer.com/download

$("document").ready(function() {
  function getNewQuote() {
    $.getJSON("https://api.myjson.com/bins/2xkni", function(data) {

      //Pick a random whole number between 0 (inclusive) and 
      //the number of quotes available (exclusive)
      var randomNumber = Math.floor(Math.random() * ((data.quoteCollection.length - 1) - 0 + 1)) + 0;

      //Update HTML for quote and author
      $("article>blockquote p").text(data.quoteCollection[randomNumber].quote);
      $("article cite").text(data.quoteCollection[randomNumber].author);
    });
  }
  
  //Display initial quote when page loads
  getNewQuote();
  
  //Display new quote when New Joseph Quote button is clicked
  $("button:first-of-type").click(function(){
    getNewQuote(); 
  });

});

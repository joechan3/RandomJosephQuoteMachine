//Test JSON hosted here: https://api.myjson.com/bins/4yntq
//Same domain location: json/joeQuotes.json
//Original quotes dataset by The Web Miner (http://thewebminer.com/download)
//True random number serivce by Random.org (to implement)
//Thank you: http://stackoverflow.com/questions/8147211/jquery-jsonrpc-2-0-call-via-ajax-gets-correct-response-but-does-not-work

$("document").ready(function() {
  function getNewQuote() {
    $.getJSON("https://api.myjson.com/bins/4yntq", function(data) {

      //Get true random numbers from Random.org
      $.ajax({
        url: "https://api.random.org/json-rpc/1/invoke",
        method: "POST",
        contentType: "application/json-rpc",
        dataType: "json",
        data: JSON.stringify({
          jsonrpc: "2.0", 
          method: "generateIntegers", 
          params: 
          {"apiKey": "89f7b8ea-50ae-4cb0-ab6e-738ece846bbb",
           "n": 10,
           "min": 0,
           "max": data.quoteCollection.length-1},
          id: 42})
      })
        .done(function(trueRandomNumbers){
          //var foo = JSON.parse(trueRandomNumbers);
          alert("Success!");
          console.log(trueRandomNumbers.result.random.data[5]);
    })
        .fail(function(){
          alert("fail");
    });
      
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
  $("button:first-of-type").click(function() {
    getNewQuote();
  });

});

alert("You found your JS");

$("document").ready(function(){
  alert("You found jQuery");
  $.getJSON("joeQuotes.json", function(data){
    alert(data.quoteCollection[0].quote); 
  });
});
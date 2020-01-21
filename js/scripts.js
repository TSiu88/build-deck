$(document).ready(function(){
  var suits = ["clubs" , "diamonds" , "hearts" , "spades"];
  var ranks = ["ace" , "2" , "3" , "4" , "5" , "6", "7" , "8" , "9" , "10" , "jack" , "queen" , "king"];
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      var string = (rank +  " of "  + suit);
      $("#list").append("<li>" + string + "</li>");
      console.log(string);
      
    });
  });

});
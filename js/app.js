$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


//Initial Variables

var answer = Math.floor((Math.random() * 100) + 1);
console.log("The secret number is: " + answer);
var numberOfGuesses = 0;
var guesses = [];
guesses.length = 0;
var distance = null;
var previousDistance = null;

function getGuess() {
    $("#submit").click(game);
    $("#guess").keydown(function (enter) {
        if (enter.keyCode == 13) {
            game();
        }
    });
}


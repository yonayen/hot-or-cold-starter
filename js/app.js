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
    $("#guessButton").click(game);
    $("#userGuess").keydown(function (enter) {
        if (enter.keyCode == 13) {
            game();
        }
    });
}

getGuess();



// Game Function
function game() {
    var guess = parseInt($('#guess').val());

    if (guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
        $('#guess').val('');
        numberOfGuesses += 1;
        guesses.push(guess);
        distance = Math.abs(answer - guess);
        previousDistance = Math.abs(answer - guesses[guesses.length - 2]);


        // Get it correct
        if (guess === answer) {
            $('#hint').html('Congrats! You got it in ' + numberOfGuesses + ' attempts! The secret number was ' + answer);
        } else {
            console.log(guess, answer, previousDistance, distance);
            if (isNaN(previousDistance)) {
                if (guess > answer) {
                    $('#hint').html('Guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#hint').html('Guess higher! Last guess: ' + guess);
                }

            } else if (distance > previousDistance) {
                if (guess > answer) {
                    $('#hint').html('You\'re getting colder, guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#hint').html('You\'re getting colder, guess higher! Last guess: ' + guess);
                }
            } else if (distance < previousDistance) {
                if (guess > answer) {
                    $('#hint').html('You\'re getting hotter, guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#hint').html('You\'re getting hotter, guess higher! Last guess: ' + guess);
                }
            } else if (distance === previousDistance) {
                if (guess > answer) {
                    $('#hint').html('You\'re on fire, guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#hint').html('You\'re on fire, guess higher! Last guess: ' + guess);
                }
            } else {
                $('#hint').html('ERROR: Your guess must be a number between 1 and 100').css({
                    color: 'red'
                });
            }
        }
    }

    	 // Start a new game
	    $('#newgame').click(function (e) {
	        e.preventDefault();
	        answer = Math.floor((Math.random() * 100) + 1);
	        console.log(answer);
	        numberOfGuesses = 0;
	        guesses = [];
	        distance = null;
	        previousDistance = null;
	        $('#hint').html('');
	        $('#guess').val('');
	    });


	}
});



























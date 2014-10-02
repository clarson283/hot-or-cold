
$(document).ready(function () {
	
	/*--- Display information modal box ---*/
  	$(".what").click(function () {
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function () {
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Declare variables ---*/
    var num;
    var feedback = $("#feedback");
    var guessNum = 0;
    var numRandom = function () {
      num = Math.floor(Math.random() * 100 + 1);
    };

    /*--- Reset ---*/
    var reset = function () {
      guessNum = 0;
      feedback.text("Make your Guess!");
      $("#userGuess").val("");
      $("#guessList li").remove();
      $("#count").text(guessNum);
    };


    /*--- Add counter ---*/
    var addGuessNum = function () {
      event.preventDefault();
      $("#guessList").append("<li>" + userGuess + "</li>");//comes up blank
      guessNum++;
      $("#count").text(guessNum);
    };

    /*--- If stuff ---*/
    var newGame = function () {
        userGuess = $("#userGuess").val();
        var diff = Math.abs(userGuess - num);
          if (userGuess == num) {
            feedback.text("Spot on.. You're a WINNER!");
            addGuessNum();
            $("form").hide();
          } else if (userGuess > 100 || userGuess < 1) {
            feedback.text("Between 1 and 100 please..");//works
          } else if (userGuess % 1 !== 0) {
            feedback.text("Integers only..");//works
          } else if (diff >= 50) {
            feedback.text("Ice cold");
            addGuessNum();
          } else if (diff >= 30 && diff < 50) {
            feedback.text("cold");
            addGuessNum();
          } else if (diff >= 20 && diff < 30) {
            feedback.text("warm");
            addGuessNum();
          } else if (diff >= 10 && diff < 20) {
            feedback.text(" hot");
            addGuessNum();
          } else {
            feedback.text("very hot");
            addGuessNum();
          }
      };

     /*--- Click on new game ---*/
    $("a.new").click(function () {
      $("form").show();
      reset();
      numRandom();
    });

    numRandom();
    
    $("#guessButton").on("click", function(event) {
      newGame();
      event.preventDefault();
      $("#userGuess").val("");
    });

});



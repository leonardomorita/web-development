var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var running = false;

// Verify when any buttons are clicked.
$('.btn').click(function (event) {
    // Get the id of the button that it pressed, using the event.
    var userChosenColour =  event.target.id; // $(this).attr("id");

    // Add the id's button that it pressed.
    userClickedPattern.push(userChosenColour);
    

    // Plays sounds when the user click on the any button.
    playSound(userChosenColour);

    // Animation when the user click on the any buttons.
    animatePress(userChosenColour);

    // Call this method, passing in the index of the last answer in the array.
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function () {
    if (!running) {
        running = true;
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    // Random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);

    // Random colour.
    var randomChosenColour = buttonColours[randomNumber];

    // Add the random colour in the game pattern array.
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);    
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function () {
        // Remove class with timer.
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    // alert("check: " + currentLevel);

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        } 
    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game over, Press Any Key to Restart");

        startOver();

        console.log("wrong");
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    running = false;
}

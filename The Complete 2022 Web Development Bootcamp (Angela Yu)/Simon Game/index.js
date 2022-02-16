// VARIABLES

var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;

// KEYBOARD PRESS DETECT

$(document).one("keypress", (function() {
  $("h1").html("Level 0");
  nextSequence();
}));

// CLICK MOUSE DETECT

$(".btn").click(function() {
  var userChosenColour = (this.id);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer();
});

// SEQUENCE GENERATOR FUNCTION

function nextSequence() {
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  if (level > 0) {
    $("h1").html("Level " + level);
  }
  userClickedPattern = [];
}

// PLAY SOUND FUNCTION

function playSound(name) {
  $("<audio></audio>").attr({
    'src': "sounds/" + name + ".mp3",
    'autoplay': 'autoplay'
  }).appendTo("button");
}

function playWrongSound(name) {
  $("<audio></audio>").attr({
    'src': "sounds/wrong.mp3",
    'autoplay': 'autoplay'
  }).appendTo("body");
}

// ANIMATION FUNCTION

function animatePress(classe) {
  $("div." + classe).addClass("pressed");
  setTimeout(function() {
    $("div." + classe).removeClass("pressed");
  }, 100);
}

// CHECK ANSWER & RESET

function checkAnswer() {
  var arrayComparason = userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1];

  if (arrayComparason === true && userClickedPattern.length === gamePattern.length) {
    setTimeout(nextSequence, 1000);
  } else if (arrayComparason === false) {
    playWrongSound();
    $("h1").html("GAME OVER, Press any key to reset!");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function startOver() {
  gamePattern = []
  level = 0
  $(document).one("keypress", (function() {
    $("h1").html("Level 0");
    nextSequence();
  }));
}

/**
 * Created by devonjones on 5/20/17.
 */

// Web Elements
var randomNumberArea = $('#randomNum');
var totalScoreArea = $('#totalScore');
var winTallyArea = $('#winTally');
var lossTallyArea = $('#lossTally');

// Variables to initialize
var userScore = 0;
var numWins = 0;
var numLosses = 0;
var randomNumToMatch;
var jewelValues = [];

// Generates a random number based on passed in values
var generateRandom = function (x, y) {
    return Math.floor(Math.random() * x + y)
};

// Returns true if user score equal to target number
var hasWon = function () {
    return userScore === randomNumToMatch;
};

// Returns true if user score exceeds target number
var hasLost = function () {
    return userScore > randomNumToMatch;
};

// Generates new values for all jewels and clears score area
var resetAllValues = function () {
    $.each($(".thumbnail"), function () {
        var value = generateRandom(11, 1);
        while (jewelValues.indexOf(value) !== -1) {
            value = generateRandom(11, 1);
        }
        jewelValues.push(value);
        $(this).attr('value', value);
    });
    totalScoreArea.text('');
    winTallyArea.text(0);
    lossTallyArea.text(0);
};

// Update win/loss counts
var updateCounts = function () {
    winTallyArea.text(numWins);
    lossTallyArea.text(numLosses);
};

// Clears score, generates new target number, and gives jewels new values
window.initializeScoresAndCounts = function () {
    userScore = 0;
    randomNumToMatch = generateRandom(101, 19);
    randomNumberArea.text(randomNumToMatch);
    jewelValues = [];
    resetAllValues();
};

// Adds the value of the jewel clicked to the score and evaluates win/loss
var addJewelValueToScore = function (value) {
    userScore += value;
    totalScoreArea.text(userScore);
    if (hasWon()) {
        numWins++;
        updateCounts();
        alert("Sweet, you won!");
    }
    if (hasLost()) {
        numLosses++;
        updateCounts();
        alert("Dude, you lost :(");
    }
};

$(document).ready(function () {
    $(function () {
        $(".thumbnail").on("click", function (evt) {
            var value = $(evt.currentTarget).attr('value');
            addJewelValueToScore(parseInt(value));
        })
    })
});

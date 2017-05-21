/**
 * Created by devonjones on 5/20/17.
 */
$( document ).ready(function() {

    // Web Elements
    var randomNumberArea = $('#randomNum');
    var totalScoreArea = $('#totalScore');
    var winTallyArea= $('#winTally');
    var lossTallyArea= $('#lossTally');
    var jewelOne= $('#jewelOne');
    var jewelTwo= $('#jewelTwo');
    var jewelThree= $('#jewelThree');
    var jewelFour= $('#jewelFour');

    // Variables to initialize
    var userScore;
    var numRight;
    var numWrong;

    // Jewel button values


    var generateRandom = function (startNum, numPossResults) {
        var Random = Math.floor(Math.random() * startNum + numPossResults)
    };
});
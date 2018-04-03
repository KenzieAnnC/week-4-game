
$(document).ready(function () {

    var matchNumber = "";
    var totalScore = 0;
    var crystalOneNumber = 0;
    var crystalTwoNumber = 0;
    var crystalThreeNumber = 0;
    var crystalFourNumber = 0;
    var wins = 0;
    var losses = 0;
    var gameStart = false;
    var gameFinish = false;


    function resetGame() {
        matchNumber = "";
        totalScore = 0;
        crystalOneNumber = 0;
        crystalTwoNumber = 0;
        crystalThreeNumber = 0;
        crystalFourNumber = 0;

        // $("#total-score").empty();
    }
    


    function randomMatchNumber(min, max) {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }

    matchNumber = randomMatchNumber() + matchNumber;

    $("#match-number").append("<br>" + matchNumber);

    console.log(matchNumber);

    function randomCrystalNumber(min, max) {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

    // crystalOneNumber = $("#crystal-1");

    // $("#crystal-1") = randomCrystalNumber() + crystalOneNumber;

    crystalOneNumber = randomCrystalNumber() + crystalOneNumber;
    crystalTwoNumber = randomCrystalNumber() + crystalTwoNumber;
    crystalThreeNumber = randomCrystalNumber() + crystalThreeNumber;
    crystalFourNumber = randomCrystalNumber() + crystalFourNumber;


    $(".container").on("click", ".crystals", function () {

        if (totalScore > matchNumber) {
            gameFinish = true;
            resetGame();
        } else if (totalScore === matchNumber) {
            gameFinish = true;
            wins++;
            resetGame();
        } else if (totalScore < matchNumber) {
            gameFinish = false;
        }

    }).on("click", "#crystal-1", function () {

        // getTotalScore(); {

        crystalOneNumber = parseInt(crystalOneNumber);
        totalScore = parseInt(totalScore);
    

        if (gameFinish = false) {   
        totalScore = crystalOneNumber + totalScore;
        }
    
        console.log(crystalOneNumber);
        console.log(crystalOneNumber + totalScore);
    });


    console.log(gameFinish);
    console.log(crystalOneNumber);


});
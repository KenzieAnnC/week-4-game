
$(document).ready(function () {

    var matchNumber = "";
    var totalScore = 0;
    var crystals = [
        crystalOneNumber = 0,
        crystalTwoNumber = 0,
        crystalThreeNumber = 0,
        crystalFourNumber = 0
    ];
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


    function checkGame() {

        wins = parseInt(wins);
        if (totalScore >= matchNumber) {
            gameFinish = true;
            resetGame();
        } else if (totalScore === matchNumber) {
            gameFinish = true;
            wins++;
            $("#wins").text(wins);
            // resetGame();
        } else if (totalScore <= matchNumber) {
            gameFinish = false;

        }
        totalScore = parseInt(totalScore);
        totalScore = crystalOneNumber + totalScore;
        $("#total-score").text(totalScore);

    };

    $(".crystals").on("click", "#crystal-1", function () {
        crystalOneNumber = parseInt(crystalOneNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalOneNumber + totalScore;
        checkGame();
        // $("#total-score").text(totalScore);

        console.log("total score " + totalScore);
        console.log(gameFinish);

        if (gameFinish = true) {
            return false;
        }

    }).on("click", "#crystal-2", function () {
        crystalTwoNumber = parseInt(crystalTwoNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalTwoNumber + totalScore;
        checkGame();
        // $("#total-score").text(totalScore);

        console.log("total score " + totalScore);
        console.log(gameFinish);

        if (gameFinish = true) {
            return false;
        }

    }).on("click", "#crystal-3", function () {
        crystalThreeNumber = parseInt(crystalThreeNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalThreeNumber + totalScore;
        checkGame();
        // $("#total-score").text(totalScore);

        console.log("total score " + totalScore);
        console.log(gameFinish);

        if (gameFinish = true) {
            return false;
        }

    }).on("click", "#crystal-4", function () {
        crystalFourNumber = parseInt(crystalFourNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalFourNumber + totalScore;
        checkGame();
        // $("#total-score").text(totalScore);

        console.log("total score " + totalScore);
        console.log(gameFinish);

        if (gameFinish = true) {
            return false;
        }

    });


    // console.log(gameFinish);
    // console.log(crystalOneNumber + totalScore);
    // console.log(crystalTwoNumber);



});
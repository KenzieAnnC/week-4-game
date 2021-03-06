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
    var gameWin = false;
    var gameLose = false;




    function resetGame() {
        matchNumber = "";
        totalScore = 0;
        crystalOneNumber = "";
        crystalTwoNumber = "";
        crystalThreeNumber = "";
        crystalFourNumber = "";

        crystalOneNumber = randomCrystalNumber() + crystalOneNumber;
        crystalTwoNumber = randomCrystalNumber() + crystalTwoNumber;
        crystalThreeNumber = randomCrystalNumber() + crystalThreeNumber;
        crystalFourNumber = randomCrystalNumber() + crystalFourNumber;

        matchNumber = randomMatchNumber() + matchNumber;

        $("#match-number").text(matchNumber);

    }

    function randomMatchNumber(min, max) {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }

    matchNumber = randomMatchNumber() + matchNumber;

    $("#match-number").text(matchNumber);



    function randomCrystalNumber(min, max) {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

    function checkGame() {
        if (totalScore < matchNumber) {
            gameFinish = false;
        }

        else if (gameLose = true) {
            checkLoss();

        } else if (gameWin = true) {
            checkWin();

        }

        totalScore = parseInt(totalScore);
        $("#total-score").text(totalScore);


    };

    function checkWin() {
        if (totalScore === matchNumber) {
            gameWin = true;
            wins++;
            $("#wins").text(wins);
            gameFinish = true;
            resetGame();
        }
    };

    function checkLoss() {
        if (totalScore > matchNumber) {
            gameLose = true;
            losses++;
            $("#losses").text(losses);
            gameFinish = true;
            resetGame();
        }
    };


    crystalOneNumber = randomCrystalNumber() + crystalOneNumber;
    crystalTwoNumber = randomCrystalNumber() + crystalTwoNumber;
    crystalThreeNumber = randomCrystalNumber() + crystalThreeNumber;
    crystalFourNumber = randomCrystalNumber() + crystalFourNumber;


    $(".container").on("click", "#crystal-1", function () {
        crystalOneNumber = parseInt(crystalOneNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalOneNumber + totalScore;
        checkGame();


    }).on("click", "#crystal-2", function () {
        crystalTwoNumber = parseInt(crystalTwoNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalTwoNumber + totalScore;
        checkGame();


    }).on("click", "#crystal-3", function () {
        crystalThreeNumber = parseInt(crystalThreeNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalThreeNumber + totalScore;
        checkGame();


    }).on("click", "#crystal-4", function () {
        crystalFourNumber = parseInt(crystalFourNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalFourNumber + totalScore;
        checkGame();



    });


});
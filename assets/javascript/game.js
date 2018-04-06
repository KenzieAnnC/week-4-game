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
        // resetCrystalNumber();
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

        

        wins = parseInt(wins);

    }

    function checkGame() {
        if (totalScore >= matchNumber) {
            gameFinish = true;
            checkLoss();
            resetGame();
         
           
        } else if (totalScore === matchNumber) {
            gameFinish = true;
            checkWin();
            resetGame();
            
            
        } else if (totalScore <= matchNumber) {
            gameFinish = false;

        }
        totalScore = parseInt(totalScore);
        $("#total-score").text(totalScore);
        

    };

    function checkWin() {
        if (totalScore === matchNumber && (!gameFinish)) {
            wins++;
            $("#wins").text(wins);
        }
    };

    function checkLoss() {
        if (totalScore > totalScore && (!gameFinish)) {
            losses++;
            $("#losses").text(losses);
        }
    };



    function randomMatchNumber(min, max) {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }

    matchNumber = randomMatchNumber() + matchNumber;

    $("#match-number").text(matchNumber);

  

    function randomCrystalNumber(min, max) {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }



    crystalOneNumber = randomCrystalNumber() + crystalOneNumber;
    crystalTwoNumber = randomCrystalNumber() + crystalTwoNumber;
    crystalThreeNumber = randomCrystalNumber() + crystalThreeNumber;
    crystalFourNumber = randomCrystalNumber() + crystalFourNumber;
    


   

    $(".container").on("click", "#crystal-1", function () {
        crystalOneNumber = parseInt(crystalOneNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalOneNumber + totalScore;
        gameStart = true;
        checkGame();
    

        console.log("total score " + totalScore);
        console.log(crystalOneNumber);
        console.log(matchNumber);

      

    }).on("click", "#crystal-2", function () {
        crystalTwoNumber = parseInt(crystalTwoNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalTwoNumber + totalScore;
        gameStart = true;
        checkGame();
    

        console.log("total score " + totalScore);
        console.log(crystalTwoNumber);
        console.log(matchNumber);

       

    }).on("click", "#crystal-3", function () {
        crystalThreeNumber = parseInt(crystalThreeNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalThreeNumber + totalScore;
        gameStart = true;
        checkGame();
 

        console.log("total score " + totalScore);
        console.log(crystalThreeNumber);
        console.log(matchNumber);

     

    }).on("click", "#crystal-4", function () {
        crystalFourNumber = parseInt(crystalFourNumber);
        totalScore = parseInt(totalScore);
        totalScore = crystalFourNumber + totalScore;
        gameStart = true;
        checkGame();
      

        console.log("total score " + totalScore);
        console.log(crystalFourNumber);
        console.log(matchNumber);

      

    });






});
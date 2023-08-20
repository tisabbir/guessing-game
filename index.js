var totalWon = 0;
var totalLost = 0;

for ( i=1; i<=5; i++) {
    var guessNum = parseInt(prompt("Guess the random number between 1 to 5: "));
    var randomNum = Math.floor(Math.random()*5 + 1);
    
    if (guessNum == randomNum){
        document.write(i+ ") You have won. <br/>");
        totalWon++;
    }
    else {
        document.write(i+ ") You have lost. The random number was: " + randomNum + "<br/>");
        totalLost++;
    }
}

document.write("Total Number of lost : " + totalLost + "<br/>");
document.write("Total Number of Won : " + totalWon + "<br/>");


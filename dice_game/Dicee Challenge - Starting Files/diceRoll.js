
var diceAction = document.getElementById("roll");

// dice 1
var dice1 = document.getElementById("dice1");
var randomNumber1 = Math.floor(Math.random() * 5 + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

// dice 2
var dice2 = document.getElementById("dice2");
var randomNumber2 = (Math.floor(Math.random() * 5 + 1));
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //images/dice



function rollDice1() {

    // switch(randomNumber1) {
    //     case "1":
    //         dice1.setAttribute("src", "images/dice1.png");
    //         break;
    //     case "2":
    //         dice1.setAttribute("src", "images/dice2.png");
    //         break;
    //     case "3":
    //         dice1.setAttribute("src", "images/dice3.png");
    //         break;
    //     case "4":
    //         dice1.setAttribute("src", "images/dice4.png");
    //         break;
    //     case "5":
    //         dice1.setAttribute("src", "images/dice5.png");
    //         break;
    //     case "6":
    //         dice1.setAttribute("src", "images/dice6.png");
    //         break;
        
    //   }

    dice1.setAttribute("src", randomDiceImage1)
}


function rollDice2() {

    // switch(randomNumber1) {
    //     case "1":
    //         dice2.setAttribute("src", "images/dice1.png");
    //         break;
    //     case "2":
    //         dice2.setAttribute("src", "images/dice2.png");
    //         break;
    //     case "3":
    //         dice2.setAttribute("src", "images/dice3.png");
    //         break;
    //     case "4":
    //         dice2.setAttribute("src", "images/dice4.png");
    //         break;
    //     case "5":
    //         dice2.setAttribute("src", "images/dice5.png");
    //         break;
    //     case "6":
    //         dice2.setAttribute("src", "images/dice6.png");
    //         break;
        
    //   }

    dice2.setAttribute("src", randomDiceImage2);
}


function declareWinner() {
    if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "∆Player 2 Wins!";
    }
    else if (randomNumber2 < randomNumber1) {
        document.querySelector("h1").innerHTML = "∑Player 1 Wins!";
    
    } else {
        document.querySelector("h1").innerHTML = "Draw...";
    }
}

    rollDice1();
    rollDice2();
    declareWinner();

    // diceAction.addEventListener("click", declareWinner());



    // rollDice1();
    // rollDice2();
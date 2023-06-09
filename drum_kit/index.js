// Audio file
var tom_1 = new Audio("sounds/tom-1.mp3");
var tom_2 = new Audio('sounds/tom-2.mp3');
var tom_3 = new Audio('sounds/tom-3.mp3');
var tom_4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var kick_base = new Audio('sounds/kick-bass.mp3');
var crash = new Audio('sounds/crash.mp3');

// Keys in use
var keysInUse = ['w','a','s','d','j','k','l'];

// Ids the button that is pressed
const drumButton = document.querySelectorAll('.drum');

drumButton.forEach(function(currentButton) {
    currentButton.addEventListener("click", function () {
        buttonInnerHTML = this.innerHTML;
        hitDrum(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

// will check for a key press
document.addEventListener('keydown', (event) => {
    hitDrum(event.key);

    buttonAnimation(event.key);
});
    
    function hitDrum(key) {
        switch(key) {
            
            case 'w':
                // this.innerHTML.style.color = "white";
                tom_1.play();
                break;
            case 'a':
                tom_2.play();
                break;
            case 's':
                tom_3.play();
                break;
            case 'd':
                tom_4.play();
                break;
            case 'j':
                snare.play();
                break;
            case 'k':
                crash.play();
                break;
            case 'l':
                kick_base.play();
                break;
            default:
                console.log("yum");
        }
    }



    function buttonAnimation(currentKey) {
            var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");

            // setting a time out to remove the class html class pressed
            setTimeout(function() {
                activeButton.classList.remove("pressed");
            },
                101 /*in milliseconds*/ ); 

            
        
    }

// function handleClick() {
//     alert('Ive been clicked ');
// }


    




/************************ PLAYGROUND ***********************/ 

// anonymous function

// document.querySelector("button").addEventListener("click", function () {
//     alert("Iam the anonymous function");
// });

// to loop through buttons another way
// 

// for of Loop
// for (const value of drumButton)

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// function add(num1, num2) {
//     return (num1 + num2);
// }

// function substract(num1, num2) {
//     return (num1 - num2);
// }

// function multiply(num1, num2, ) {
//     return (num1 * num2);
// }

// function divide(num1, num2, ) {
//     return (num1 / num2);
// }

// function remainder(num1, num2) {
//     return (num1 % num2);
// }

// factory begins = constructor function

// function BellBoy (
//     name,
//     age,
//     hasWorkPermit,
//     languages,
//     bellBoyHat,
//     pants,
//     boy,
//     minAge,
//     )
// {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.bellBoyHat = bellBoyHat;
//     this.pants = pants;
//     this.boy = boy;
//     this.minAge = minAge;
//     this.clean = function() {
//         console.log("clean");
//         alert("cleaning in progress");
//     }
// }


// factory ends

// var bellBoy = {
//         bellBoyHat: true,
//         pants: true,
//         boy: true,
//         minAge: '18'
//     }

// var maid = {
//         maidhat: true,
//         colors: 'black and white',
//         comfortableShoes: true,
//         dress: true,
//         minAge: '18',
//         yearsOfExperience: '5',
//     }

// var cook = {
//         cooks:true,
//         makesPizza: true,
//         chefHatColor: 'white',
//         mentor: 'Gordan Ramsay'
//     }
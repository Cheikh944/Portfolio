var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage ="images/dice"+ randomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 ="images/dice"+ randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if ( randomNumber1 > randomNumber2){
    var winner = document.querySelector("h1") ;  
    winner.innerHTML="Winner : Player 1";
} else{
    var winner = document.querySelector("h1") ;
    winner.innerHTML="Winner : Player 2"
}
if ( randomNumber1 == randomNumber2){
    var equality = document.querySelector("h1") ;  
    equality.innerHTML="Draw";
}

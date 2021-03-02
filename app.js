// toglogchiin eeljiig hadgalah huvisagch player1  0
var activePlayer = 1;

// toglogchiin tsugluusan onoog hadgalah huvisagch 
var score = [0, 0];


// toglogchiin eeljiin tsugluulj baigaa onoog hadgalah huvisagch 
var roundScore = 0;
// shoo ali talaara buuhiig hadgalah huvisagch 1-6 gesen huvisagch 


// document.querySelector('#score-0').textContent = dice;
// <div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = dice;

document.querySelector('#score-0').textContent = "0"; // html ees ID gaar n haij oorchilj bna 
document.getElementById("score-1").textContent="0"; // hurdan haij olno  ID

document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";// html ees class aar n haij olj oorchilno 

var diceDom = document.querySelector('.dice');

diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener('click', function (){
    var diceNumber = Math.floor(Math.random()*6)+1;

    diceDom.style.display = "block";
    diceDom.src = 'dice-'+ diceNumber + ".png";

});

// console.log("dice shoo"+ dice);

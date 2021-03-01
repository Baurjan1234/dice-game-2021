// toglogchiin eeljiig hadgalah huvisagch player1  0
var activePlayer = 1;

// toglogchiin tsugluusan onoog hadgalah huvisagch 
var score = [0, 0];


// toglogchiin eeljiin tsugluulj baigaa onoog hadgalah huvisagch 
var roundScore = 0;
// shoo ali talaara buuhiig hadgalah huvisagch 1-6 gesen huvisagch 
var dice = Math.floor(Math.random()*6)+1;

// document.querySelector('#score-0').textContent = dice;
// <div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = dice;
document.querySelector('#score-0').textContent = 0; // html ees ID gaar n haij oorchilj bna 
document.querySelector('#score-1').textContent = 0; 


document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;// html ees class aar n haij olj oorchilno 

document.querySelector('.dice').style.display = "none";

console.log("dice shoo"+ dice);
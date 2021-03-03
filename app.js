// toglogchiin eeljiig hadgalah huvisagch player1  0
var activePlayer = 0;

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
// shooni zurga alga bolgono 
diceDom.style.display = "none";
// shoog shideh event 
document.querySelector(".btn-roll").addEventListener('click', function (){

    var diceNumber = Math.floor(Math.random()*6)+1;

    // shoog zrg web dr gargaj irne 
    diceDom.style.display = "block";   
    // sanamsargvi too delgets deer gargaj irne 
    diceDom.src = 'dice-'+ diceNumber + ".png"; 
    
    // buusan too 1 ees ylgaatai bol toglogch eeljiin onoog nemgdvvlne 
    if (diceNumber !== 1){
        roundScore = roundScore + diceNumber;
        document.getElementById("current-"+ activePlayer).textContent = roundScore;
    }

    else {

        // ene toglogchiin elljinde tsugluusan onoog 0 bolgon 
        swichtToNextPlayer();
    }

});
// Hold tovch 
document.querySelector(".btn-hold").addEventListener("click", function(){
    // ug toglogchiin tsugluusan eeljni onoog global onoond nemj ogno 
    
    score[activePlayer] = score[activePlayer] + roundScore; 

     // delgets deer toogiin oorchilno
     document.getElementById("score-"+ activePlayer).textContent = score[activePlayer];
    // ug toglogchiig hojson eseh shalgaj 
    
    if (score[activePlayer] >= 20){

        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-"+ activePlayer+ '-panel').classList.add("winner");
    }else {
        swichtToNextPlayer();
    }
   

    // eeljiin onoog 0 bolgono
    

    // toglogchiig eeljiig solino 
})


function swichtToNextPlayer(){
    roundScore = 0;
    document.getElementById("current-"+ activePlayer).textContent =0;
    // 1 buusan toglogch eelj solinno
    activePlayer === 0 ? (activePlayer =1) : (activePlayer = 0);
    
    // ulaan tsegiig haij oloh  
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // shoog tvr alga bolgi 
    diceDom.style.display = "none";

}

// 
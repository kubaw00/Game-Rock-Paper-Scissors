// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameResult = {
    player: "",
    computer: "",
    winner: ""
};

const statistics = {
    numberOfGames: 0,
    winings:0,
    losses: 0,
    draws: 0
};

const imgs = [...document.querySelectorAll('img')];
const btn = document.querySelector('.start');


imgs.forEach((img) => {   
        img.addEventListener('click', function(){
        imgs.forEach((img) => img.style.boxShadow = "");
        this.style.boxShadow= "0 0 0 5px yellow";
        console.log(this.dataset.option);
        gameResult.player = this.dataset.option;
        
    })
})

//losowanie ai
function aiChoice(){
    const index = Math.floor(Math.random() * imgs.length);
    return imgs[index].dataset.option;
    
};

//kto wygrał
function winnerVerdict(player, ai){
    if(player === ai){
         return "Remis!"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "nożyczki")){
        return "Wygrałeś!!!"
    } else return "Przegrałeś!!!"
} 

//publikacja wynkików
function publishResult(player, ai, whoWin){
 document.querySelector('[data-summary="your-choice"]').textContent = player;
 document.querySelector('[data-summary="ai-choice"]').textContent = ai;
 document.querySelector('[data-summary="who-win"]').textContent = whoWin;

 statistics.numberOfGames++;
 document.querySelector('.numbers span').textContent = statistics.numberOfGames;
 
 if(whoWin === "Wygrałeś!!!"){
 statistics.winings++;
 document.querySelector('.wins span').textContent = statistics.winings;
 document.querySelector('[data-summary="who-win"]').style.color = "green"
 }
 
 else if (whoWin === "Przegrałeś!!!"){
    statistics.losses++;
    document.querySelector('.losses span').textContent = statistics.losses;
    document.querySelector('[data-summary="who-win"]').style.color = "red";
    }
    else if (whoWin === "Remis!"){
        statistics.draws++;
        document.querySelector('.draws span').textContent = statistics.draws;
        document.querySelector('[data-summary="who-win"]').style.color = "grey"
        }  
}

//reset 

function reset() {
    document.querySelector(`[data-option="${gameResult.player}"]`).style.boxShadow = "";
    gameResult.player ="";
    gameResult.computer ="";
    gameResult.winner ="";
}
//funkcja starutjąca

function startGame() {
    if(!gameResult.player){
         return alert("Wybierz opcję:")
    }
    gameResult.computer = aiChoice();
    gameResult.winner = winnerVerdict(gameResult.player, gameResult.computer);
    publishResult(gameResult.player, gameResult.computer, gameResult.winner);
    reset(gameResult.player, gameResult.computer, gameResult.winner);
}


btn.addEventListener('click', startGame)














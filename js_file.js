let computerscore = 0;    

let playerscore = 0;


const body = document.body;





const rock = document.querySelector('.rock');

rock.addEventListener('click', function (e) {
    playerSelection = rock.className
    getComputerChoice();
    
    playround(playerSelection);
    
  });

  const paper = document.querySelector('.paper');

  paper.addEventListener('click', function (e) {
    playerSelection = paper.className
    getComputerChoice();
    
   playround(playerSelection);
    
   
  })

  const scissors = document.querySelector('.scissors');

  scissors.addEventListener('click', function (e) {
    playerSelection = scissors.className
    getComputerChoice();
    
    playround(playerSelection);
    
    
    
  })
  



  const scores = document.createElement("div");
  scores.classList.add('scores');
  body.append(scores);

  
 



function getComputerChoice() {
    let num = Math.floor(Math.random() * (3 - 1 + 1)) +1 ;
    if (num == 1) {
        return getComputerSelection="rock";
    }
    else if (num == 2){
        return getComputerSelection="paper";
    }
    else {
        return getComputerSelection="scissors";
    }
}


function playround (playerSelection) {
    let result =""
;    if ((playerSelection == "rock" && getComputerSelection == "scissors") || (playerSelection == "paper" && getComputerSelection == "rock") || (playerSelection =="scissors" && getComputerSelection == "paper")) {
        playerscore++;
        result = `your score: ${playerscore} computer score:  ${computerscore}
         You win ! ${playerSelection}  beats ${getComputerSelection}`;
        if (playerscore == 5){
            result += `
            You won the series`;
           
            
           
        }
        
    }
    
    else if (playerSelection == getComputerSelection) {
        result =`your score:${playerscore}  computer score: ${computerscore} 
        Draw !`;
        
    }
    else if (playerSelection == ""){
        result = `your score:${playerscore}  computer score: ${computerscore}`+ 'You didnt play';
        
    }
    else {
        computerscore++;
        result = `your score:${playerscore}  computer score: ${computerscore} 
        You loose! ${playerSelection} looses to ${getComputerSelection}`;
        if (computerscore==5){
            result += `
            You lost the series`;
            
        }
        
    }
    scores.innerText=result;
    return 
}
   





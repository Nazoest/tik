let gameIsActive = true;
let startingCells = ['', '', '', '', '', '', '', '', ''];
let players = ['X', 'O'];
let currentPlayer = players[0];
let info = document.getElementById('announcer');
let go = "circle";

const container = document.querySelector(".container");

function createBoard() {
  for (let i = 0; i < startingCells.length; i++) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("tile");
    cellElement.addEventListener('click', addGo);
    cellElement.id = i;
    container.appendChild(cellElement);
  }
}

function addGo(e) {
  
  let goDisplay = document.querySelector('div');
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  
  startingCells[e.target.id] = currentPlayer;
  checkWinner();
  if(currentPlayer===players[0]){
    return currentPlayer= players[1]
  }else{
    return currentPlayer= players[0]
  }
  
  
  info.textContent = "It is now " + currentPlayer + "'s turn";
}

function checkWinner() {
  
}
 
createBoard();

  
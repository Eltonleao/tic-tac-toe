let players = ["X", "O"];
let gameActive = true;
let gameState = [
    '', '', '',
    '', '', '',
    '', '', ''
];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = players[0];

document.querySelectorAll('.cell').forEach(elem => {
    elem.addEventListener('click', handleClick);
})

function handleClick() {
    if (gameActive && this.innerHTML == "") {
        this.innerHTML = currentPlayer;
        registerPlay(this);
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer == players[0] ? players[1] : players[0];
}

function registerPlay(elem) {
    gameState[elem.getAttribute('data-index')] = currentPlayer;
}

function checkWinner() {
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            alert(currentPlayer + ' won!');
            gameActive = false;
            break
        }

        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            alert('draw');
            gameActive = false;
            return;
        }
    }
}
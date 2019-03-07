var board = [];
var lineTab = [];
var turn = 1;

for (var i = 0; i < 10; i++) {
    board[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

// Jouer la colonne value
function play(value, playerType) {
    for (let i = board.length - 1; i >= 0; i--) {
        if (board[i][value] === 0) {
            board[i][value] = playerType;
            // console.table(board);
            turnPlay();
            verifVictoire(board);
            break;
        }
    }
}

// Demander la première valeur de la colonne à jouer
var premValue = prompt('Entre la n° de la colonne que tu veux jouer !');

play(premValue, "J");

// Vérifier le tour pour 
function turnPlay() {
    turn += 1;
    if (turn === 3) {
        turn = 1;
    }
    whoIsPlaying();
}

function whoIsPlaying() {
    if (turn === 1) {
        // console.log('Tour du joueur');
        playerTurn();
    } else {
        machineTurn();

    }
}

function playerTurn() {
    var valueJou = prompt('Quelle colonne veux tu jouer ensuite ?');
    play(valueJou, "J");
}

function machineTurn() {
    value = Math.floor(Math.random() * 10);
    play(value, "M");
    console.log(value);
    console.table(board);
}

function verifVictoire(tab) {

    // Verification verticale
    // for (let i = tab.length - 1; i >= 0; i--) {
    //     for (let j = tab[i].length - 1; j >= 0; j--) {
    //         if ((tab[i][j] !== 0) && (tab[i][j] === tab[i - 1][j] && tab[i - 1][j] === tab[i - 2][j] && tab[i - 2][j] === tab[i - 3][j])) {
    //             console.log('Gagné, il y a quatre valeurs identiques verticalement !');
    //         }
    //     }
    // }

    // // Verification horizontale
    // for (let i = tab.length - 1; i >= 0; i--) {
    //     for (let j = tab[i].length - 1; j >= 0; j--) {
    //         if ((tab[i][j] !== 0) && (tab[i][j] === tab[i][j - 1] && tab[i][j - 1] === tab[i][j - 2] && tab[i][j - 2] === tab[i][j - 3])) {
    //             console.log('Gagné, il y a quatre valeurs identiques horizontalement !');
    //         }
    //     }
    // }

    // Verification diagonalement vers la gauche
    for (let i = tab.length - 1; i >= 0; i--) {
        for (let j = tab[i].length - 1; j >= 0; j--) {
            if ((tab[i][j] !== 0) && (tab[i][j] === tab[i - 1][j - 1] && tab[i - 1][j - 1] === tab[i - 2][j - 2] && tab[i - 2][j - 2] === tab[i - 3][j - 3])) {
                console.log('Gagné, il y a quatre valeurs identiques diagonalement vers la gauche !');
            }
        }
    }

    // Verification diagonalement vers la droite
    for (let i = tab.length - 1; i >= 0; i--) {
        for (let j = tab[i].length - 1; j >= 0; j--) {
            if ((tab[i][j] !== 0) && (tab[i][j] === tab[i - 1][j + 1] && tab[i - 1][j + 1] === tab[i - 2][j + 2] && tab[i - 2][j + 2] === tab[i - 3][j + 3])) {
                console.log('Gagné, il y a quatre valeurs identiques diagonalement vers la droite !');
            }
        }
    }
}
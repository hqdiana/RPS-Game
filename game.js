let playerMove = '';
let computerMove = '';
let result = '';

let pierre = document.querySelector('.pierre');
let feuille = document.querySelector('.feuille');
let ciseaux = document.querySelector('.ciseaux');

// determine player move
    pierre.addEventListener('click', function() {
        playerMove = 'pierre';
        playGame();
    })
    feuille.addEventListener('click', function() {
        playerMove = 'feuille';
        playGame();
    })
    ciseaux.addEventListener('click', function() {
        playerMove = 'ciseaux';
        playGame();
    })

// make play game function
function playGame() {

    // determine computer move
        let moves = ['pierre', 'feuille', 'ciseaux'];
        let i = Math.floor(Math.random() * moves.length);
        computerMove = moves[i];

        console.log(`player chose ${playerMove} and computer chose ${computerMove}`);

    // determine tie results
        if (playerMove === computerMove) {
            result = `Looks like it's a tie!`
            console.log(result);
        }
    // determine when player wins
        if (playerMove === 'pierre' && computerMove === 'ciseaux') {
            result = 'Yay, you won!'
            console.log(result);
        }
         else if (playerMove === 'feuille' && computerMove === 'pierre') {
           result = 'Yay, you won!'
           console.log(result);
        }
         else if (playerMove === 'ciseaux' && computerMove === 'feuille') {
            result = 'Yay, you won!'
            console.log(result);
        }
        else {
            result = 'Uh oh... you are a loser'
            console.log(result);
        }

}







const SelRock = document.querySelector('#rock')
const SelPaper = document.querySelector('#paper')
const SelScissors = document.querySelector('#scissors')


let word = "";
let playerScore = 0;
let computerScore = 0;
SelRock.addEventListener('click', () => Game(1))
SelPaper.addEventListener('click', () => Game(2))
SelScissors.addEventListener('click', () => Game(3))
function Game(playerChoice, computerChoice) {
    computerChoice = (Math.floor(Math.random() * 3) + 1)
    if (computerScore < 5 && playerScore < 5) {
        if (playerChoice === computerChoice) {
            score();
            PlayerColor(playerChoice, '#98B5D3');
            ComputerColor(computerChoice, '#98B5D3');
            document.getElementById('state').innerHTML = "Player chose " + toword(playerChoice) + " and computer chose " + toword(computerChoice) + ", no one gets point, it's a tie";
        } else if (((playerChoice === 1 && computerChoice === 3) || (playerChoice === 2 && computerChoice === 1) || (playerChoice === 3 && computerChoice === 2)) && (playerScore <= 5 && computerScore <= 5)) {
            playerScore++;
            score();
            PlayerColor(playerChoice, '#98B5D3');
            ComputerColor(computerChoice, '#98B5D3');
            document.getElementById('state').innerHTML = "Player chose " + toword(playerChoice) + " and computer chose " + toword(computerChoice) + ", player gets point";
            if (playerScore === 5) {

                if (confirm('Player WON!\nStart Again?')) {
                    location.reload();
                }
                else {
                    document.getElementById('state').innerHTML = "OK, have a nice day!"
                    document.getElementById('winner').innerHTML = 'Player WON!';
                }
            }
        } else {
            computerScore++;
            score();
            PlayerColor(playerChoice, '#98B5D3');
            ComputerColor(computerChoice, '#98B5D3');
            document.getElementById('state').innerHTML = "Player chose " + toword(playerChoice) + " and computer chose " + toword(computerChoice) + ", computer gets point";
            if (computerScore === 5) {

                if (confirm('Computer WON! \nStart Again?')) {
                    location.reload();
                }
                else {
                    document.getElementById('state').innerHTML = "OK, have a nice day!";
                    document.getElementById('winner').innerHTML = 'Computer WON!';
                }


            }
        }
    }
}
function score() {
    document.getElementById('player').innerHTML = playerScore;
    console.log(playerScore)

    document.getElementById('computer').innerHTML = computerScore;
    console.log(computerScore)


}
function toword(int) {
    switch (int) {
        case 1:
            word = "Rock"
            break;
        case 2:
            word = "Paper"
            break;
        case 3:
            word = "Scissors"
            break;
        default:
            break;
    }
    return word;
}
function PlayerColor(playerChoice, color) {
    if (playerChoice === 1) {
        document.getElementById('rock').style.background = color;
        document.getElementById('paper').style.background = '#9898d3';
        document.getElementById('scissors').style.background = '#9898d3';
    }
    else if (playerChoice === 2) {
        document.getElementById('rock').style.background = '#9898d3';
        document.getElementById('paper').style.background = color;
        document.getElementById('scissors').style.background = '#9898d3';
    }
    else if (playerChoice === 3) {
        document.getElementById('rock').style.background = '#9898d3';
        document.getElementById('paper').style.background = '#9898d3';
        document.getElementById('scissors').style.background = color;
    }

}
function ComputerColor(computerChoice, color) {
    if (computerChoice === 1) {
        document.getElementById('rock').style.borderColor = color;
        document.getElementById('paper').style.borderColor = '#9898d3';
        document.getElementById('scissors').style.borderColor = '#9898d3';
    }
    else if (computerChoice === 2) {
        document.getElementById('rock').style.borderColor = '#9898d3';
        document.getElementById('paper').style.borderColor = color;
        document.getElementById('scissors').style.borderColor = '#9898d3';
    }
    else if (computerChoice === 3) {
        document.getElementById('rock').style.borderColor = '#9898d3';
        document.getElementById('paper').style.borderColor = '#9898d3';
        document.getElementById('scissors').style.borderColor = color;
    }
}


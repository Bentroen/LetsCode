// Seletores
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore;
let activePlayer;
let scores;


function start() {
    // Condições iniciais
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    btnNew.addEventListener('click', start)
    btnRoll.addEventListener('click', roll)
    btnHold.addEventListener('click', hold)
}


function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


function roll() {
    // 1. Gerar um número aleatório para o dado

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Mostrar o dado

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Checar se o número do dado é 1. Se for, mudar para o próximo player.
    
    if (dice !== 1) {
        // Adicionar o dado à pontuação atual
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // mudar o player e definir pontuação atual para 0
        switchPlayer();
    }
}


function hold() {
    {
        // 1. Adicionar a pontuação atual à pontuação do jogador que está ativo
    
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        // 2. Verificar se a pontuação do jogador é >= 100
    
        if (scores[activePlayer] >= 100) {
            // Fim do jogo
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            btnRoll.removeEventListener('click', roll);
            btnHold.removeEventListener('click', hold);
        } else {
            switchPlayer();
        }
    }
}


start();
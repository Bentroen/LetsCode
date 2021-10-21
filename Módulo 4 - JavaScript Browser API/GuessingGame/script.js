function displayMessage(message) {
    document.querySelector('.message').textContent = (message);
}

function reset() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    highscore = 0;

    console.log(secretNumber);

    displayMessage("Comece a adivinhar...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";

    let btn = document.querySelector('.check');
    btn.addEventListener('click', check);
    btn.style.cursor = "pointer";
    btn.style.opacity = 1.0;
}

function check() {
    if (score > 0) {
        let guess = parseInt(document.querySelector('.guess').value);
        if (!guess) {
            displayMessage("Nenhum número!");
        } else if (guess === secretNumber) { // Número correto!
            displayMessage("Número correto!");
            document.querySelector('.number').textContent = secretNumber;
            stopGame();

            // Estilo
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;

            if (score >= highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        } else { // Número errado
            score--;
            if (score > 0) {
                displayMessage(guess > secretNumber ? "Muito alto!" : "Muito baixo!");
            } else {
                displayMessage("Você perdeu!");
                stopGame();
            }
            document.querySelector('.score').textContent = score;
        }
    }
}

function stopGame() {
    let button = document.querySelector('.check');
    button.removeEventListener('click', check);
    button.style.cursor = "not-allowed";
    button.style.opacity = 0.2;
}


document.querySelector('.again').addEventListener('click', reset);
reset();


/* DESAFIOS EXTRAS

- Adicionar a informação de quente e frio.
  - Quando o usuário estiver quente (uma diferença de 2 com relação ao valor original), adicione um fundo laranja.
  - Quando o usuário estiver frio, volte ao background original.
- Quando o usuário acertar:
  - Remova o evento de click no botão "Check"
  - Coloque o estilo do cursor para `not-allowed` no botão
  - Coloque o estilo de opacidade em 0.2 no botão
*/

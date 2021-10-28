let title = document.getElementById("level-title");
let background = document.body;
let botoes = document.querySelectorAll(".btn");

let level, sequencia, passo, cores;
let iniciado = false;

document.addEventListener("keydown", startGame);

function startGame() {
    if (!iniciado) {

        background.classList.remove("game-over")
        botoes.forEach((btn) => btn.addEventListener("click", buttonPressed));

        level = 0;
        sequencia = [];
        passo = 0;
    
        cores = ["green", "red", "yellow", "blue"];

        getNumero();
        iniciado = true;
    }
}

function fimDoJogo() {
    title.textContent = "Você perdeu! Pressione uma tecla para reiniciar";
    botoes.forEach((btn) => btn.removeEventListener("click", buttonPressed));
    iniciado = false;

    background.classList.add("game-over");
    setTimeout(() => {background.classList.remove("game-over")}, 1000);

    playSound("sounds/wrong.mp3");
}

function getNumero() {

    level++;
    title.textContent = `Nível ${level}`;

    let numero = Math.trunc(Math.random() * 4);

    passo = 0;
    sequencia.push(numero);

    let botao = document.getElementById(cores[numero]);
    piscar(botao);

}

function piscar(botao) {
    botao.classList.add("pressed");
    setTimeout(() => {
        botao.classList.remove("pressed");
    }, 200);

    playButtonSound(botao.id);
}

function buttonPressed(e) {

    let botao = e.target

    piscar(botao);

    let cor = cores.indexOf(botao.id);

    console.log(sequencia[passo], cor);

    if (cor === sequencia[passo]) { // Usuário acertou a sequência
        if (passo === sequencia.length - 1) { // Se for o fim da sequência...
            setTimeout(getNumero, 500); // Escolha o próximo número
        }
    } else {
        fimDoJogo();
    }

    passo += 1;

}

function playButtonSound(cor) {
    playSound(`sounds/${cor}.mp3`)
}

function playSound(path) {
    const audio = new Audio(path);
    audio.play();
}

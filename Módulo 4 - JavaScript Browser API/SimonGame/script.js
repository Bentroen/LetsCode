let title = document.getElementById("level-title");
let botoes = document.querySelectorAll(".btn")

let level, sequencia, passo, cores;
let iniciado = false;


function startGame() {
    if (!iniciado) {

        botoes.forEach((btn) => btn.addEventListener("click", buttonPressed));

        level = 0;
        sequencia = [];
        passo = 0;
    
        cores = ["green", "red", "yellow", "blue"];
    
        iniciado = false;

        getNumero();
        iniciado = true;
    }
}

function fimDoJogo() {
    title.textContent = "Você perdeu! Pressione uma tecla para reiniciar";
    botoes.forEach((btn) => btn.removeEventListener("click", buttonPressed));
    iniciado = false;
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
}

function buttonPressed(e) {

    piscar(this);

    let cor = cores.indexOf(this.id);

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

document.addEventListener("keydown", startGame);

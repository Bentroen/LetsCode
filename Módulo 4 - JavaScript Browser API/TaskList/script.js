const nenhumaTarefaPendenteEl = document.querySelector(".no-pending-tasks");
const nenhumaTarefaConcluidaEl = document.querySelector(".no-done-tasks");

const tarefasPendentesEl = document.getElementById("pending").getElementsByTagName("tbody")[0];
const tarefasConcluidasEl = document.getElementById("done").getElementsByTagName("tbody")[0];

const tarefasPendentesTitle = document.querySelector(".pending-title");
const tarefasConcluidasTitle = document.querySelector(".done-title");

const tarefaInput = document.getElementById("task-name-input");
const dataInput = document.getElementById("task-date-input");
const submitInput = document.getElementById("add-task-button");


let tarefasPendentes = [];
let tarefasConcluidas = [];
carregarTarefas();


function getElementIndex(element) {
	return [...element.parentNode.children].indexOf(element)
}

function adicionarTarefa(nome, data, concluida) {
    let tarefa = {
        "nome": nome,
        "data": data,
        "concluida": concluida
    };

    if (!concluida) {
        tarefasPendentes.unshift(tarefa);
    } else {
        tarefasConcluidas.unshift(tarefa);
    }

    console.log(tarefasPendentes);

    adicionarElementoTarefa(nome, data, concluida);
    salvarTarefas();
}

function adicionarElementoTarefa(nome, data, concluida, inserirNoTopo) {
    let listaEl;
    if (!concluida) {
        listaEl = tarefasPendentesEl;
    } else {
        listaEl = tarefasConcluidasEl;
    }

    // 0 para inserir no começo da lista, -1 para inserir no final da lista
    console.log(inserirNoTopo)
    inserirNoTopo = (typeof inserirNoTopo !== 'undefined') ? inserirNoTopo : true;
    console.log(inserirNoTopo)
    const index = inserirNoTopo ? 0 : -1;
    console.log(index)

    let tarefaEl = listaEl.insertRow(index);
    let concluidoEl = tarefaEl.insertCell();
    let nomeEl = tarefaEl.insertCell();
    nomeEl.appendChild(document.createTextNode(nome));
    let dataEl = tarefaEl.insertCell();
    dataEl.appendChild(document.createTextNode(data));
    let acoesEl = tarefaEl.insertCell();
    acoesEl.innerHTML = ' \
        <button class="btn btn-delete-task"><span class="material-icons">delete</span></button> \
    '

    if (!concluida) {
        acoesEl.innerHTML = acoesEl.innerHTML + ' \
        <button class="btn btn-shift-task-up"><span class="material-icons">arrow_upward</span></button> \
        <button class="btn btn-shift-task-down"><span class="material-icons">arrow_downward</span></button> \
    '}

    const checkboxIcon = concluida ? "check_box": "check_box_outline_blank"
    concluidoEl.innerHTML = ` \
    <button class="btn btn-mark-task-done"><span class="material-icons">${checkboxIcon}</span></button> \
    `

    if (!concluida) {
        concluidoEl.querySelector('button').addEventListener("click", marcarTarefaComoConcluida);
    } else {
        concluidoEl.querySelector('button').addEventListener("click", desmarcarTarefaComoConcluida);
    }

    const botoes = acoesEl.querySelectorAll('button');

    if (!concluida) {
        nenhumaTarefaPendenteEl.classList.add("hidden");
        botoes[0].addEventListener("click", removerTarefa);
        botoes[1].addEventListener("click", moverTarefaParaCima);
        botoes[2].addEventListener("click", moverTarefaParaBaixo);
    } else {
        nenhumaTarefaConcluidaEl.classList.add("hidden");
        botoes[0].addEventListener("click", removerTarefaConcluida);
    }

    atualizarTitulos();
}

function moverTarefaParaCima(e) {
    const taskEl = e.target.parentNode.parentNode;
    trocarTarefa(taskEl, -1);
}

function moverTarefaParaBaixo(e) {
    const taskEl = e.target.parentNode.parentNode;
    trocarTarefa(taskEl, 1);
}

function trocarTarefa(elemento, direcao) {
    var lista = elemento.parentNode;

    const taskIndex = getElementIndex(elemento);
    console.log("a");
    console.log(taskIndex);

    const temp = tarefasPendentes[taskIndex];
    tarefasPendentes[taskIndex] = tarefasPendentes[taskIndex + direcao];
    tarefasPendentes[taskIndex + direcao] = temp;

    if (direcao === -1 && elemento.previousElementSibling) {
        lista.insertBefore(elemento, elemento.previousElementSibling);
    } else if (direcao === 1 && elemento.nextElementSibling) {
        lista.insertBefore(elemento, elemento.nextElementSibling.nextElementSibling)
    }
}

function removerTarefa(e) {
    const taskEl = e.target.parentNode.parentNode;
    const taskIndex = getElementIndex(taskEl);

    tarefasPendentesEl.deleteRow(taskIndex);

    const tarefaRemovida = tarefasPendentes[taskIndex];
    tarefasPendentes.splice(taskIndex, 1);

    if (tarefasPendentes.length === 0) {
        nenhumaTarefaPendenteEl.classList.remove("hidden");
    }

    atualizarTitulos();
    salvarTarefas();

    return tarefaRemovida;
}

function removerTarefaConcluida(e) {
    const taskEl = e.target.parentNode.parentNode;
    const taskIndex = getElementIndex(taskEl);

    tarefasConcluidasEl.deleteRow(taskIndex);

    const tarefaRemovida = tarefasConcluidas[taskIndex];
    tarefasConcluidas.splice(taskIndex, 1);

    if (tarefasConcluidas.length === 0) {
        nenhumaTarefaConcluidaEl.classList.remove("hidden");
    }

    atualizarTitulos();
    salvarTarefas();

    return tarefaRemovida;
}

function marcarTarefaComoConcluida(e) {
    const {nome, data, } = removerTarefa(e);
    adicionarTarefa(nome, data, true);
}

function desmarcarTarefaComoConcluida(e) {
    const {nome, data, } = removerTarefaConcluida(e);
    adicionarTarefa(nome, data, false);
}

function criarTarefa() {
    const nome = tarefaInput.value;
    const data = dataInput.value;
    if (nome === "" || data === "") {
        return;
    }
    adicionarTarefa(nome, data);
}

function atualizarTitulos() {
    tarefasPendentesTitle.textContent = `Pendentes (${tarefasPendentes.length})`
    tarefasConcluidasTitle.textContent = `Concluídas (${tarefasConcluidas.length})`
}

function salvarTarefas() {
    localStorage.setItem("tarefasPendentes", JSON.stringify(tarefasPendentes));
    localStorage.setItem("tarefasConcluidas", JSON.stringify(tarefasConcluidas));
}

function carregarTarefas() {
    const pendentesStorage = localStorage.getItem("tarefasPendentes");
    if (pendentesStorage) {
        tarefasPendentes = JSON.parse(pendentesStorage);
        tarefasPendentes.forEach(({nome, data}) => {
            adicionarElementoTarefa(nome, data, false, false);
        });
    }

    const concluidasStorage = localStorage.getItem("tarefasConcluidas");
    if (concluidasStorage) {
        tarefasConcluidas = JSON.parse(concluidasStorage);
        tarefasConcluidas.forEach(({nome, data}) => {
            adicionarElementoTarefa(nome, data, true, false);
        });
    }
}

submitInput.addEventListener("click", criarTarefa);
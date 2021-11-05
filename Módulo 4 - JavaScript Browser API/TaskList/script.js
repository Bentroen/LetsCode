const nenhumaTarefaPendenteEl = document.querySelector(".no-pending-tasks");
const nenhumaTarefaConcluidaEl = document.querySelector(".no-done-tasks");

const tarefasPendentesEl = document.getElementById("pending").getElementsByTagName("tbody")[0]
const tarefasConcluidasEl = document.getElementById("done")

const tarefaInput = document.getElementById("task-name-input");
const dataInput = document.getElementById("task-date-input");
const submitInput = document.getElementById("add-task-button");


let tarefasPendentes = [];
let tarefasConcluidas = [];


function adicionarTarefa(nome, data) {
    tarefa = {
        "nome": nome,
        "data": data,
        "concluida": false
    };
    tarefasPendentes.unshift(tarefa);

    let tarefaEl = tarefasPendentesEl.insertRow(0);
    let nomeEl = tarefaEl.insertCell();
    nomeEl.appendChild(document.createTextNode(nome));
    let dataEl = tarefaEl.insertCell();
    dataEl.appendChild(document.createTextNode(data));
}

function criarTarefa() {
    const nome = tarefaInput.value;
    const data = dataInput.value;
    console.log(nome, data)
    adicionarTarefa(nome, data);
}

submitInput.addEventListener("click", criarTarefa);
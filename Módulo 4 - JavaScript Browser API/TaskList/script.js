const nenhumaTarefaPendenteEl = document.querySelector(".no-pending-tasks");
const nenhumaTarefaConcluidaEl = document.querySelector(".no-done-tasks");

const tarefasPendentesEl = document.getElementById("pending").getElementsByTagName("tbody")[0]
const tarefasConcluidasEl = document.getElementById("done")

const tarefaInput = document.getElementById("task-name-input");
const dataInput = document.getElementById("task-date-input");
const submitInput = document.getElementById("add-task-button");


let tarefasPendentes = [];
let tarefasConcluidas = [];


function getElementIndex(element) {
	return [...element.parentNode.children].indexOf(element)
}

function adicionarTarefa(nome, data) {
    tarefa = {
        "nome": nome,
        "data": data,
        "concluida": false
    };
    tarefasPendentes.unshift(tarefa);

    let tarefaEl = tarefasPendentesEl.insertRow(0);
    let concluidoEl = tarefaEl.insertCell();
    concluidoEl.innerHTML = ' \
        <span class="material-icons">check_box_outline_blank</span> \
    '
    let nomeEl = tarefaEl.insertCell();
    nomeEl.appendChild(document.createTextNode(nome));
    let dataEl = tarefaEl.insertCell();
    dataEl.appendChild(document.createTextNode(data));
    let acoesEl = tarefaEl.insertCell();
    acoesEl.innerHTML = ' \
        <button class="btn btn-delete-task"><span class="material-icons">delete</span></button> \
        <button class="btn btn-shift-task-up"><span class="material-icons">arrow_upward</span></button> \
        <button class="btn btn-shift-task-down"><span class="material-icons">arrow_downward</span></button> \
    '

    const botoes = acoesEl.querySelectorAll('button');
    botoes[0].addEventListener("click", removerTarefa);
    //botoes[1].addEventListener("click", moverTarefaParaCima);
    //botoes[2].addEventListener("click", moverTarefaParaBaixo);

    nenhumaTarefaPendenteEl.classList.add("hidden")

    console.log(tarefasPendentes);
}

function removerTarefa(e) {
    const taskEl = e.target.parentNode.parentNode;
    console.log(taskEl);
    console.log(taskEl.parentElement);
    const taskIndex = getElementIndex(taskEl);
    console.log(taskIndex);
    tarefasPendentesEl.deleteRow(taskIndex);

    tarefasPendentes.splice(taskIndex, 1);
    console.log(tarefasPendentes);

    if (tarefasPendentes.length === 0) {
        nenhumaTarefaPendenteEl.classList.remove("hidden");
    }
}

function criarTarefa() {
    const nome = tarefaInput.value;
    const data = dataInput.value;
    console.log(nome, data)
    adicionarTarefa(nome, data);
}

submitInput.addEventListener("click", criarTarefa);
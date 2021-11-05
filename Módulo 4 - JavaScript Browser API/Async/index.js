const alerta = document.querySelector("#alert");
const tabelaUsuarios = document.querySelector("#tabela-usuarios");
const botaoCarregar = document.querySelector("#botao-carregar");

botaoCarregar.addEventListener("click", () => carregarDadosClickBotao())

const DADOS_USUARIOS = [
    { id: 1, name: "Amanda", email: "amanda@lovemail.com", company: { name: 'Lets Code'}},
    { id: 2, name: "Igor", email: "igor@bol.com", company: { name: 'Santander'}},
    { id: 3, name: "Marcos", email: "marcos1234@outlook.com", company: { name: 'Microsoft'}},
    { id: 4, name: "Lucas", email: "lucasflores@hotmail.com", company: { name: 'Google'}},
];


function buscarUsuariosNoBancoDeDados(segundos = 3) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!DADOS_USUARIOS) {
                reject("Não existem usuários para serem exibidos.")
            }
            resolve(DADOS_USUARIOS)
        }, segundos * 1000)
    })
}

buscarUsuariosNoBancoDeDados()
    .then((resposta) => console.log("Sucesso", resposta))
    .catch((erro) => console.log("Falha", erro));


async function consultaUsuariosAsync(segundos) {
    try {
        loading.textContent = "Carregando...";
        return await buscarUsuariosNoBancoDeDados(segundos);
    } catch (err) {
        console.log(err);
    }
}


consultaUsuariosAsync(segundos = 5)
    .then((resp) => console.log("primeiro", resp))
    .catch((err) => console.log(err));

consultaUsuariosAsync(segundos = 2)
    .then((resp) => console.log("segundo", resp))
    .catch((err) => console.log(err));


function novaLinha({id, name, email, company}) {
    return `
        <tr id="${id}">
            <td>${name}</td>
            <td>${email}</td>
            <td>${company.name}</td>
        </tr>
    `
}

function preencherTabela(usuarios) {
    if (!usuarios) {
        alerta.textContent = "Não existem registros a serem exibidos";
        return;
    } else {
        const listaDeUsuariosHTML = usuarios
            .map(usuario => novaLinha(usuario))
            .join('');
        tabelaUsuarios.innerHTML = listaDeUsuariosHTML
        alerta.textContent = `Foram carregados ${usuarios.length} registros.`
    }
}


function buscarUsuariosNoBancoDeDadosFetchApi() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(erro => erro);
}

const dados = buscarUsuariosNoBancoDeDadosFetchApi();

function carregarDadosClickBotao() {
    Promise.all([buscarUsuariosNoBancoDeDados(), buscarUsuariosNoBancoDeDadosFetchApi()])
        .then((values) => {
            console.log(values);
            const usuarios = [ ... values[0], ... values[1]]
            preencherTabela(usuarios);
        })
}
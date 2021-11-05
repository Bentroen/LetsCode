const info = document.querySelector("#info");


// Requisição para API de consulta à Tabela Fipe: https://deividfortuna.github.io/fipe/
// Modelo escolhido: Ford Focus 2.0 (2011)

const cod_marca = 22; // Ford
const cod_modelo = 798; // Focus 2.0 16V / 2.0 16V Flex 5p
const cod_ano = "2011-1" // 2011 Gasolina


async function fetchCarData(marca, modelo, ano) {
    const url_consulta = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`
    
    try {
        const resposta = await fetch(url_consulta);
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.log(error);
    }

    /*
    // ALTERNATIVA:
    return await fetch(url_consulta)
        .then(resposta => resposta.json())
        .then(resposta => console.log(resposta))
        .catch(erro => erro);
    */
}


const dados = fetchCarData(cod_marca, cod_modelo, cod_ano);

// Resolver promise
dados.then((data) => {
    console.log(data);
    const entries = Object.entries(data);
    console.log(entries);
    
    entries.forEach(([key, value]) => {
        console.log(key.toLowerCase());
        const elemento = document.querySelector(`#${key.toLowerCase()}`);
        
        if (elemento) {
            elemento.textContent = value;
        }
    })

    info.textContent = "✅ Consulta concluída!";

});

package br.com.letscode.repositorio;

import br.com.letscode.dto.ProdutoDTO;
import br.com.letscode.entidade.ProdutoEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ProdutoRepositorio {

    // Entidade é o que salvamos no banco de dados,
    // DTO é o que recebemos na transferência. Isso porque
    // nem todos os atributos salvos na base podem ser
    // mostrados para o usuário

    // DTO é o que vem na tela, entidade é o que será salvo no banco de dados

    // Repository = persistência no banco de dados
    //

    // -----------------------------------------------------------------
    // Num cenário real, essa lista é substituída por um banco de dados.
    // Caso mudássemos a implementação do banco de dados, só essa classe iria mudar
    private static List<ProdutoEntity> lista = new ArrayList<>();

    public ProdutoEntity salvar(ProdutoEntity produtoEntity) {

        String id = UUID.randomUUID().toString();
        produtoEntity.setId(id);

        lista.add(produtoEntity);

        // Boa prática retornar a entidade salva
        return produtoEntity;
    }

    public List<ProdutoEntity> obterTodos() {
        return lista;
    }

    public ProdutoEntity obter(String id) {
        // pulando implementação
        return null;
    }

}

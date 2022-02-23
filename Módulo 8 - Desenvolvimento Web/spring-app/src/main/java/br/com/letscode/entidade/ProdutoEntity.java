package br.com.letscode.entidade;

import br.com.letscode.dto.ProdutoDTO;
import lombok.Data;

@Data
public class ProdutoEntity {
    private String id;
    private String nome;
    private String descricao;
    private Double valor;

    public ProdutoEntity(ProdutoDTO produtoDTO) {
        this.nome = produtoDTO.getNome();
        this.descricao = produtoDTO.getDescricao();
        this.valor = produtoDTO.getValor();
    }
}

package br.com.letscode.dto;

import lombok.Data;
import lombok.Getter;

@Data
public class ProdutoDTO {
    // DTO = Data Transfer Object

    private String nome;
    private String descricao;
    private Double valor;


}

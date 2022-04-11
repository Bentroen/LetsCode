package br.com.letscode.distribuida.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class Produto {

    @NotNull(message = "Nome não pode ser nulo")
    private String nome;
    @NotEmpty
    private String descricao;
    private String valor;
}

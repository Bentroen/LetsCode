package br.com.letscode.distribuida.model;

import br.com.letscode.distribuida.NaoImpar;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@Builder
public class Produto {

    @NotNull(message = "Nome não pode ser nulo")
    private String nome;
    @NotEmpty
    private String descricao;
    private String valor;

    @NaoImpar
    private Integer qtd;
}

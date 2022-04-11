package br.com.letscode.pedidoapp.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class CadastrarPedidoDTO {
    private String produto;
    private BigDecimal valor;
    private String descricao;
    private String endereco;
}

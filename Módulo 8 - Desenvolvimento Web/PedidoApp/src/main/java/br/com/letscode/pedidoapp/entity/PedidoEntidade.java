package br.com.letscode.pedidoapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class PedidoEntidade {
    private Long id;
    private String produto;
    private BigDecimal valor;
    private LocalDate dataEntrega;
    private String descricao;

    public PedidoEntidade(Long id, String produto, BigDecimal valor, LocalDate dataEntrega, String descricao) {
        this.id = id;
        this.produto = produto;
        this.valor = valor;
        this.dataEntrega = dataEntrega;
        this.descricao = descricao;
    }
}

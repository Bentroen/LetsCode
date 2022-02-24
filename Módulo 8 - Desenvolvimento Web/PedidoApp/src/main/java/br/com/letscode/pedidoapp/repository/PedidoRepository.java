package br.com.letscode.pedidoapp.repository;

import br.com.letscode.pedidoapp.entity.PedidoEntidade;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

public class PedidoRepository {

    public List<PedidoEntidade> getAll() {
        return Arrays.asList(
            new PedidoEntidade(1L, "Celular", BigDecimal.valueOf(799.0), LocalDate.now(), "iPhone"),
            new PedidoEntidade(2L, "Computador", BigDecimal.valueOf(1299.0), LocalDate.now(), "Notebook"),
            new PedidoEntidade(3L, "Cadeira Gamer", BigDecimal.valueOf(399.0), LocalDate.now(), "Cougar")
        );
    }
}

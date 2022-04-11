package br.com.letscode.pedidoapp.controller;

import br.com.letscode.pedidoapp.dto.RetornoPedidoDTO;
import br.com.letscode.pedidoapp.service.PedidoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Controller
public class PedidoRestController {

    private final PedidoService pedidoService;

    public PedidoRestController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @RequestMapping("/teste")
    @ResponseBody
    public RetornoPedidoDTO getRetorno() {
        RetornoPedidoDTO dto = new RetornoPedidoDTO();
        dto.setProduto("Computador");
        dto.setDescricao("All-in-one");
        dto.setDataEntrega(LocalDate.now());
        dto.setValor(BigDecimal.valueOf(1399));

        return dto;
    }

    @RequestMapping("/testes")
    public List<RetornoPedidoDTO> getListaRetornoPedidoDTO() {
        return pedidoService.listarTodosOsPedidos();
    }

}

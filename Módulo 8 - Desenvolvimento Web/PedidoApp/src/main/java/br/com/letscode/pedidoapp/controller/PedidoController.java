package br.com.letscode.pedidoapp.controller;

import br.com.letscode.pedidoapp.entity.PedidoEntidade;
import br.com.letscode.pedidoapp.repository.PedidoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/pedidos")
public class PedidoController {

    @GetMapping("/listar")
    public String listar(Model model) {

        // Pegar todos os pedidos e repassar para o Model
        PedidoRepository repository = new PedidoRepository();
        List<PedidoEntidade> todosPedidos = repository.getAll();
        model.addAttribute("pedidos", todosPedidos);

        return "listar-pedidos";
    }

}

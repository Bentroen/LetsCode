package br.com.letscode.pedidoapp.service;

import br.com.letscode.pedidoapp.dto.CadastrarPedidoDTO;
import br.com.letscode.pedidoapp.dto.RetornoPedidoDTO;
import br.com.letscode.pedidoapp.entity.PedidoEntidade;
import br.com.letscode.pedidoapp.repository.PedidoRepository;
import org.springframework.objenesis.instantiator.perc.PercInstantiator;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class PedidoService {

    private PedidoRepository repository = new PedidoRepository();

    public void cadastrarPedido(CadastrarPedidoDTO cadastrarPedidoDTO) {
        PedidoEntidade entidade = new PedidoEntidade();
        entidade.setProduto(cadastrarPedidoDTO.getProduto());
        entidade.setDescricao(cadastrarPedidoDTO.getDescricao());
        entidade.setValor(cadastrarPedidoDTO.getProduto());

        LocalDate dataEntrega = calcularDataEntrega(cadastrarPedidoDTO.getEndereco());
        entidade.setDataEntrega(dataEntrega);

        repository.salvar(entidade);
    }

    public List<RetornoPedidoDTO> listarTodosOsPedidos() {
        List<PedidoEntidade> entidades = repository.getAll();

        List<RetornoPedidoDTO> listaRetorno = entidades.stream()
                .map(PedidoService::fromEntidadeToRetornoPedidoDTO)
                //.map(entidade -> fromEntidadeToRetornoPedidoDTO(entidade));
                .collect(Collectors.toList());

        return listaRetorno;
    }

    private LocalDate calcularDataEntrega(String estado) {
        // mock
        Map<String, Integer> frete = new HashMap<>();
        frete.put("SP", 12);
        frete.put("DF", 4);

        return LocalDate.now().plusDays(frete.get(estado))
    }

    private static RetornoPedidoDTO fromEntidadeToRetornoPedidoDTO(PedidoEntidade entidade) {
        RetornoPedidoDTO pedidoDTO = new RetornoPedidoDTO();
        pedidoDTO.setProduto(entidade.getProduto());
        pedidoDTO.setDataEntrega(entidade.getDataEntrega());
        pedidoDTO.setValor(entidade.getValor());
        return pedidoDTO;
    }

}

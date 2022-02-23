package br.com.letscode.controlador;

import br.com.letscode.dto.ProdutoDTO;
import br.com.letscode.entidade.ProdutoEntity;
import br.com.letscode.repositorio.ProdutoRepositorio;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/produtos")
public class ProdutoController {

    @GetMapping("/form")
    public String obterFormulario() {
        return "produto-form";
    }

    @PostMapping("/cadastrar-produto")
    public String cadastrarProduto(ProdutoDTO produtoDTO, Model model, RedirectAttributes redirectAttributes) {

        //// Método ruim!
        // Object nome = request.getAttribute("nome");
        // request.getAttribute("descricao");

        System.out.println("ATRIBUTO RECEBIDO: " + produtoDTO);

        // Criar repositório e converter DTO para entidade
        // (DTO = recebe os dados, Entity = é o que é persistido no banco de dados)
        ProdutoRepositorio repositorio = new ProdutoRepositorio();
        ProdutoEntity entity = new ProdutoEntity(produtoDTO);

        // Persistir entidade
        ProdutoEntity entidadeSalva = repositorio.salvar(entity);
        System.out.println("OBJETO SALVO: " + entidadeSalva.getId());

        //model.addAttribute("produtos", repositorio.obterTodos());

        // Repassar produtos obtidos para a página de listagem
        redirectAttributes.addFlashAttribute("produtos", repositorio.obterTodos());
        // addAttribute =  a View consome quantas vezes quiser
        // FlashAttributes = a View consome os atributos na hora e apaga eles

        // Redirecionar browser para a página de listagem
        RedirectView redirectView = new RedirectView("/produtos/listar", true);

        return "listarProdutos";
    }

}

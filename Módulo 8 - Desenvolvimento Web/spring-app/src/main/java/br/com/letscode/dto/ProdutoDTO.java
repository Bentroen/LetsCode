package br.com.letscode.dto;

import lombok.Data;
import lombok.Getter;

@Data
public class ProdutoDTO {
    // DTO = Data Transfer Object

    // Objeto transitório para transferir informações.
    // Objeto intermediário que contém o mínimo possível para transferir dados.

    // É a parte da aplicação que vai organizar os dados que serão repassados para o browser,
    // ou seja, que serão exibidos para o usuário. Assim, não precisamos exportar dados
    // sensíveis, que são apenas armazenados no banco de dados e não devem ser mostrados
    // para o usuário.

    // ex.: Entidade tem usuário e senha
    //      DTO só tem o usuário

    // ex.: Idade
    //      Você não armazena a idade no banco de dados, e sim a data de nascimento.
    //      A partir dela é possível calcular a idade, signo etc.

    private String nome;
    private String descricao;
    private Double valor;


}

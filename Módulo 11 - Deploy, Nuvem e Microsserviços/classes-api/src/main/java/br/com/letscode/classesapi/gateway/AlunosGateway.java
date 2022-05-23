package br.com.letscode.classesapi.gateway;

import br.com.letscode.classesapi.exceptions.AlunoNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

@Component
public class AlunosGateway {

    private final WebClient webClient;

    public AlunosGateway() {
        this.webClient = WebClient.builder().build();
    }

    public Mono<?> getAluno(Long alunoId) {

        // Fazer a request para o serviço de alunos
        // Fazer o mapeamento para o status, para validar se foi NotFound
        // Se for NotFound, queremos que pare
        // Senão, vamos converter o que chegar (a informação do aluno) para string

        return WebClient
                .builder()
                .baseUrl(String.format("http://alunos-app-instance:8080/aluno/%s", alunoId))
                .build()
                .get() // não chama diretamente, só especifica que quero um GET
                .retrieve() // pega todas as informações que passei até aqui e FAZ o request
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, erro ->
                    erro.getRawStatusCode() == 404 ? Mono.empty() : Mono.error(erro)
                );
                // Se tiver um erro desse tipo (WebClientResponseException), verificar
                // se é 404. Se sim, devolver o erro sem estourar a aplicação (é um
                // erro esperado). Senão, continuar com o fluxo do erro

    }
}

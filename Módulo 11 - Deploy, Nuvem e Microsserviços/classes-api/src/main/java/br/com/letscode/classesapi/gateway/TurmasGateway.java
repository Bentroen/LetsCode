package br.com.letscode.classesapi.gateway;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

@Component
public class TurmasGateway {

    private final WebClient webClient;

    public TurmasGateway() {
        this.webClient = WebClient.builder().build();
    }

    public Mono<?> getTurma(Long turmaId) {
        return WebClient
                .builder()
                .baseUrl(String.format("http://turmas-app-instance:8081/turma/%s", turmaId))
                .build()
                .get()
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, erro ->
                        erro.getRawStatusCode() == 404 ? Mono.empty() : Mono.error(erro)
                );
    }
}

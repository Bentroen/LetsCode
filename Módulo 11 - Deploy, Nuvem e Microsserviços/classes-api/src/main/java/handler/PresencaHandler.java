package handler;

import br.com.letscode.classesapi.domain.Presenca;
import br.com.letscode.classesapi.repository.PresencaRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.net.URI;

@Component
public class PresencaHandler {

    private final PresencaRepository presencaRepository;

    public PresencaHandler(PresencaRepository presencaRepository) {
        this.presencaRepository = presencaRepository;
    }

    public Mono<ServerResponse> adicionaPresenca(ServerRequest request) {

        return request.bodyToMono(Presenca.class)
                .filter(p -> p.getAlunoId() > 0)
                .flatMap(presencaRepository::save) // Passing by reference - same as [ presenca -> presencaRepository.save(presenca) ]
                .flatMap(presenca -> ServerResponse
                        .created(URI.create(String.format("presenca/%s", presenca.getId())))
                        .bodyValue(presenca))
                .switchIfEmpty(ServerResponse.unprocessableEntity().bodyValue("Aluno inválido!")) // If filtered...
//              .onErrorReturn(ServerResponse.unprocessableEntity().build().block()); // Ocorreu um erro ao processar o aluno
    }

    public Mono<ServerResponse> getPresencasByAluno(ServerRequest requeest) {

    }

}

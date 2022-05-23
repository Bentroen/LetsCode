package handler;

import br.com.letscode.classesapi.domain.Presenca;
import br.com.letscode.classesapi.gateway.AlunosGateway;
import br.com.letscode.classesapi.gateway.TurmasGateway;
import br.com.letscode.classesapi.repository.PresencaRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import service.PresencaService;

import java.net.URI;
import java.util.Objects;

@Component
public class PresencaHandler {

    private final PresencaRepository presencaRepository;
    private final PresencaService presencaService;

    public PresencaHandler(PresencaRepository presencaRepository, PresencaService presencaService) {
        this.presencaRepository = presencaRepository;
        this.presencaService = presencaService;
    }

    public Mono<ServerResponse> adicionaPresenca(ServerRequest request) {

        return request.bodyToMono(Presenca.class)
                // Busco o aluno que veio no request, e valido se ele existe ou não
                .flatMap(presencaService::verificaPresenca)
                .flatMap(presencaRepository::save) // Passing by reference - same as [ presenca -> presencaRepository.save(presenca) ]
                .flatMap(presenca -> ServerResponse
                        .created(URI.create(String.format("presenca/%s", presenca.getId())))
                        .bodyValue(presenca))
                .switchIfEmpty(ServerResponse.unprocessableEntity().bodyValue("Aluno ou turma inválidos! Por favor, verifique as informações"));
    }

    public Mono<ServerResponse> getPresencasByAluno(ServerRequest request) {
        return null;
        // return Mono.just(request.pathVariable("id"))
        //         .flatMap(id -> presencaRepository.
        //                 flatMap(presencas ->))
    }

}

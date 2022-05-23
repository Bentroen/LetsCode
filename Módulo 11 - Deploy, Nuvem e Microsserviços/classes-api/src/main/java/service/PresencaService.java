package service;

import br.com.letscode.classesapi.domain.Presenca;
import br.com.letscode.classesapi.gateway.AlunosGateway;
import br.com.letscode.classesapi.gateway.TurmasGateway;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
public class PresencaService {

    private final AlunosGateway alunosGateway;

    public PresencaService(AlunosGateway alunosGateway, TurmasGateway turmasGateway) {
        this.alunosGateway = alunosGateway;
        this.turmasGateway = turmasGateway;
    }

    private final TurmasGateway turmasGateway;

    public Mono<Presenca> verificaPresenca(Presenca p) {
        return Mono.just(p)
                .flatMap(presenca -> alunosGateway.getAluno(presenca.getAlunoId())
                        .filter(Objects::nonNull)
                        .map(aluno -> presenca)
                )
                .flatMap(presenca -> turmasGateway.getTurma(presenca.getTurmaId())
                        .filter(Objects::nonNull)
                        .map(turma -> presenca)
                );
    }
}

package br.com.letscode;

import io.reactivex.rxjava3.core.Observable;

public class Exemplo2 {

    public static void main(String[] args) {
        AlunoRequest request = AlunoRequest.builder()
                .nome("Bernardo")
                .sobrenome("Costa")
                .build();
        Observable.just(request)
                .doOnNext(System.out::println)
                .map(valor -> responseToEntity(valor))
                .subscribe(valor -> System.out.println(valor));

    }

    public static AlunoEntity responseToEntity(AlunoRequest aluno) {
        return AlunoEntity.builder()
                .nomeCompleto(aluno.getNome()
                        .concat(" ")
                        .concat(aluno.getSobrenome()))
                .build();
    }

}

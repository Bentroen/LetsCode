package br.com.letscode.Escola;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Comparator;

@Builder
public class Turma {

    @Getter @Setter private String nomeTurma;
    @Builder.Default @Getter private ArrayList<Aluno> alunos = new ArrayList<>();

    public boolean matricularAluno(Aluno aluno) {
        if (this.alunos.contains(aluno)) {
            System.out.printf(String.format("Erro ao adicionar aluno %s à turma %s: O aluno já está matriculado nessa turma", this.nomeTurma, aluno.getTituloENome()));
            return false;
        }
        this.alunos.add(aluno);
        aluno.adicionarTurma(this);
        return true;
    }

    public boolean cancelarMatriculaAluno(Aluno aluno) {
        if (!this.alunos.contains(aluno)) {
            System.out.printf(String.format("Erro ao adicionar aluno %s à turma %s: O aluno não está matriculado nessa turma", this.nomeTurma, aluno.getTituloENome()));
            return false;
        }
        this.alunos.remove(aluno);
        aluno.adicionarTurma(this);
        return true;
    }

    public ArrayList<Aluno> getAlunosEmOrdemAlfabetica() {
        ArrayList<Aluno> alunosEmOrdemAlfabetica = (ArrayList<Aluno>) this.alunos.clone();
        alunosEmOrdemAlfabetica.sort(Comparator.comparing(Aluno::getNomeCompleto));
        return alunosEmOrdemAlfabetica;
    }

    public int getNumAlunos() {
        return this.alunos.size();
    }

}

package br.com.letscode.Escola;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;

@Builder
public class Aluno implements Comparable<Aluno> {

    @Builder.Default String titulo = null;
    private String primeiroNome;
    private String sobrenome;
    @Getter private final ArrayList<Turma> turmasMatriculadas = new ArrayList();

    public int compareTo(Aluno other) {
        return this.getNomeCompleto().compareTo(other.getNomeCompleto());
    }

    public String getTituloENome() {
        String titulo = this.titulo;
        String nomeCompleto = this.getNomeCompleto();
        if (titulo != null && !titulo.isEmpty()) {
            return String.join(" ", this.titulo, nomeCompleto);
        } else {
            return nomeCompleto;
        }
    }

    public String getNomeCompleto() {
        return String.join(" ", this.primeiroNome, this.sobrenome);
    }

    public boolean adicionarTurma(Turma turma) {
        if (turmasMatriculadas.contains(turma)) {
            System.out.println("O aluno já está matriculado nessa turma");
            return false;
        }
        turmasMatriculadas.add(turma);
        return true;
    }

    public boolean removerTurma(Turma turma) {
        if (!turmasMatriculadas.contains(turma)) {
            System.out.println("O aluno não está matriculado nessa turma");
            return false;
        }
        turmasMatriculadas.remove(turma);
        return true;
    }

}

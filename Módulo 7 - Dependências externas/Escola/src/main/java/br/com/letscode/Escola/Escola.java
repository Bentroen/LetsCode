package br.com.letscode.Escola;

import java.util.*;

public class Escola {

    private static ArrayList<Aluno> alunosMatriculados = new ArrayList<>();
    private static ArrayList<Turma> turmas = new ArrayList<>();

    public static void main(String[] args) {
        popularTurmas();
        String relatorioAlunos = listarAlunosMatriculados();
        System.out.printf(relatorioAlunos);
    }

    public static void criarTurmas() {

    }

    public static void popularTurmas() {

        Turma turmaBD = Turma.builder()
                .nomeTurma("Turma Java")
                .build();

        Turma turmaJava = Turma.builder()
                .nomeTurma("Turma Banco de Dados")
                .build();

        String[] alunosJava = {
                "Alexandre Martins",
                "Vitor Hugo Lima",
                "Esther Rodrigues",
                "Lavínia Cunha",
                "Natália Gomes",
                "Yago Ramos",
                "Letícia Cunha",
                "Srta. Ana Júlia Ramos",
                "Pietra Martins",
                "Thomas Peixoto",
                "Thales Farias"
        };

        String[] alunosBD = {
                "Vitor Hugo Lima",
                "Esther Rodrigues",
                "Nathan Nascimento",
                "Lavínia Cunha",
                "Natália Gomes",
                "Dra. Lavínia Lopes",
                "Yago Ramos",
                "Letícia Cunha",
                "Luiz Miguel Azevedo",
                "Srta. Ana Júlia Ramos",
                "Thales Farias",
                "Dra. Alana Porto"
        };

        List<String> alunosJavaList = Arrays.asList(alunosJava);
        List<String> alunosBDList = Arrays.asList(alunosBD);

        // Adicionar todos os alunos a um set
        HashSet<String> alunos = new HashSet();
        alunos.addAll(Arrays.asList(alunosJava));
        alunos.addAll(Arrays.asList(alunosBD));

        // Adicionar alunos a cada turma
        for (String nome : alunos) {

            // Processar nome do aluno
            String[] nomes = nome.split(" ");
            String titulo = null;
            String primeiroNome, sobrenome;
            if (nomes[0].contains(".")) {
                titulo = nomes[0];
                primeiroNome = nomes[1];
            } else{
                titulo = null;
                primeiroNome = nomes[0];
            }
            sobrenome = nomes[nomes.length-1];

            // Criar objeto Aluno
            Aluno aluno = Aluno.builder()
                    .titulo(titulo)
                    .primeiroNome(primeiroNome)
                    .sobrenome(sobrenome)
                    .build();

            // Adicionar aluno às suas respectivas turmas
            if (alunosJavaList.contains(nome)) {
                turmaJava.matricularAluno(aluno);
            }
            if (alunosBDList.contains(nome)) {
                turmaBD.matricularAluno(aluno);
            }

            // Adicionar aluno à lista geral
            alunosMatriculados.add(aluno);
        }
    }

    public static String listarAlunosMatriculados() {
        StringBuilder relatorio = new StringBuilder();

        int numAlunos = alunosMatriculados.size();
        relatorio.append(String.format("Há %d alunos matriculados:\n\n", numAlunos));

        ArrayList<Aluno> alunosEmOrdemAlfabetica = (ArrayList<Aluno>) alunosMatriculados.clone();
        alunosEmOrdemAlfabetica.sort(Comparator.comparing(Aluno::getNomeCompleto));

        int i = 0;
        for (Aluno aluno : alunosEmOrdemAlfabetica) {
            i++;
            relatorio.append(String.format("%d. %s\n", i, aluno.getNomeCompleto()));
            for (Turma turma : aluno.getTurmasMatriculadas()) {
                relatorio.append("\t└ " + turma.getNomeTurma() + "\n");
            }
        }

        String relatorioString = relatorio.toString();
        return relatorioString;
    }

    public static String listarTurmas() {
        return "";
    }

}

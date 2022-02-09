package br.com.letscode.Escola;

import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class Relatorio {

    public static void gerarRelatorio(String caminho, String conteudo) {
        try {
            PrintWriter out = new PrintWriter(caminho);
            out.println(conteudo);
            out.close();
        } catch (FileNotFoundException e) {
            System.out.println(String.format("O arquivo '%s' não pôde ser gerado. Abortando", caminho));
            return;
        }

        // Mostrar saída do relatório no console
        System.out.println(conteudo);
    }

}

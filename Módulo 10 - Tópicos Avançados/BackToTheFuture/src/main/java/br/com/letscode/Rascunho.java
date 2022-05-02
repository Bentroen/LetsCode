package br.com.letscode;

import java.time.Duration;
import java.time.ZonedDateTime;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Rascunho {

    private static final ExecutorService executorService = Executors.newFixedThreadPool(3);

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        System.out.println(ZonedDateTime.now() + ": Iniciando processamento");
        GerarNumero gerarNumero = new GerarNumero();
        ZonedDateTime time = ZonedDateTime.now();

        Future<Integer> future = executorService.submit(gerarNumero);

        while (!future.isDone()) {
            System.out.println(ZonedDateTime.now() + ": Em processamento");
            Thread.sleep(10);

            if (time.plus(Duration.ofSeconds(2)).isBefore(ZonedDateTime.now())) {
                future.cancel(true);
                System.out.println(ZonedDateTime.now() + ": Timeout de 2s");
            }
        }

        System.out.println(ZonedDateTime.now() + ": Processamento concluído");

        if (!future.isCancelled()) {
            System.out.println("Gerado número " + future.get());
        }

        executorService.shutdown();

    }

}

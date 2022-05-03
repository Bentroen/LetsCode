package br.com.letscode;

import java.time.Duration;
import java.time.ZonedDateTime;
import java.util.concurrent.*;

public class Rascunho {

    private static final ExecutorService executorService = Executors.newFixedThreadPool(3);

    public static void main(String[] args) {
        System.out.println();

        try {
            GerarNumeroAleatorio();
        } catch (CancellationException e) {
            System.out.println(e);
        } catch (InterruptedException e) {
            System.out.println(e);
        } catch (ExecutionException e) {
            System.out.println(e);
        } finally {
            executorService.shutdown();
        }
    }

    public static void GerarNumeroAleatorio() throws ExecutionException, InterruptedException {
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

    }

}

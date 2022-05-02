package br.com.letscode;

import java.util.Random;
import java.util.concurrent.Callable;

public class GerarNumero implements Callable<Integer> {

    @Override
    public Integer call() throws Exception {
        Random aleatorio = new Random();
        Thread.sleep(1500);  // simular operação longa
        return aleatorio.nextInt();
    }

}

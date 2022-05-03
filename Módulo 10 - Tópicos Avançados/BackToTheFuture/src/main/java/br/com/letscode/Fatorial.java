package br.com.letscode;

import java.math.BigInteger;
import java.util.concurrent.Callable;

public class Fatorial implements Callable<BigInteger> {

    private final int numero;

    public Fatorial(int numero) {
        this.numero = numero;
    }

    @Override
    public BigInteger call() throws Exception {
        return calculaFatorial(numero);
    }

    private BigInteger calculaFatorial(int numero) {
        BigInteger calculado = new BigInteger(String.valueOf(1));
        while (numero > 0) {
            calculado = calculado.multiply(new BigInteger(String.valueOf(numero)));
            numero--;
        }
        return calculado;
    }
}

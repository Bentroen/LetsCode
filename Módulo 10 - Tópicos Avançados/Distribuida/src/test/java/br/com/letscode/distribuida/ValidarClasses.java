package java.br.com.letscode.distribuida;

import br.com.letscode.distribuida.model.Produto;
import org.junit.jupiter.api.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ValidarClasses {

    @Test
    public void validaPacotes() {
        Produto produto = new Produto();

        Class<?> produtoClass = produto.getClass();

        for (Annotation annotation: produtoClass.getAnnotations()) {
            System.out.println(annotation);
        }

        for (Method method: produtoClass.getMethods()) {
            for (Annotation annotation: method.getAnnotations()) {
                System.out.println(method.getAnnotations());
            }
        }

        for (Field field: produtoClass.getDeclaredFields()) {
            for (Annotation annotation: field.getAnnotations()) {
                System.out.println(annotation);
            }
        }

        for (Field atributos: produtoClass.getDeclaredFields()) {
            System.out.println(atributos.getName());
        }

        //

        Produto produto2 = Produto.builder()
                .nome("Camiseta")
                .qtd(1)
                .valor("29,90")
                .build();

    }


}

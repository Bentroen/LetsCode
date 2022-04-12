package br.com.letscode.distribuida;

import br.com.letscode.distribuida.model.Produto;
import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Set;

public class ValidarClasses {

    final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    public void validaPacotes() {

        /*
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

        */

    }

    @Test
    public void validaAnnotationNaoImpar() {

        Produto produto2 = Produto.builder()
                .nome("Camiseta")
                .qtd(1)
                .valor("29,90")
                .build();

        Set<ConstraintViolation<Produto>> violations = validator.validate(produto2);
        System.out.println(violations.isEmpty());
        Assert.isTrue(violations.isEmpty(), "A quantidade não deve ser ímpar");

    }
}

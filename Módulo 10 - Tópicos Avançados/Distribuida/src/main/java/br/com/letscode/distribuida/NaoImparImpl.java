package br.com.letscode.distribuida;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class NaoImparImpl implements ConstraintValidator<NaoImpar, Integer> {

    @Override
    public void initialize(NaoImpar constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {
        return value % 2 == 0;
    }
}

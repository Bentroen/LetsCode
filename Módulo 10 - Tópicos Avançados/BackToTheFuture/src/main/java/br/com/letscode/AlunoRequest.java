package br.com.letscode;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Builder
@Getter
@Data
public class AlunoRequest {

    public String nome;
    public String sobrenome;

}

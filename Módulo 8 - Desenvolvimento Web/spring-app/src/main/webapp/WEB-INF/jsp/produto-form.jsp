<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de produtos</title>
</head>
<body>
<fieldset> <legend>Formulário de cadastro de produtos</legend>
    <form action="/app/produtos/cadastrar-produto" method="post">
        <input type="hidden" name="id" value="${produto.id}"/>
        <label>Nome</label> <input type="nome" name="nome" value="${produto.nome}"/>
        <label>Descrição</label> <input type="descricao" name="descricao" value="${produto.descricao}"/>
        <label>Valor</label> <input type="number" name="valor" value="${produto.valor}"/>
        <button>Cadastrar</button>
    </form>
</fieldset>
</body>
</html>
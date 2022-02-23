<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Calendar" %>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lista de pessoas</title>
</head>
<body>
<h2> <fmt:formatDate pattern="dd/MM/yyyy" value="<%= Calendar.getInstance().getTime() %>"/></h2>

<table width="500" border="1px">
    <tr>
        <th>NOME</th>
        <th>DESCRIÇAO</th>
        <th>VALOR</th>
        <th colspan="2">ACAO</th>
    </tr>
    <c:forEach var="produto" items="${ produtos }">
        <tr>
            <td> <c:out value="${produto.nome}"/> </td>
            <td> <c:out value="${ produto.descricao }"/> </td>
            <td> <c:out value="${produto.valor}"/> </td>
            <td><a href="/produto-app/controladora?acao=remover-produtos&id=${produto.id}">Deletar</a></td>
            <td><a href="/produto-app/controladora?acao=alterar-produtos&id=${produto.id}">Alterar</a></td>
        </tr>
    </c:forEach>
</table>
<button onclick="window.location.href='/produto-app/controladora?acao=produto-form'">
    CADASTRAR NOVO
</button>
</body>
</html>
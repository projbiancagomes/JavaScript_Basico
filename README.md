# JavaScript_Basico
## Aula declaração variáveis:
 https://projbiancagomes.github.io/JavaScript_Basico/Declaracaodevariaveis/Aula1.html

## Aula funções:
 https://projbiancagomes.github.io/JavaScript_Basico/funcoesnoJavaScript/funcoes

## Fuções no Forms:
 https://projbiancagomes.github.io/JavaScript_Basico/funcao/aula03.html
 
## Atividade IMC:
https://projbiancagomes.github.io/JavaScript_Basico/Atividade_IMC/imc.html

## Tabuada:
https://projbiancagomes.github.io/JavaScript_Basico/Tabuada/index.html

## Orientado ao objeto sem laço:
https://projbiancagomes.github.io/JavaScript_Basico/orientadoobjeto/index.html

## Orientado ao objeto com laço de repetição:
https://projbiancagomes.github.io/JavaScript_Basico/orientacaoobjetocomlaco/index.html

## Troca imagem:
https://projbiancagomes.github.io/JavaScript_Basico/trocaimagens/index.html



```html
<!DOCTYPE html>
<html>

<head>
    <title>Formulário</title>
    <script>
        function validarFormulario() {
            var nome = document.forms["meuFormulario"]["nome"].value;
            var email = document.forms["meuFormulario"]["email"].value;
            var dataNascimento = document.forms["meuFormulario"]["dataNascimento"].value;
            var telefone = document.forms["meuFormulario"]["telefone"].value;
            var cpf = document.forms["meuFormulario"]["cpf"].value;

            if (nome == "") {
                alert("Por favor, preencha o campo Nome");
                return false;
            }
            
            if (email == "") {
                alert("Por favor, preencha o campo Email");
                return false;
            }
            
            if (dataNascimento == "") {
                alert("Por favor, preencha o campo Data de Nascimento");
                return false;
            }
            
            if (telefone == "") {
                alert("Por favor, preencha o campo Telefone");
                return false;
            }

            if (cpf == "") {
                alert("Por favor, preencha o campo CPF");
                return false;
            }

            return true;
        }
    </script>
</head>

<body>
    <form name="meuFormulario" onsubmit="return validarFormulario()">
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome"><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        
        <label for="dataNascimento">Data de Nascimento:</label><br>
        <input type="date" id="dataNascimento" name="dataNascimento"><br>
        
        <label for="telefone">Telefone:</label><br>
        <input type="text" id="telefone" name="telefone"><br>
        
        <label for="cpf">CPF:</label><br>
        <input type="text" id="cpf" name="cpf"><br><br>
        
        <input type="submit" value="Enviar">
    </form>
</body>

</html>

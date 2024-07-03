## Comandos

* Comando para rodar o React:
````
    npm run dev
````

* Comando para instalar o Axios:
````
    npm i axios 
````

## Java

### Detalhes

**Versão do Java: _21_**

#### Bibliotecas utilizadas:

1. ***Spring Data JPA***
2. ***Spring Web***
3. ***Spring Boot DevTools***
4. ***Lombok***
5. ***Validation***
6. ***MySQL Driver***

### End Points

**Cadastrar**

````
    http://localhost:8080/api/alunos/cadastrar
````
* Body 
````
    {
        "nome": "Marcos Felipe",
        "serie": "9º E",
        "sexo": "M" 
    }
````

**Alterar**

````
    http://localhost:8080/api/alunos/alterar/3
````
* Body
````
    {
        "id": 1,
        "nome": "Ana Beatriz",
        "serie": "9º A",
        "sexo": "F" 
    }
````

**Listar Todos**

````
    http://localhost:8080/api/alunos/todos
````

**Listar por Id**

````
    http://localhost:8080/api/alunos/aluno/1
````

**Remover** 

````
    http://localhost:8080/api/alunos/remover/2
````

## React

### Biblioteca utilizada

**Axios: v*1.7.2***
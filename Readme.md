## Comandos

* Comando para rodar o React:
````
    npm run dev
````

* Comando para instalar o Axios:
````
    npm i axios 
````

## Java <img src="https://img.shields.io/badge/java-%23FF6600.svg?&style=for-the-badge" />

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

<img src="https://img.shields.io/badge/POST-298D46?style=for-the-badge" /> Cadastrar  

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

<img src="https://img.shields.io/badge/put-FCFF3A?style=for-the-badge" /> Alterar

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

<img src="https://img.shields.io/badge/GET-3217EA?style=for-the-badge" /> Listar Todos

````
    http://localhost:8080/api/alunos/todos
````

<img src="https://img.shields.io/badge/GET-3217EA?style=for-the-badge" /> Listar por Id

````
    http://localhost:8080/api/alunos/aluno/1
````

<img src="https://img.shields.io/badge/DELETE-FF0000?style=for-the-badge" /> Remover 

````
    http://localhost:8080/api/alunos/remover/2
````

## React <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

### Biblioteca utilizada

**Axios: v*1.7.2***
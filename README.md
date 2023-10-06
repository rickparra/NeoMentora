![logo.png](doc%2Flogo.png)<br>
![Licença](https://img.shields.io/badge/license-MIT-green)
![Badge em Desenvolvimento](https://img.shields.io/badge/release%20date-out/05-yellow)
![Maven Version](https://img.shields.io/badge/maven-4.0.0-blue)
![Java Version](https://img.shields.io/badge/java-17-blue)

# <h1 align="center">NeoMentora</h1>

A NeoMentora é uma plataforma online inovadora que tem como objetivo unir pequenos empreendedores, mentores experientes
e investidores. Nossa missão é capacitar empreendedores iniciantes, ajudando-os a superar desafios, expandir seus
negócios e contribuir para o desenvolvimento econômico local. Nossa plataforma oferece uma experiência completa e
personalizada, desde o registro até a avaliação das sessões de mentoria.

## Acesso ao projeto

Você pode [acessar o código fonte do projeto inicial](https://github.com/rickparra/NeoMentora)
ou [baixá-lo](https://github.com/rickparra/NeoMentora/archive/refs/heads/main.zip).

## Execução do Projeto

Após baixar o projeto, você pode abrir com a IDE de preferência e configurar as variáveis de ambiente para acessar o
banco de dados.

-- Executando o projeto do backend
1. Fazer o [download](https://github.com/Luzeraaa/postech/archive/refs/heads/main.zip);
2. Instalar Docker Desktop (Caso esteja em ambiente Windowns instalar WSL);
2. Abrir com IDE de preferência;
3. Executar via terminal:
    * `docker-compose up`
    * Certifique-se de executar dentro do diretório do projeto "neomentora_be" onde esta localizado o arquivo docker
      compose.
4. Configurar as varíaveis de ambiente para acessar o banco de dados:
    * _DATASOURCE_PASSWORD=fiap_
    * _DATASOURCE_USER=fiap_
5. Executar o projeto.

-- Executando o projeto do frontend

1. entra na pasta "neomentora_fe"
2. executa o comando "npm install"
3. executa o comando "npm run start-dev"
4. Abra o navegador com o link "http://localhost:5173/"

## Acesso ao Banco de Dados

A persistência de dados será realizado através do banco de dados MYSQL. Este banco irá rodar em container via
Dokcer.

* [docker-compose.yml](watchwatt/docker-compose.yml)

## Tecnologias utilizadas

- Java 17 (Versão atualizada e estável da linguagem Java)
- Gradle (Ferramenta amplamente adotada para gerenciamento de dependências)
- Spring: Boot, Security, MVC, Data JPA, Web (Frameworks populares para desenvolvimento de aplicativos Java)
- Hibernate (Framework de mapeamento objeto-relacional para acesso a dados)
- JPA (Java Persistence API) (Especificação padrão para persistência de dados em Java)
- Lombok (Biblioteca para reduzir a verbosidade do código e automatizar tarefas comuns)
- Jakarta Bean Validation (Especificação para validação de dados em Java)
- Docker
- MYSQL
- React
- Typescript


## Documentação Técnica

-- Exite a coleção do postman no diretorio doc, utilize o importe da ferramenta para importar a coleção.

-- cadastrar o mentor
```
curl --location 'localhost:8080/neomentora/user/mentor' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "fulano de tal",
    "email": "fulano@gmail.com4",
    "ddd": 11,
    "phone": 123212321,
    "specialty": "FINANCE",
    "photo_url": "https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg"
}'

```
-- Cadastrar o investidor
````
curl --location 'localhost:8080/neomentora/user/investor' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "fulano de tal",
    "email": "fulano@gmail.com",
    "ddd": 11,
    "phone": 123212321,
    "areas_of_interest": "fincanceiro",
    "amount_available_for_investment": 100
}'
````

-- Cadastrar o pequeno negocio
````
curl --location 'localhost:8080/neomentora/user/smallBusiness' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "fulano de tal",
    "email": "fulano@gmail.com",
    "ddd": 11,
    "phone": 123212321,
    "type_of_document": "CPF",
    "document": "12345678901",
    "activity_sector": "setor de atividade",
    "problem_or_challenge": "meu problema é ter problema",
    "photo_url": "https://sm.ign.com/ign_br/screenshot/default/imagem-2023-09-04-171030002_zt57.jpg"
}'

````
-- consultar o mentor pelo id
````
curl --location 'localhost:8080/neomentora/user/mentor?id=1'

````
-- Consultar o investidor pelo id
````
curl --location 'localhost:8080/neomentora/user/investor?id=2'
````
-- Consultar o pequeno negocio pelo id
````
curl --location 'localhost:8080/neomentora/user/smallBusiness?id=2'
````
-- Obter todos os pequenos negocios
````
curl --location 'localhost:8080/neomentora/user/smallbusiness/all'
````
-- Obter todos os mentores
````
curl --location 'localhost:8080/neomentora/user/mentor/all'
````
````
curl --location 'localhost:8080/neomentora/user/investor/all'
````
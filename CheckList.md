# Checklist para Adicionar um Evento e Realizar uma Requisição a uma API

## Passos para Adicionar um Evento
1. [ ] Selecionar o elemento do formulário.
2. [ ] Adicionar o evento ao formulário usando `elemento.addEventListener('evento', callback)`.

## Passos para Realizar uma Requisição à API
1. [ ] Selecionar o campo de input com o nome "pagina".
2. [ ] Capturar o valor inserido no campo de input como a variável `pagina`.
3. [ ] Configurar os detalhes da requisição:
    - [ ] Método: GET
    - [ ] URL: `https://reqres.in/api/users?page=valor`
    - [ ] Parâmetros de consulta (query):
        - [ ] `page`: número da página
    - [ ] Corpo (Body): Nenhum
4. [ ] Configurar o tratamento da resposta da API:
    - [ ] Local da resposta: BODY
    - [ ] Tipo da resposta: JSON
    - [ ] Estrutura da resposta:
        ```
        {
          "page": página atual,
          "per_page": quantidade de itens por página,
          "total": quantidade total de itens,
          "total_pages": quantidade total de páginas,
          "data": [
            {
              "id": id do usuário,
              "email": email do usuário,
              "first_name": primeiro nome do usuário,
              "last_name": segundo nome do usuário,
              "avatar": URL do avatar do usuário
            },
            // ...
          ]
        }
        ```

## Boilerplate para Requisição à API usando Axios
1. [ ] Incluir o script do Axios no HTML.
2. [ ] Usar a função `axios.get(url)` para realizar a requisição à API.
3. [ ] Tratar o resultado da requisição:
    - [ ] Acessar os dados da resposta usando `response.data`.
    - [ ] Definir valores máximos para o campo de input baseados no número total de páginas.

## Atualização da Página com Dados da Resposta
1. [ ] Selecionar o elemento `main` onde os dados serão exibidos.
2. [ ] Construir a string HTML com os dados da resposta:
    - [ ] Exibir quantidade de recados por página.
    - [ ] Exibir total de recados.
    - [ ] Exibir página atual.
    - [ ] Exibir total de páginas.
    - [ ] Criar uma lista de recados com os detalhes de cada usuário.
3. [ ] Atualizar o conteúdo do elemento `main` com o HTML construído.

## Tratamento de Erros
1. [ ] Implementar um tratamento de erro usando `.catch()` após a requisição com Axios.
2. [ ] Exibir uma mensagem de erro em caso de falha na requisição.

---

**Observações:**
- Certifique-se de incluir o script do Axios no HTML antes de executar o código.
- Os comentários no código original fornecem diretrizes adicionais para cada etapa.

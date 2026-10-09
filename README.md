# Consulta de CEP e Cálculo de Frete

Aplicação desenvolvida durante a disciplina de Microsserviços e Sistemas Distribuídos da pós-graduação em Desenvolvimento Web.

O projeto consulta os dados de um endereço a partir de um CEP e calcula o valor do frete com base em regras de negócio internas.

## Arquitetura

A aplicação utiliza dois serviços principais:

- **Frontend:** interface web responsável por receber o CEP e exibir os resultados.
- **API de frete:** serviço interno responsável por aplicar as regras de negócio.
- **ViaCEP:** serviço externo utilizado para consultar os dados do endereço.

Fluxo da aplicação:

1. O usuário informa um CEP.
2. O frontend consulta a API ViaCEP.
3. Os dados do endereço são exibidos.
4. O frontend envia a cidade e o bairro para a API interna.
5. A API calcula o frete e retorna o resultado.

## Regras de negócio

- Entregas são realizadas somente em Porto Alegre.
- Os bairros `Sarandi`, `Rubem Berta`, `Jardim Lindóia` e `Passo das Pedras` possuem frete grátis.
- Para os demais bairros de Porto Alegre, o frete custa `R$ 20,00`.
- Para outras cidades, a aplicação informa que não há entrega disponível.

## Tecnologias utilizadas

- HTML
- JavaScript
- Node.js
- Express
- API ViaCEP
- Fetch API
- CORS
- JSON

## Executar o projeto

1. Acessar a pasta da API e instalar as dependências no Terminal:
```text
cd frete_api
npm install
```
2. Iniciar a API de frete:
```text
node index.js
```
A API será executada em:
```text
http://localhost:3001
```
3. Executar o frontend:
- Abra o arquivo `cep_app/public/index.html` no navegador.

- Pode ser usada também a extensão `Live Server` do VS Code para executar o frontend.

<img width="589" height="353" alt="image" src="https://github.com/user-attachments/assets/911e739b-f216-4da4-8c03-30181b443a3a" />


  

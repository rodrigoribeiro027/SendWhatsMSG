# 📱 WhatsApp Message Sender
Um simples e eficaz script em TypeScript para enviar mensagens de texto via API do WhatsApp! 🚀

## 📋 Pré-requisitos
Para utilizar este script, você precisa de:

### Atenção no site da whapi

Faça login no site do whapi com uma conta WhatsApp Bussiness..

- [Whapi](https://whapi.cloud/docs) para mais detalhes.


- **Node.js** instalado no sistema. [Instale aqui](https://nodejs.org/)
- **Token de API do WhatsApp** para autenticação.

## 🛠️ Configuração
Clone este repositório `SendWhatsMSG`.

#### Navegue até o diretório do projeto e instale-o com `npm install`.


## 🚀 Como Usar
Abra o arquivo whatsapp.ts e substitua SEU_TOKEN_AQUI, NUMERO_DO_DESTINATARIO, e SUA_MENSAGEM_AQUI com as informações necessárias:

typescript

```bash

const apiToken = 'SEU_TOKEN_AQUI';  // Coloque seu token aqui
const numero = 'NUMERO_DO_DESTINATARIO';  // Exemplo: '5511999999999'
const mensagem = 'SUA_MENSAGEM_AQUI';  // Mensagem a ser enviada

```

## Compile o arquivo TypeScript para JavaScript:

```bash
npx tsc whatsapp-service.ts

```

## Execute o script compilado:

```bash
node whatsapp-service.js
```

## 🧩 Estrutura do Código:

Variáveis de Configuração: Defina o número do destinatário e a mensagem no final do arquivo whatsapp.ts.

Função sendMessage: Essa função realiza uma requisição POST para a API do WhatsApp, utilizando o token de autenticação.

Tratamento de Erros: Em caso de erro, uma mensagem é exibida no console.

## 🧪 Teste e Debug

Para testar e verificar o envio da mensagem:

- Certifique-se de que o número está no formato internacional (`55` para Brasil, seguido do DDD e do número).
- Confira se o token de autenticação está correto.
- Caso encontre algum erro, verifique as mensagens no console.

## 📚 Recursos Adicionais

- [Documentação do WhatsApp API](https://developers.facebook.com/docs/whatsapp) para mais detalhes.
- [Axios](https://axios-http.com/) para entender como realizar requisições HTTP no Node.js.
- [Documentação do whapi API](https://whapi.cloud/docs) para mais detalhes.


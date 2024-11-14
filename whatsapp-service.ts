import axios from 'axios';

const apiUrl = 'https://gate.whapi.cloud/messages/text';
const apiToken = 'SEU_TOKEN_AQUI';  

async function sendMessage(to: string, message: string): Promise<void> {
    try {
        const response = await axios.post(
            apiUrl,
            {
                to,
                body: message,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiToken}`,
                },
            }
        );
        console.log('WhatsApp mensagem enviada com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao enviar mensagem via WhatsApp:', error);
    }
}

const numero = 'NUMERO_DO_DESTINATARIO';  
const mensagem = 'SUA_MENSAGEM_AQUI';

sendMessage(numero, mensagem);

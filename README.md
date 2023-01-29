# treinar-ia
Convertar chats em txt do whatsapp para jsonl, para treinar sua inteligencia artificial GPT!


### O que precisa:

- NodeJS
- Exportação em txt de um chat do whatsapp!

### Uso

- Exporte um chat do whatsapp, sem salvar as midias
- Abra o txt e apague mensagens desse tipo: 

[29/01/2023 04:04:47] isa: ‎As mensagens e as chamadas são protegidas com a criptografia de ponta a ponta e ficam somente entre você e os participantes desta conversa. Nem mesmo o WhatsApp pode ler ou ouvi-las.

- Salve esse txt no arquivo chat.txt
- Rode usando: node convert.js

### Treinando a IA GPT:

- Apos rodar o convert.js, você ira obter o arquivo result.jsonl;
- Faça o upload desse arquivo para esse colab: https://colab.research.google.com/drive/17heBVy6xlGcx2JfycoKUBeZ8SJ1Wot2Q?usp=sharing
- Execute os comandos que estao na colab, em ordem, se tudo correr bem, a openai ira estar treinando a ia, com base no chat fornecido!
- NÃO ESQUEÇA DE FORNECER A SUA APIKEY DA OPEN AI. (SUBSTITUA O "SuaKeyOpenAi" PELA SUA KEY).


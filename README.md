# treinar-ia
Converta chats em txt do whatsapp para jsonl, para treinar sua inteligencia artificial GPT!


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

### O QUE FAZER DEPOIS:

- Após treinar sua IA, você recebera um id semelhante a esse: "davinci:ft-personal-2023-01-29-07-4***"
- Você pode adicionar ao codigo da sua ia dessas forma:

 response = openai.Completion.create(
        engine="davinci:ft-personal-2023-01-29-07-4***",
        prompt="PROMPT_AQUI,
        max_tokens=150,
        temperature=0.9,
        top_p=1,
        frequency_penalty=1,
        presence_penalty=0.6,
    )
    



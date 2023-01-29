const fs = require('fs');

var seunome = "Higor Oliveira" //o nome que esta no seu whats
var nomeuser = "isa" //nome da pessoa que vc tava conversando

// path do arquivo de texto
const filePath = './chat.txt';

// ler o arquivo de texto
fs.readFile(filePath, 'utf8',async ( err, data) => {
    if (err) throw err;

    function removeDates(text) {
        return text.replace(/\[\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}\]|\[|\]/g, "");
      }

     a = await removeDates(data)
     json = []
     array2 = []
     user1 = []
     user2 = []
     const lines = a.split('\n')
     for (filtro of lines) {
rpl = filtro.replace("\r", "")
array2.push(rpl)
     }


for (cod of array2) {
    if (cod.includes(seunome)) {
     user1.push(cod.replace(`${seunome}: `, ""))
    } else {
        user2.push(cod.replace(`${nomeuser}: `, ""))
    }
}

const result = user2.map((prompt, index) => {
    return {prompt, completion: user1[index]};
  });
  console.log(result);
  function writeToTxtFile(textToWrite){
    var fs = require('fs');

    fs.writeFile('result.jsonl', textToWrite, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
  function convertArrayToJSONL(array) {
    let jsonl = "";
    for (let i = 0; i < array.length; i++) {
      jsonl += JSON.stringify(array[i]) + "\n";
    }
    return jsonl;
  }

 jsonll = await convertArrayToJSONL(result)
 console.log(jsonll)
 await writeToTxtFile(jsonll)

});


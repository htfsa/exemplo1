const prompt = require('prompt-sync')();

function addTolist(list){
    const position = list.length;
    const item = prompt('digite o novo item da lista:');
    list[position] = item;
    console.log(`\n${item} foi adicionado na lista!`)

}
module.exports = addTolist

const prompt = require('prompt-sync')()
const showlist = require('./show');

function removeFromlist(list){
    showlist(list);
    
    const positionText = prompt('qual elemento você deixa')
    const position = Number(positionText) - 1
    list.splice(position,1);


}
module.exports = removeFromlist
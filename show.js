function showlist(list){
    console.log('--- listagem completa dos itens---')
    for (let i = 0 ; i < list.length; i++){
        console.log(`${i+1} - ${list[i]}`);
    }
    console.log();
}

module.exports = showlist;

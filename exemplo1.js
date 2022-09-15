const prompt = require('prompt-sync')(); 
const showMenu = require('./menu');
const addTolist = require('./add');
const showlist = require('./show');
const removeFromlist = require('./remove');


const list = [];
let option = 0;

do {
    console.clear();
    showMenu();
    option = Number(prompt('>> '));
    switch(option) {

        case 1 :
        addTolist(list);
        break;
        
        case 2:
            showlist(list);
        break;

        case 3:
            removeFromlist(list);
        break;
        
        case 4:
            console.log('finalizando aplicação')
        break;
        
        default:console.log('opção invalida')

    }
    prompt('pressione ente para continuar ...');
} while (option !=4);// !=





let menu = Array(4,1)
    menu = [['Item', 'Preço R$'],['café', 3.00], ['leite', 2.00],['chá', 1.50]];
console.log(menu,'Qual seu pedido?')
let pedido = prompt();
    pedido = pedido.toString();
let valor = 0
switch(pedido){
    case 'café':
        valor =+ 3;
        console.log('Você escolheu café, isso sairá R$', valor.toPrecision(2));
    break
    case 'leite':
        valor += 2;
        console.log('Você escolheu leite, isso sairá R$', valor.toPrecision(2));
    break
    case 'chá':
        valor += 1.5;
        console.log('Você escolheu chá, isso sairá R$', valor.toPrecision(2));
    break
    default: 
        console.log('Você deve escolher entre ', menu)
}

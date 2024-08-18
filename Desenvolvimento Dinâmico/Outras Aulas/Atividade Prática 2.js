let menu = Array(4,1)
    menu = [['Item', 'Preço R$'],['café', 3.0.toPrecision(3)], ['leite', 2.0.toPrecision(3)],['chá', 1.5.toPrecision(3)]];
console.log(menu,'Qual seu pedido?')
let pedido = prompt(); //caso não esteja sendo executado em um navegador, favor substituir a opção do pedido aqui.
pedido = pedido.toString(); //se o pedido foi selecionado no código, essa linha deve ser apagada.
let valor = 0
switch(pedido){
    case 'café':
        valor =+ 3;
        console.log('Você escolheu café, isso sairá R$', valor.toPrecision(3));
    break
    case 'leite':
        valor += 2;
        console.log('Você escolheu leite, isso sairá R$', valor.toPrecision(3));
    break
    case 'chá':
        valor += 1.5;
        console.log('Você escolheu chá, isso sairá R$', valor.toPrecision(3));
    break
    default: 
        console.log('Você deve escolher entre ', menu);
}
console.log('Muito Obrigado, Volte Sempre!');
    /* Não entendi bem como solicitar respostas no console ainda,
    estou mais familiarizado com java e C#, o js ainda é novo para mim. 
    Se tiver desconfigurado, favor ver em: */
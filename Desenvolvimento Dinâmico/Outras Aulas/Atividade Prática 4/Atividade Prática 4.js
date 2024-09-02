class Funcionario{
    constructor(nome, sobrenome, idade, cargo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomecompleto = nome + " " +sobrenome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){
        console.log('Olá, me chamo', this.nomecompleto);
        console.log('Eu sou', this.cargo);
    }
    trabalhar(){
        //Fazer algo dentro da sua função.
    }
}

class Gerente extends Funcionario{
    constructor(nome, sobrenome, idade, departamento){
        super(nome, sobrenome, idade);
        this.cargo = "Gerente";
        this.departamento = departamento;
    }
    gerenciar(){
        console.log('Precisamos marcar uma reunião')
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, sobrenome, idade, linguagem){
        super(nome,sobrenome,idade);
        this.cargo = "Desenvolvedor";
        this.linguagem = linguagem;
    }
    programar(){
        console.log("Esqueci do ponto e vírgula;")
        console.log('Se compilou é porque roda')
    }
}

const D1 = new Desenvolvedor("Jorge", "Amaro", 45, "C#")
D1.programar()

const G1 = new Gerente("Celso", "Portioli", 57, "Geral")
G1.gerenciar()

//Até aqui, é da atividade anterior; não tiveram mudanças
    function mudando(){ //Função Para o HTML
        let outraLangP = document.getElementById('outraLangP');
        let outraLangR = document.getElementById('outraLangR');
        let linguagemProgramacao = document.getElementById('lang').value;

            if(linguagemProgramacao === 'Outra'){
                outraLangP.style.display = 'block';
                outraLangR.style.display = 'block';
            } else{
                outraLangP.style.display = 'none';
                outraLangR.style.display = 'none';
            }
    }
//A partir daqui, testar em casa... Caso de errado, é daqui pra frente
    function submit(){
        var recebido_1 = new Funcionario(
            this.nome = document.getElementsByName('nome')[0].value,
            this.sobrenome = document.getElementsByName('sobrenome')[0].value,
            this.idade = document.getElementsByName('idade')[0].value,
            this.cargo = document.getElementsByName('cargo')[0].value
        )
            if (linguagemProgramacao === 'Outra'){
                recebido_1.linguagem = document.getElementById('outraLangR')
            } else{
                recebido_1.linguagem = getElementsByName('lang');  
            }
        window.alert ('Registrado, obrigado ' + this.nomecompleto)
        try{
            if(idade<14) throw 'Confira sua idade. Você é muito novo para trabalhar aqui';
            if(idade>85) throw 'O(a) senhor(a) já deveria estar aposentado(a)';
            if(typeof(cargo) != 'string') throw 'Por gentileza, confira o cargo inserido; ele pode estar errado';
        }catch(err){
            mensage.innerHTML = 'Opa, temos um erro... '
        }
    }










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
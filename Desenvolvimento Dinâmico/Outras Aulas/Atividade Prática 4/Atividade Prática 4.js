class Funcionario {
    constructor(nome, sobrenome, idade, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomecompleto = nome + " " + sobrenome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log('Olá, me chamo', this.nomecompleto);
        console.log('Eu sou', this.cargo);
    }

    trabalhar() {
        // Fazer algo dentro da sua função.
    }
}

class Gerente extends Funcionario {
    constructor(nome, sobrenome, idade, departamento) {
        super(nome, sobrenome, idade);
        this.cargo = "Gerente";
        this.departamento = departamento;
    }

    gerenciar() {
        console.log('Precisamos marcar uma reunião');
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, sobrenome, idade, linguagem) {
        super(nome, sobrenome, idade);
        this.cargo = "Desenvolvedor";
        this.linguagem = linguagem;
    }

    programar() {
        console.log("Esqueci do ponto e vírgula;");
        console.log('Se compilou é porque roda');
    }
}

function mudando() { // Função para o HTML
    let outraLangP = document.getElementById('outraLangP');
    let outraLangR = document.getElementById('outraLangR');
    let linguagemProgramacao = document.getElementById('lang').value;

    if (linguagemProgramacao === 'Outra') {
        outraLangP.style.display = 'block';
        outraLangR.style.display = 'block';
    } else {
        outraLangP.style.display = 'none';
        outraLangR.style.display = 'none';
    }
}

function submit(event) {
    event.preventDefault();

    const nome = document.getElementsByName('nome')[0].value;
    const sobrenome = document.getElementsByName('sobrenome')[0].value;
    const idade = document.getElementsByName('idade')[0].value;
    const cargo = document.getElementsByName('cargo')[0].value;
    const linguagemProgramacao = document.getElementById('lang').value;

    let funcionario;

    if (cargo.toLowerCase() === 'gerente') {
        const departamento = document.getElementsByName('departamento')[0].value;
        funcionario = new Gerente(nome, sobrenome, idade, departamento);
    } else if (cargo.toLowerCase() === 'desenvolvedor') {
        funcionario = new Desenvolvedor(nome, sobrenome, idade, linguagemProgramacao);
    } else {
        funcionario = new Funcionario(nome, sobrenome, idade, cargo);
    }

    funcionario.seApresentar();

    alert('Registrado, obrigado ' + funcionario.nomecompleto); //não tá aparecendo... não consegui

    try {
        if (idade < 14) throw 'Confira sua idade. Você é muito novo para trabalhar aqui';
        if (idade > 85) throw 'O(a) senhor(a) já deveria estar aposentado(a)';
        if (typeof cargo !== 'string') throw 'Por gentileza, confira o cargo inserido; ele pode estar errado';
    } catch (err) {
        alert('Opa, temos um erro: ' + err);
    }
}

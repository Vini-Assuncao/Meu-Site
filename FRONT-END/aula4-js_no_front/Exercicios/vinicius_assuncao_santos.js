// Exercício 1: Personalizador de Acesso (Strings e Interação) //////////////////////////////////////////////
// Enunciado: Crie um script que pergunte o nome do usuário e o seu sobrenome em dois prompt diferentes.

// let nome = prompt("Qual o seu nome?").trim()
// let sobrenome = prompt("Qual seu sobrenome?").trim()

// let nomeCompleto = nome.concat(` ${sobrenome}`)

// alert(`Nome completo: ${nomeCompleto.toLowerCase()}`)
// alert(`Largura do nome: ${nomeCompleto.length}`)



// Exercício 2: Calculadora de Divisão de Conta (Aritméticos) /////////////////////////////////////////////////
// Enunciado: Três amigos foram jantar. Crie um script que:

// let valorConta = prompt("Qual o valor da conta?")
// let qtdPessoas = prompt("Quantas pessoas estão na mesa?")

// let valorPorPessoa = valorConta/qtdPessoas

// alert(`Cada amigo deve pagar R$${valorPorPessoa.toFixed(2)}`)



// Exercício 3: Validador de Promoção (Lógicos e Relacionais) ///////////////////////////////////////////////
// Enunciado: Uma loja dá frete grátis se o valor da compra for maior que R$ 150,00 OU se o cliente tiver um cupom de desconto.

// let valorCompra = prompt("Qual o valor da sua compra?")
// let cupomResposta = confirm("Você possui cupom?")

// cupomResposta || valorCompra > 150 ? alert("Frete grátis liberado") : alert("Frete pago")



// Exercício 4: Sorteador de Brindes (Math) ////////////////////////////////////////////////////////
// Enunciado: Crie um script que simule um sorteio de loteria simples.

// let escolha = prompt("Escolha um número de 1 a 10")

// let numeroAleatorio = Math.floor(Math.random()*10)+1

// if (numeroAleatorio == escolha) {
//     alert("Parabéns, você ganhou um brinde!")
// } else {
//     alert(`Que pena, o número sorteado foi ${numeroAleatorio}`)
// }



// Exercício 5: Gestão de Frota (Orientação a Objetos) //////////////////////////////////////////////
// Enunciado: Crie uma classe chamada Veiculo.

// class Veiculo {
//     constructor(modelo, marca, ano) {
//         this.modelo = modelo
//         this.marca = marca
//         this.ano = ano
//     }

//     idadeVeiculo(anoAtual) {
//         return anoAtual-this.ano
//     }
// }

// let carro1 = new Veiculo("Corolla", "Toyota", 2020)

// let data = new Date()
// let ano = data.getFullYear()

// alert(`O carro ${carro1.modelo} possui ${carro1.idadeVeiculo(ano)} anos`)
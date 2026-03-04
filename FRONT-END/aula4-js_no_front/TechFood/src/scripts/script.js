console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByClassName("card")[2])
console.log(document.getElementById("topo_loja"))

// Funções Matemáticas ///////////////////////////////////////////////////////////////////////////////////////////////


// class Prato{
//     constructor(nome, preco) {
//         this.nome = nome
//         this.preco = preco
//     }
//     exibirComMoeda(total) {
//         if(total) {
//             return "R$" + total.toFixed(2)
//         }
//         return "R$" + this.preco.toFixed(2)
//     }
// }

// const lasanha = new Prato("Lasanha a Bolonhesa", 45)

// let qtd = prompt(`Simulação: Quantas unidades de ${lasanha.nome} você deseja?`)

// let total = qtd*lasanha.preco

// alert(`Resumo da simulação: \n Prato: ${lasanha.nome} \n Total: ${lasanha.exibirComMoeda(total)}`)

// Funções de String ////////////////////////////////////////////////////////////////////////////////////////////////

// const cliente = prompt("Para um atendimento personalizado, digite seu nome:")

// let cliente_formatado = cliente.trim().toUpperCase()

// alert(`Bem vindo ${cliente_formatado}!`)
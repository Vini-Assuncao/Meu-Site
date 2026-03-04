// EXEMPLO 1 - Funções de Data e Hora ////////////////////////////////////////////////////////////////////////////////

let tempoAgora = new Date()

let hora = tempoAgora.getHours()

let dataFormatada = tempoAgora.toLocaleString('pt-BR')
let horarioFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log(`Hoje é dia: ${dataFormatada}`)
console.log(`O horário é: ${horarioFormatada}`)
console.log(`Só a hora: ${hora}`)

if (hora >= 6 && hora <= 12){
//    alert("Bom dia!")
} else if(hora > 12 && hora < 18) {
//    alert("Boa tarde!")
} else if (hora >= 18 && hora < 6) {
//    alert("Boa noite!")
}

// EXEMPLO 2 - Funções Matemáticas ////////////////////////////////////////////////////////////////////////////////

let precoQuebrado = 45.89
console.log(Math.round(precoQuebrado)) // 46 (Arredonda para o mais próximo)
console.log(Math.floor(precoQuebrado)) // 45 (Arredonda para baixo)
console.log(Math.random()) // Gera número entre 0 e 1

// EXEMPLO 3 - Funções de String ////////////////////////////////////////////////////////////////////////////////

let nome = " TechFood "
console.log(nome.trim()) // Remove espaços vazios nas pontas
console.log(nome.toUpperCase()) // TECHFOOD
console.log(nome.length) // Conta os caracteres
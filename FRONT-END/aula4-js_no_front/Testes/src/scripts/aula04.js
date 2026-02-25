let tempoAgora = new Date()

let hora = tempoAgora.getHours()

let dataFormatada = tempoAgora.toLocaleString('pt-BR')
let horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log(`Hoje é dia: ${dataFormatada}`)
console.log(`A hora é: ${horaFormatada}`)
console.log(`Só a hora: ${hora}`)

if(hora > 12 && hora < 18) {
    alert("Boa tarde!")
} else if (hora >= 18 && hora < 6) {
    alert("Boa noite!")
}